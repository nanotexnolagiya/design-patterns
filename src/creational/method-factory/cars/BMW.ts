import { ICar } from './Car'
export default class BMW implements ICar {
  public name: string = 'BMW'

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name
  }
}