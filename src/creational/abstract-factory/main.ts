import { IAbstractFactory } from './AbstractFactory'
import USAFactory from './USAFactory'
import ChinaFactory from './ChinaFactory'
import { ICar } from './cars/Car'

const usaFactory: IAbstractFactory = new USAFactory()
const chinaFactory: IAbstractFactory = new ChinaFactory()

const usaCar: ICar = usaFactory.createCar()
const chinaCar: ICar = chinaFactory.createCar()


console.log(usaCar.getName(), chinaCar.getName())