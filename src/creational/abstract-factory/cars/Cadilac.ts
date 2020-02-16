import { ICar } from './Car'
export default class Cadilac implements ICar {
  public name: string = 'Cadilac'

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name
  }
}