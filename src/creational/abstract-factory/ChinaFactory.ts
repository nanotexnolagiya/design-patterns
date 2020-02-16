import { IAbstractFactory } from './AbstractFactory'
import { ICar } from './cars/Car'
import Lenova from './laptops/Lenova'
import ChinaMotors from './cars/ChinaMotors'
import { ILaptop } from './laptops/Laptop'

export default class ChinaFactory implements IAbstractFactory {
  public createCar(): ICar {
    return new ChinaMotors()
  }

  public createLaptop(): ILaptop {
    return new Lenova()
  }
}