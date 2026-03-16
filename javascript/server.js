const http = require("http");

const PORT = process.env.PORT || 5914;

/**
 * Undervisnings-logg:
 * Dette er en "rekonstruert" request (ikke ekte rå-bytes),
 * men den viser hvordan HTTP/1.1 ser ut: startlinje + headers + blank linje.
 */
function logRequest(req) {
  let raw = `${req.method} ${req.url} HTTP/1.1\r\n`;
  for (const key of Object.keys(req.headers)) {
    raw += `${key}: ${req.headers[key]}\r\n`;
  }
  raw += `\r\n`;
  console.log(raw);
}

/**
 * Små hjelpefunksjoner for å svare med riktig Content-Type.
 */
function sendText(res, statusCode, text) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end(text);
}

function sendHtml(res, statusCode, html) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(html);
}

function sendJson(res, statusCode, obj) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(obj, null, 2));
}

/**
 * Enkel URL-parsing:
 * req.url kan være f.eks. "/hei?navn=Ola&alder=16"
 * Vi splitter på "?" for å få path og querystring.
 */
function parseUrl(reqUrl) {
  const [pathPart, queryPart = ""] = reqUrl.split("?");
  const query = {};

  if (queryPart !== "") {
    const pairs = queryPart.split("&");
    for (const pair of pairs) {
      const [k, v = ""] = pair.split("=");
      query[decodeURIComponent(k)] = decodeURIComponent(v);
    }
  }

  return { path: pathPart, query };
}

/**
 * Leser body fra requesten (for POST).
 * Body kommer i biter (chunks), så vi samler opp til "end".
 */
function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";

    req.on("data", chunk => {
      data += chunk;

      // enkel beskyttelse: maks ca 1MB
      if (data.length > 1_000_000) {
        reject(new Error("Body for stor"));
        req.destroy();
      }
    });

    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  logRequest(req);

  // Plukk ut path og query
  const { path, query } = parseUrl(req.url);

  // ---------------------------
  // RUTING (enkelt if/else)
  // ---------------------------

  // 1) GET /
  if (req.method === "GET" && path === "/") {
    const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>HTTP-øving</title>
  </head>
  <body>
    <h1>HTTP-øving</h1>
    <ul>
      <li><a href="/json">/json</a></li>
      <li><a href="/hei?navn=Ola">/hei?navn=Ola</a></li>
      <li><a href="/echo">/echo</a></li>
      <li><a href="/pokemon">/pokemon</a></li>
    </ul>
  </body>
</html>`;


    return sendHtml(res, 200, html);
  }

  // 2) GET /json
  if (req.method === "GET" && path === "/json") {
    return sendJson(res, 200, { ok: true, time: new Date().toISOString() });
  }

  // 3) GET /hei?navn=...
  if (req.method === "GET" && path === "/hei") {
    // query.navn kan være undefined hvis ikke sendt
    const navn = query.navn;
    if (navn) return sendText(res, 200, `Hei, ${navn}!\n`);
    return sendText(res, 200, "Hei!\n");
  }


  
  if (req.method === "GET" && path === "/pokemon") {
    let pokeBilde = ""
    if (query.id) {
         pokeBilde = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${query.id}.png" alt="Pokemon-bilde"></img>`;
    } 
    const html = `<form method="POST" action="/pokemon">
     <label> Skriv noe: <input name="tekst"></labelS> 
    <button type="submit">Send</button> 
    </form>`
  ;
 return sendHtml(res, 200, html);
    }
if (req.method === "POST" && path === "/pokemon") {
  const body = await readBody(req);
  const id = body.trim();

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  const imageUrl = data.sprites.front_default;

  return sendText(res, 200, imageUrl + "\n");
}



    if (req.method === "GET" && path === "/echo") {
    const html =`<form method="POST" action="/echo">
     <label> Skriv noe: <input name="tekst"></label> 
    <button type="submit">Send</button> 
    </form>`
    return sendHtml(res, 200, html);
  }
  
  // 4) POST /echo  (sender tilbake det du postet)
  if (req.method === "POST" && path === "/echo") {
    const body = await readBody(req);
    return sendText(res, 200, body + "\n");
  }

  // 5) 404 - alt annet
  return sendText(res, 404, "Fant ikkje den sida\n");
});

server.listen(PORT, () => {
  console.log(`Server kjører på http://localhost:${PORT}/`);
});
