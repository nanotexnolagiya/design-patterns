import { ICar } from './Car'
export default class ChinaMotors implements ICar {
  public name: string = 'ChinaMotors'

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name
  }
}