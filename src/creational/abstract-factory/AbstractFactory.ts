// import CarFactory from './CarFactory'
// import LaptopFactory from './LaptopFactory'
import { ICar } from './cars/Car'
import { ILaptop } from './laptops/Laptop'

export interface IAbstractFactory {
  createCar(): ICar
  createLaptop(): ILaptop
}

// export default class AbstractFactory {
//   private static readonly CAR_FACTORY = 'car'
//   private static readonly LAPTOP_FACTORY = 'laptop'
//   createFactory(factoryName: string) {
//     if (factoryName === AbstractFactory.CAR_FACTORY) {
//       return new CarFactory()
//     } else if (factoryName === AbstractFactory.LAPTOP_FACTORY) {
//       return new LaptopFactory()
//     } else {
//       throw new Error('Not found this factory')
//     }
//   }
// }