import { ILaptop } from './Laptop'
export default class Lenova implements ILaptop {
  name: string = 'Lenova'

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name
  }
}