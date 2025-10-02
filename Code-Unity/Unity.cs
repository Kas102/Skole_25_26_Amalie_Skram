using UnityEngine;

public class SideWalk : MonoBehaviour
{
    public float moveSpeed = 5f; // Movement speed
    private Rigidbody rb;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
        if (rb == null)
        {
            Debug.LogError("No Rigidbody found on the GameObject!");
        }
    }

    void Update()
    {
        if (Input.GetKey(KeyCode.A))
        {
            MoveLeft();
        }
    }

    void MoveLeft()
    {
        Vector2 movement = Vector2.left * moveSpeed * Time.deltaTime;
        rb.MovePosition(transform.position + movement);
    }
}
