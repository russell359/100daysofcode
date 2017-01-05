#pragma strict

var target : Transform;
var attackRange = 15.0;
var distance : float;
var turnSpeed = 4.0;

var damage = 5;
private var attackTime: float;
var attackRepeatTime = 1;

//var isDamaging : boolean;


function Update () 
{
    distance = Vector3.Distance(target.position, transform.position);
    if (distance < attackRange)
    {
        LookAt();
        Attack();
    }
}

function LookAt ()
{
    Debug.Log("Look at");
    var rotation = Quaternion.LookRotation(target.position - transform.position);
    transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * turnSpeed);
}

function Attack ()
{
    if (Time.time > attackTime)
    {
        var rayHit : RaycastHit;
        Debug.Log("Attack");
        if (Physics.Raycast (transform.position, transform.forward, rayHit, 100))
        {
            rayHit.transform.SendMessage("ApplyDamagePlayer", damage, SendMessageOptions.DontRequireReceiver);
            rayHit.transform.SendMessage("TakeDamage", damage, SendMessageOptions.DontRequireReceiver);
        }
        attackTime = Time.time + attackRepeatTime;
    }
    
}
