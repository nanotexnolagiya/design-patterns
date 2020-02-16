import Laptop from './Laptop'
export default class Asus extends Laptop {
  name: 'Asus'

  constructor(name) {
    super(name)
  }

  getName(): string {
    return this.name
  }
}