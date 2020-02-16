import { ILaptop } from './Laptop'
export default class Macbook implements ILaptop {
  name: string = 'Macbook'

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name
  }
}