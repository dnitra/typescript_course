"use strict";
/**
 * uknown type still do some checking...
 * for example weh we try to asign different variable whhich should be specific type to variable with uknown type then error occurs beacuse the the variable with specific type already knows the type it wants
 *  */
let userInput;
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
/**
 * "never" type means to explicitly  declares, that the function will never return anything
 */
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred ", 500);
