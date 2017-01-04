var timeIn = 50;



function Update()
{
    timeIn -= 1;
    transform.Translate(Vector3(0, 0, 0.1));
    if (timeIn <= 0) {
        Destroy(this.gameObject);
    }
}