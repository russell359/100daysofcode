var spawnPoint : Transform;
var bullet : Transform;
var player : Transform;


function Update()
{
    var playerDistance = Vector3.Distance(this.transform.position, player.position);
    transform.LookAt(player.transform);
    if(playerDistance <= 7)
    {
        Instantiate(bullet, spawnPoint.position, spawnPoint.rotation);
        
    }
    if(playerDistance > 3){
        transform.Rotate(Vector3(0,0,0.05));
        
    }
}
