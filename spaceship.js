


class Spaceship {
  constructor(input) {
    this.id=input.id;
    this.name=input.name;
    this.phasers=input.phasers;
    this.shields=input.shields;
    this.cloaked=false;
    this.warpDrive='disengaged'
    this.docked=true;
    this.phasersCharge='uncharged';
    Store.data.spaceships.push(this); 
  }
}