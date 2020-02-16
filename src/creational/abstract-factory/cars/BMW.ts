import Car from './Car'
export default class BMW extends Car {
  name: 'BMW'

  constructor(name) {
    super(name)
  }

  getName(): string {
    return this.name
  }
}