export default class Patient {
    #lastName;
    #firstName;
    #middleName;
    #phoneNumber;
    #sex;
    #date;
    constructor(lastName, firstName, middleName, phoneNumber, sex, date) {
        this.#lastName      = lastName;
        this.#firstName     = firstName;
        this.#middleName    = middleName;
        this.#phoneNumber   = phoneNumber;
        this.#sex           = sex;
        this.#date          = date;
    };

    toJSON() {
        return {
            lastName: this.#lastName,
            firstName: this.#firstName,
            middleName: this.#middleName,
            phoneNumber: this.#phoneNumber,
            sex: this.#sex,
            date: this.#date,
        };
    };
};