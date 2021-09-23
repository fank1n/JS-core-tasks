class Car {
    constructor(){}
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume = 0;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    get brand() {
        return this.#brand;
    }
    set brand(brandName){
        if (typeof brandName === 'string' && brandName.length > 0 && brandName.length < 50){
            this.#brand = brandName;
        }
        else {throw new Error ('Неверное имя');}
    }

    get model(){
        return this.#model;
    }
    set model(modelName){
        if (typeof modelName === 'string' && modelName.length > 0 && modelName.length <= 50){
            this.#model = modelName;
        }
        else {throw new Error ('Неверное имя модели');}
    } 

    get yearOfManufacturing(){
        return this.#yearOfManufacturing;
    }
    set yearOfManufacturing(setYear){
        if (Number.isInteger(setYear) === true && setYear >= 1900 && setYear <= new Date().getFullYear()){
            this.#yearOfManufacturing = setYear;
        }
        else {throw new Error ('Неверный год изготовления');}
    }
    
    get maxSpeed(){
        return this.#maxSpeed; 
    }
    set maxSpeed(setMaxSpeed){
        if (Number.isInteger(setMaxSpeed) === true && setMaxSpeed >= 100 && setMaxSpeed <= 300){
            this.#maxSpeed = setMaxSpeed;
        }
        else {throw new Error ('Неверная максимальная скорость');}
    }

    get maxFuelVolume(){
        return this.#maxFuelVolume;
    }
    set maxFuelVolume(setMaxFuelVolume){
        if (Number.isInteger(setMaxFuelVolume) === true && setMaxFuelVolume >= 5 && setMaxFuelVolume <= 20){
            this.#maxFuelVolume = setMaxFuelVolume;
        }
        else {throw new Error ('Неверное максимальное количество топлива');}
    }

    get fuelConsumption(){
        return this.#fuelConsumption;
    }
    set fuelConsumption(setFuelCons){
        if (Number.isInteger(setFuelCons) === true && setFuelCons > 0){
            this.#fuelConsumption = setFuelCons;
        }
        else {throw new Error ('Неверный расход топлива');}
    }

    get currentFuelVolume(){
        return this.#currentFuelVolume;
    }

    get isStarted(){
        return this.#isStarted;
    }

    get mileage(){
        return this.#mileage;
    }

    start(){
        if (this.isStarted === true){
            throw new Error ('Машина уже заведена');
        }
        else {return this.#isStarted = true;}
    }
    
    shutDownEngine(){
        if (this.isStarted === false){
            throw new Error ('Машина ещё не заведена');
        }
        else {return this.#isStarted = false;}
    }

    fillUpGasTank(fuelValue){
        if (Number.isInteger(fuelValue) === false || fuelValue <= 0){
            throw new Error ('Неверное количество топлива для заправки');
        }
        else if ((fuelValue + this.#currentFuelVolume) > this.#maxFuelVolume){
            throw new Error ('Топливный бак переполнен');
        }
        else {return this.#currentFuelVolume += fuelValue;}
    }

    drive(speed, hours){
        let koef = (speed * hours) / 100;
        if (Number.isInteger(speed) === false || speed <= 0){
            throw new Error ('Неверная скорость');
        }
        else if (Number.isInteger(hours) === false || hours <= 0){
            throw new Error ('Неверное количество часов');
        }
        else if (speed > this.#maxSpeed){
            throw new Error ('Машина не может ехать так быстро');
        }
        else if (this.#isStarted === false){
            throw new Error ('Машина должна быть заведена, чтобы ехать');
        }
        else if (this.#currentFuelVolume <= 0 || this.#fuelConsumption * koef > this.#currentFuelVolume){
            throw new Error('Недостаточно топлива');
        }
        else{
         this.#mileage += (speed * hours);
         this.#currentFuelVolume -= (this.#fuelConsumption * koef);
        }
    }
}

module.exports = {Car};