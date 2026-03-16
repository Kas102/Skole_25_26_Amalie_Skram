// Get webcam video element
const videoElement = document.getElementById('webcam');
const statusElement = document.getElementById('status');

// Initialize FaceMesh
const faceMesh = new FaceMesh.FaceMesh({
  locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
});
faceMesh.setOptions({
  maxNumFaces: 1,
  refineLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});

// Handle results
faceMesh.onResults(onResults);

// Set up the webcam
const camera = new Camera.Camera(videoElement, {
  onFrame: async () => {
    await faceMesh.send({image: videoElement});
  },
  width: 640,
  height: 480
});
camera.start();

// Blink detection
let blinked = false;
function onResults(results) {
  if (!results.multiFaceLandmarks || results.multiFaceLandmarks.length === 0) {
    return;
  }

  const landmarks = results.multiFaceLandmarks[0];

  // Eye landmarks (MediaPipe uses indexes for each eye)
  const leftEyeTop = landmarks[159];
  const leftEyeBottom = landmarks[145];
  const leftEyeLeft = landmarks[33];
  const leftEyeRight = landmarks[133];

  // Calculate Eye Aspect Ratio (EAR)
  const vertical = Math.hypot(
    leftEyeTop.x - leftEyeBottom.x,
    leftEyeTop.y - leftEyeBottom.y
  );
  const horizontal = Math.hypot(
    leftEyeLeft.x - leftEyeRight.x,
    leftEyeLeft.y - leftEyeRight.y
  );
  const EAR = vertical / horizontal;

  // Blink threshold (tune if needed)
  if (EAR < 0.25 && !blinked) {
    blinked = true;
    statusElement.innerText = "Blink detected!";
    console.log("Blink!");
  } else if (EAR >= 0.25) {
    blinked = false;
  }
}