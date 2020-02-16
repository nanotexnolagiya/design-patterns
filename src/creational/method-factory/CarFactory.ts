import { ICar } from './cars/Car'
import BMW from './cars/BMW'
import Porsche from './cars/Porsche'

export default class CarFactory {
  private static readonly BMW_CAR: string = 'bmw'
  private static readonly PORSCHE_CAR: string = 'porsche'

  public createCar(carBrand: string): ICar {
    if (carBrand === CarFactory.BMW_CAR) {
      return new BMW()
    } else if (carBrand === CarFactory.PORSCHE_CAR) {
      return new Porsche()
    } else {
      throw new Error('Not found this brand car')
    }
  }
}