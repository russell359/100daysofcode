function Update() {
    if (GlobalAmmo.LoadedAmmo >= 1){
        if (Input.GetButtonDown("Fire1")) {
            var gunsound : AudioSource = GetComponent.<AudioSource>();
            gunsound.Play();
            GetComponent.<Animation>().Play("GunShot");
            GlobalAmmo.LoadedAmmo -= 1;
        }
    }

}