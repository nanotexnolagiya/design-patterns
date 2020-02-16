import Laptop from './Laptop'
export default class Macbook extends Laptop {
  name: 'Macbook'

  constructor(name) {
    super(name)
  }

  getName(): string {
    return this.name
  }
}