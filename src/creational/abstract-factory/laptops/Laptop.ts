export interface ILaptop {
  name: string
  getName(): string
}

export default class Laptop implements ILaptop {
  name: string

  constructor(name) {
    this.name = name
  }

  getName(): string {
    return this.name
  }
}