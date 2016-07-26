


class CrewMember {
  constructor(input) {
    this.id=input.id;
    this.position=input.position;
    this.currentShip="Looking for a Rig";
    // this.spaceshipId=null;
    // this.currentShip.name=null;
    Store.data.crewMembers.push(this); 
  }

  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig" || this.position != "Pilot" ){
      return 'had no effect'
    }
    else {
       this.currentShip.warpDrive='engaged!';
    }
  }

  setsInvisibility() {
    if (this.currentShip === "Looking for a Rig" || this.position != "Defender" ){
      return 'had no effect'
    }
    else {
      this.currentShip.cloaked=true;
    }
  }

  chargePhasers() {
    if (this.currentShip === "Looking for a Rig" || this.position != "Gunner" ){
      return 'had no effect'
    }
    else {
      this.currentShip.phasersCharge='charged!';
    }
  }

  assignShip(ship) {
    this.spaceshipId=ship.id;
    this.currentShip=ship;
    ship.docked=false;
  }



}

 