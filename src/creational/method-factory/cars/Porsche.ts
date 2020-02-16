import { ICar } from './Car'
export default class Porsche implements ICar {
  public name: string = 'Porsche'

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name
  }
}