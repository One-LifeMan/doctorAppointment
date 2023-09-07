'use strict'

import "./modules/flatpickr";

import {
    APPOINTMENT_FORM,
    APPOINTMENT_CALENDAR,
    APPOINTMENT_BTN,
} from "./modules/dom";
import Patient from "./classes/Patient";

let 
    lastName,
    firstName,
    middletName,
    phoneNumber,
    sex,
    time,
    validLastName,
    validFirstName,
    validiMddletName,
    validPhoneNumber,
    validSex,
    validTime
;
let patients = [];

/*
function validateFormValues(lastName, firstName, middletName) {
    function validateLastName(lastName) {
        if (lastName.value.length == 0) {
            lastName.setCustomValidity("Введіть ваше прізвище!");
        } else {
            lastName.setCustomValidity("");
        };
    };
    function validateFirstName(firstName) {
        if (firstName.value.length == 0) {
            firstName.setCustomValidity("Введіть ваше ім'я!");
        } else {
            firstName.setCustomValidity("");
        };
    };
    function validateMiddleName(middletName) {
        if (middletName.value.length == 0) {
            middletName.setCustomValidity("Введіть ваше по батькові!");
        } else {
            middletName.setCustomValidity("");
        };
    };

    validateLastName(lastName);
    validateFirstName(firstName);
    validateMiddleName(middletName);
};
*/


function getInputValues() {
    lastName    = APPOINTMENT_FORM.userLastName.value;
    firstName   = APPOINTMENT_FORM.userFirstName.value;
    middletName = APPOINTMENT_FORM.userMiddleName.value;
    phoneNumber = APPOINTMENT_FORM.userPhoneNumber.value;
    sex         = APPOINTMENT_FORM.userSex.value;
    time        = APPOINTMENT_FORM.userTime.value;
};

function validateFormValues() {
    
};

function addPatients() {
    if (localStorage.getItem("localPatients")) {
        patients = JSON.parse(localStorage.getItem("localPatients"));
        patients.push( new Patient(
            lastName,
            firstName,
            middletName,
            phoneNumber,
            sex,
            time,
        ) );
        localStorage.setItem("localPatients", JSON.stringify(patients));
    } else {
        patients.push( new Patient(
            lastName,
            firstName,
            middletName,
            phoneNumber,
            sex,
            time,
        ) );
        localStorage.setItem("localPatients", JSON.stringify(patients));
    };
};

function clearInputValues() {
    APPOINTMENT_FORM.userLastName.value = "";
    APPOINTMENT_FORM.userFirstName.value = "";
    APPOINTMENT_FORM.userMiddleName.value = "";
    APPOINTMENT_FORM.userPhoneNumber.value = "";
    APPOINTMENT_FORM.userSex.forEach(element => {
        if (element.checked) {
            element.checked = false;
        };
    });
    APPOINTMENT_FORM.userTime.value = "";
};




APPOINTMENT_FORM.addEventListener("submit", (e)=> {
    e.preventDefault();
});

APPOINTMENT_BTN.addEventListener("click", (e)=> {
    e.preventDefault();

    getInputValues();
    validateFormValues();
    addPatients();
    clearInputValues();
    console.log("Запис успішно прийнято!");
});


// ==============================================================================================
const btnInfo = document.querySelector("#btnInfo");
const btnDel = document.querySelector("#btnDel");


btnInfo.addEventListener("click", ()=> {
    if (localStorage.getItem("localPatients")) {
        patients = JSON.parse(localStorage.getItem("localPatients"));
        console.log(patients);
    } else {
        console.log("Такої властивості в localStorage не існує");
    };
});

btnDel.addEventListener("click", ()=> {
    if (localStorage.getItem("localPatients")) {
        localStorage.removeItem("localPatients");
        console.log(`Властивість "localPatients" видалено з localStorage`);
    };
});
