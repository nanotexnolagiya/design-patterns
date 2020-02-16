export interface ICar {
  name: string
  getName(): string
}

export default class Car implements ICar {
  name: string

  constructor(name) {
    this.name = name
  }

  getName(): string {
    return this.name
  }
}