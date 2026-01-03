
export interface Shape {
  readonly length: number,
  width: number,
  area: () => number
}

export class Rectangle implements Shape {
  public length: number;
  public width: number;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

export class Rectangle2 {
  public length: string;
  public width: string;

  constructor(length: string, width: string) {
    this.length = length;
    this.width = width;
  }

  area() {
    return (Number(this.length) * Number(this.width)).toString();
  }
}


export class Rectangle3<T> {
  length: T;
  width: T;

  constructor(length: T, width: T) {
    this.length = length;
    this.width = width;
  }

  area() {
    if(typeof this.length === "number" && typeof this.width === "number")
      return this.length * this.width;
    else if(typeof this.length === "string" && typeof this.width === "string")
      return (Number(this.length) * Number(this.width)).toString();
    else {
      throw new Error("No type defined!");
    }
  } 
}

