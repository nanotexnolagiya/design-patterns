import { ILaptop } from './laptops/Laptop'
import Asus from './laptops/Asus'
import Macbook from './laptops/Macbook'

export interface ILaptopFactory {
  createAsus(name: string): ILaptop
  createMacbook(name: string): ILaptop
}

export default class LaptopFactory implements ILaptopFactory {
  createAsus(name: string): ILaptop {
    return new Asus(name)
  }

  createMacbook(name: string): ILaptop {
    return new Macbook(name)
  }
}