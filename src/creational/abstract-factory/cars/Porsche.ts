import Car from './Car'
export default class Porsche extends Car {
  name: 'Porsche'

  constructor(name) {
    super(name)
  }

  getName(): string {
    return this.name
  }
}