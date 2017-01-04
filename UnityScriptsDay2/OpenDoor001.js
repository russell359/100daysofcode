
import UnityEngine.UI;

var TheDistance : float = PlayerCasting.DistanceFromTarget;
var TextDisplay : GameObject;

var TheDoor : GameObject;

function Update () {
    TheDistance = PlayerCasting.DistanceFromTarget;
    if (Input.GetButtonDown("Action")){
        if (TheDistance <= 2) {
            OpenTheDoor();

        }
    }

}

function OnMouseOver () {
	if (TheDistance <= 2) {
		TextDisplay.GetComponent.<Text>().text = "Press Button";
	}
}

function OnMouseExit () {
	TextDisplay.GetComponent.<Text>().text = "";
}

function OpenTheDoor () {
    TheDoor.GetComponent(Animator).enabled=true;
    yield WaitForSeconds(1);
    TheDoor.GetComponent(Animator).enabled=false;
    yield WaitForSeconds(5);
    TheDoor.GetComponent(Animator).enabled=true;
    yield WaitForSeconds(1);
    TheDoor.GetComponent(Animator).enabled=false;
}