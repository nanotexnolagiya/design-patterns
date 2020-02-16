class Singleton {
  public static instance: Singleton

  getInstance() {
    if(Singleton.instance === null){
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }
}