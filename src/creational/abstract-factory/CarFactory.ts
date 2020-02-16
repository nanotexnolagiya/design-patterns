import { ICar } from './cars/Car'
import BMW from './cars/BMW'
import Porsche from './cars/Porsche'

export interface ICarFactory {
  createBMW(name: string): ICar
  createPorsche(name: string): ICar
}

export default class CarFactory implements ICarFactory {
  createBMW(name: string): ICar {
    return new BMW(name)
  }

  createPorsche(name: string): ICar {
    return new Porsche(name)
  }
}