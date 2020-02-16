import CarFactory from './CarFactory'

const carFactory = new CarFactory()

const porsche = carFactory.createCar('porsche')

console.log(porsche.getName())