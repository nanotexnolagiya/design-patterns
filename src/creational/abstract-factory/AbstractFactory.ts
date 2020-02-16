import CarFactory, { ICarFactory } from './CarFactory'
import LaptopFactory, { ILaptopFactory } from './LaptopFactory'

export interface IAbstractFactory {
  getCarFactory: ICarFactory,
  getLaptopFactory: ILaptopFactory
}

export default class AbstractFactory implements IAbstractFactory {
  getCarFactory(): ICarFactory {
    return new CarFactory()
  }

  getLaptopFactory(): ILaptopFactory {
    return new LaptopFactory()
  }
}