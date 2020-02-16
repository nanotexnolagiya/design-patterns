export default class Singleton {
  private static instance: Singleton

  private constructor() {
  }

  public static getInstance(): Singleton {
    if (Singleton.instance === null) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}