import { IAbstractFactory } from './AbstractFactory'
import Cadilac from './cars/Cadilac'
import Macbook from './laptops/Macbook'
import { ILaptop } from './laptops/Laptop'
import { ICar } from './cars/Car'


export default class USAFactory implements IAbstractFactory {
  public createCar(): ICar {
    return new Cadilac()
  }

  public createLaptop(): ILaptop {
    return new Macbook
  }
}