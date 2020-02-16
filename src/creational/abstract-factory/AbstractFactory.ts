import { ICar } from './cars/Car'
import { ILaptop } from './laptops/Laptop'

export interface IAbstractFactory {
  createCar(): ICar
  createLaptop(): ILaptop
}