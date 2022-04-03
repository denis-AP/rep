//* 1) Создать класс MedicineBuildings. Сделать так, чтобы каждый instance этого класса имел поля: numberOfHospital, numberOfStuff, isOpened (bool type) и метод - getInfo(),
//* который является геттером и возвращает нам все поля нашего объекта в одной строке.
class MedicineBuildings {
  constructor({ numberOfHospital, numberOfStuff, isOpened }) {
    this.numberOfHospital = numberOfHospital;
    this.numberOfStuff = numberOfStuff;
    this.isOpened = isOpened;
  }
  get getinfo() {
    return `Info - numberOfHospital=${this.numberOfHospital}, numberOfStuff =${this.numberOfStuff}, isOpenend=${this.isOpened}`;
  }
}
let InfoHospital = new MedicineBuildings({
  numberOfHospital: 2,
  numberOfStuff: 25,
  isOpened: true,
});
InfoHospital.getinfo;

//*2) Создать класс Labrotory, который наследуется от класса MedicineBuildings (см. зад. 1). Расширить функционал подкласса с помощью конструктора, и добавить всем экземплярам
//* класса Labrotory ещё одно поле - labStatus. Далее, создать возможность задания ещё одного поля - directorOfLab, с помощью сеттера. (в классе Labrotory).

class Labrotory extends MedicineBuildings {
  #Labstatus;
  #directorofLab;
  constructor({
    numberOfHospital,
    numberOfStuff,
    isOpened,
    Labstatus,
    directorofLab,
  }) {
    super({ numberOfHospital, numberOfStuff, isOpened });
    this.Labstatus = Labstatus;
    this.directorofLab = directorofLab;
  }
  get labr() {
    return this.Labstatus;
  }
  set labr(directorOfLab) {
    return this.Labstatus;
  }
  get director() {
    return this.directorofLab;
  }
  set director(directorOfLab) {
    return this.directorofLab;
  }
}

let laba = new Labrotory({
  numberOfHospital: 2,
  numberOfStuff: 25,
  isOpened: true,
  directorofLab: "denis",
  Labstatus: "close",
});
//* 3) Создать класс CryogenLabrotory, который наследуется от класса Labrotory. Расширить функционал подкласса с помощью конструктора, и добавить всем экземплярам
// *класса Labrotory ещё одно поле - isCryogen (bool). Создать метод, getAllInfo (для класса CryogenLabrotory), который выводит в консоль поля все поля объекта,
// *которые он получал путём наследования.

class CryogenLabrotory extends Labrotory {
  constructor({
    numberOfHospital,
    numberOfStuff,
    isOpened,
    Labstatus,
    directorofLab,
    isCryogen,
  }) {
    super({
      numberOfHospital,
      numberOfStuff,
      isOpened,
      Labstatus,
      directorofLab,
    });
    this.isCryogen = isCryogen;
  }
  get cryo() {
    return this.isCryogen;
  }
  set cryo(isCryogen) {
    return (this.isCryogen = isCryogen);
  }
  get getAllinfo() {
    console.log({
      numberOfHospital,
      numberOfStuff,
      isOpened,
      Labstatus,
      directorofLab,
      isCryogen,
    });
  }
}
let allInfo = new CryogenLabrotory({
});
console.log(allInfo);
