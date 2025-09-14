class Rectange{
  #num;
  constructor(length, width){
    this.length = length;
    this.width = width;
  }

  static sayHello() {
    console.log("hi there!")
  }

  area(){
    return this.length * this.width;
  }

  get getLength(){
    return this.length;
  }

  get getWidth() {
    return this.width;
  }

  set setLength(len) {
    this.length = len;
  }

  set setNum(num){
    this.#num = num;
  }

  get #getNum() {
    return this.#num;
  }
}

class Cuboid extends Rectange {
  constructor(length, width, height){
    super(length, width);
    this.height = height;
  }

  volume() {
    return this.length * this.width * this.height;
  }
}

const r1 = new Rectange(20, 50);
console.log(r1);

const c1 = new Cuboid(40, 50, 60);
console.log(c1);
console.log(c1.area())
console.log(c1.volume())



