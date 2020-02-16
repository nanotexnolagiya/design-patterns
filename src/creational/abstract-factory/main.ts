import AbstractFactory from './AbstractFactory'

const factory = new AbstractFactory()
const carFactory = factory.getCarFactory()
const laptopFactory = factory.getLaptopFactory()

const bmwX5 = carFactory.createBMW('BMW X5')
const macbookAir = laptopFactory.createMacbook('Mackbook Air')

console.log(bmwX5.getName(), macbookAir.getName())