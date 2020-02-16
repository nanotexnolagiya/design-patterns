import { ILaptop } from './laptops/Laptop'
import Lenova from './laptops/Lenova'
import Macbook from './laptops/Macbook'

export default class LaptopFactory {
  private static readonly ASUS: string = 'asus'
  private static readonly MACBOOK: string = 'mackbook'

  public createLaptop(laptopBrand: string): ILaptop {
    if (laptopBrand === LaptopFactory.ASUS) {
      return new Lenova()
    } else if (laptopBrand === LaptopFactory.MACBOOK) {
      return new Macbook()
    } else {
      throw new Error('Not found this brand laptop')
    }
  }
}