import { ICar } from './cars/Car'
import ChinaMotors from './cars/ChinaMotors'
import Cadilac from './cars/Cadilac'

export default class CarFactory {
  private static readonly ChinaMotors_CAR: string = 'bmw'
  private static readonly PORSCHE_CAR: string = 'porsche'

  public createCar(carBrand: string): ICar {
    if (carBrand === CarFactory.ChinaMotors_CAR) {
      return new ChinaMotors()
    } else if (carBrand === CarFactory.PORSCHE_CAR) {
      return new Cadilac()
    } else {
      throw new Error('Not found this brand car')
    }
  }
}