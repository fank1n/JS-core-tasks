class Car {
    constructor(){}
    #brand = String;
    #model = String;
    #yearOfManufacturing = Number;
    #maxSpeed = Number;
    #maxFuelVolume = 0;
    #fuelConsumption = Number;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    get brand() {
        return this.#brand;
    }
    set brand(brandName){
        if(typeof brandName === 'string' && brandName.length > 0 && brandName.length < 50){
            this.#brand = brandName;
        }
        else throw new Error ('Invalid name of car');
    }

    get model(){
        return this.#model;
    }
    set model(modelName){
        if(typeof modelName === 'string' && modelName.length > 0 && modelName.length <= 50){
            this.#model = modelName;
        }
        else throw new Error ('Invalid name of model');
    } 

    get yearOfManufacturing(){
        return this.#yearOfManufacturing;
    }
    set yearOfManufacturing(setYear){
        if(Number.isInteger(setYear) === true && setYear >= 1900 && setYear <= new Date().getFullYear()){
            this.#yearOfManufacturing = setYear;
        }
        else throw new Error ('Invalid year of manufactoring');
    }
    
    get maxSpeed(){
        return this.#maxSpeed; 
    }
    set maxSpeed(setMaxSpeed){
        if(Number.isInteger(setMaxSpeed) === true && setMaxSpeed >= 100 && setMaxSpeed <= 300){
            this.#maxSpeed = setMaxSpeed;
        }
        else throw new Error ('Invalid max speed');
    }

    get maxFuelVolume(){
        return this.#maxFuelVolume;
    }
    set maxFuelVolume(setMaxFuelVolume){
        if(Number.isInteger(setMaxFuelVolume) === true && setMaxFuelVolume >= 5 && setMaxFuelVolume <= 20){
            this.#maxFuelVolume = setMaxFuelVolume;
        }
        else throw new Error ('Invalid max fuel volume');
    }

    get fuelConsumption(){
        return this.#fuelConsumption;
    }
    set fuelConsumption(setFuelCons){
        if(Number.isInteger(setFuelCons) === true && setFuelCons > 0){
            this.#fuelConsumption = setFuelCons;
        }
        else throw new Error ('Invalid fuel consumption');
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
        if(this.isStarted === true){
            throw new Error ('The car is already started');
        }
        else return this.#isStarted = true;
    }
    
    shutDownEngine(){
        if(this.isStarted === false){
            throw new Error ('The car engine is already shutted down')
        }
        else return this.#isStarted = false;
    }

    fillUpGasTank(fuelValue){
        if (Number.isInteger(fuelValue) === true && fuelValue > 0 && (fuelValue + this.#currentFuelVolume) <= this.#maxFuelVolume){
            return this.#currentFuelVolume += fuelValue; 
        }
        else throw new Error('Invalid amount of fuel')
    }

    drive(speed, hours){
        let koef = (speed * hours) / 100;
        if(Number.isInteger(speed) === false || speed <= 0){
            throw new Error ('Invalid value of speed');
        }
        else if(Number.isInteger(hours) === false || hours <= 0){
            throw new Error ('Invalid amount of hours');
        }
        else if(speed > this.#maxSpeed){
            throw new Error ('The car cannot go that fast');
        }
        else if (this.#isStarted === false){
            throw new Error ('The car must be started to drive')
        }
        else if (this.#currentFuelVolume <= 0 || this.#fuelConsumption * koef > this.#currentFuelVolume){
            throw new Error('Not enough fuel');
        }
        else{
         this.#mileage += (speed * hours);
         this.#currentFuelVolume -= (this.#fuelConsumption * koef);
        }
    }
}
module.exports = {Car};