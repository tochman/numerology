class BirthNumber {
  constructor(args) {
    this.day = args.day;
    this.month = args.month;
    this.year = args.year;
  }
  calculate() {
    const calculatedDay = this.#toOneDigit(this.day);
    const calculatedMonth = this.#toOneDigit(this.month);
    const calculatedYear = this.#toOneDigit(this.year);
    const calculatedBirthNumber =
      calculatedDay + calculatedMonth + calculatedYear;
    if (this.#isMasterNumber(calculatedBirthNumber)) {
      this.birthNumber = calculatedBirthNumber;
    } else {
      this.birthNumber = this.#toOneDigit(calculatedBirthNumber);
    }

    return this.birthNumber;
  }

  #toOneDigit(number) {
    return number % 9 || 9;
  }

  #isMasterNumber(number) {
    return number === 11 || number === 22 || number === 33 || number === 44;
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = BirthNumber;
}
