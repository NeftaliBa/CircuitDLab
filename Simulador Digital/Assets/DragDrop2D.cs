using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DragDrop2D : MonoBehaviour
{
    Vector3 offset;
    Collider2D myCollider2D; // Cambio de nombre

    public string destinationTag = "DropArea";

    void Awake()
    {
        myCollider2D = GetComponent<Collider2D>(); // Actualización de la asignación de la variable
    }

    void OnMouseDown()
    {
        offset = transform.position - MouseWorldPosition();
    }

    void OnMouseDrag()
    {
        transform.position = MouseWorldPosition() + offset;
    }

    void OnMouseUp()
    {
        myCollider2D.enabled = false; // Actualización del uso de la variable
        var rayOrigin = Camera.main.transform.position;
        var rayDirection = MouseWorldPosition() - Camera.main.transform.position;
        RaycastHit2D hitInfo = Physics2D.Raycast(rayOrigin, rayDirection, Mathf.Infinity);
        if (hitInfo)
        {
            if (hitInfo.transform.tag == destinationTag)
            {
                transform.position = hitInfo.transform.position + new Vector3(0, 0, -0.01f);
            }
        }
        myCollider2D.enabled = true; // Actualización del uso de la variable
    }

    Vector3 MouseWorldPosition()
    {
        var mouseScreenPos = Input.mousePosition;
        mouseScreenPos.z = Camera.main.WorldToScreenPoint(transform.position).z;
        return Camera.main.ScreenToWorldPoint(mouseScreenPos);
    }
}
