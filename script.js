function concatStrings(str, sep) {
  
  let res = [str];

  function addMessage(next) {
    if (typeof next !== "string") {
      if (res.length === 1) {
        return res[0];
      }
      else if (typeof sep === "string") {
        return res.join(sep);
      }
      return res.join("");
    }
    res = [...res, next];
    return addMessage;
  }

  return addMessage;
}





class Calculator {

    constructor(num1, num2){
      this.num1 = num1;
      this.num2 = num2;

      if(num1 === undefined || num2 === undefined){
      throw new Error ('Must be two parameters in constructor');
      }
      else if(Number.isInteger(num1) === false || Number.isInteger(num2) === false){
      throw new Error ('Must be only numbers in constructor');
      }
    }

    setX(newNum1){
        if (newNum1 === undefined || Number.isInteger(newNum1) === false){
        throw new Error ("X is NaN");
        } return this.num1 = newNum1;
    }

    setY(newNum2){
        if (newNum2 === undefined || Number.isInteger(newNum2) === false){
        throw new Error ("Y is NaN");
        } return this.num1 = newNum2;
    }

    logSum = () => {
      console.log(this.num1 + this.num2);
    }

    logMul = () =>{
      console.log(this.num1 * this.num2);
    }

    logSub = () =>{
      console.log(this.num1 - this.num2);
    }

    logDiv = () =>{
      if (this.num2 === 0) throw new Error ('Y = 0');
      console.log(this.num1 / this.num2);
      }
    }