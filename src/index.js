"use strict";

import lodash from "lodash";
import "./style.css";
import Component from "./Component";

import {pow} from "./math";


console.time();
console.log(pow(456,45));
console.timeEnd();

console.time();
console.log(pow(745,33));
console.timeEnd();

console.log(lodash.random());
const comp = new Component();

