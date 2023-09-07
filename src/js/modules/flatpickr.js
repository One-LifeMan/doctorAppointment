import flatpickr from "flatpickr";
import { Ukrainian } from "flatpickr/dist/l10n/uk.js"
import "flatpickr/dist/flatpickr.css"
import "flatpickr/dist/themes/material_blue.css"

import {
    APPOINTMENT_FORM,
    APPOINTMENT_CALENDAR,
    APPOINTMENT_BTN,} from "./dom";

flatpickr(APPOINTMENT_CALENDAR, {
    "locale": Ukrainian,
    enableTime: true,
    minDate: new Date().fp_incr(1),
    maxDate: new Date().fp_incr(30),
    minTime: "08:00",
    maxTime: "16:30",
    minuteIncrement: 30,
    dateFormat: "Y.m.d H:i",
    // disable: [
    //     {from: "09:00", to: "10:30"},
    // ],
});