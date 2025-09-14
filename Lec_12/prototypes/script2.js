
function Rectange(length, width){
  this.length = length;
  this.width = width;
}

Rectange.prototype.area = function(){
  return this.length * this.width;
}

function Cuboid (length, width, height) {
  Rectange.call(this, length, width);
  this.height = height;
}

Cuboid.prototype = Object.create(Rectange.prototype);

Cuboid.prototype.volume = function(){
  return this.length * this.width * this.height;
}


const r1 = new Rectange(40, 20);
console.log(r1);

const c1 = new Cuboid(40, 40, 40);
console.log(c1);
console.log("volume:", c1.volume())
// console.log(c1.area())