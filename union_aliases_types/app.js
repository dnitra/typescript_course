//union types allow to decleare more than one type for the given value...
function combine(input1, input2, resultConversion) {
    var result;
    if (input1 === typeof "number" && input2 === typeof "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else
        (result = input1.toString() + input2.toString());
    // if (resultConversion === "as-number") {
    //     return +result;
    // }
    // else {
    //     return result.toString()
    // }
    return result;
}
var combineAges = combine("30", "26", "as-number");
console.log(combineAges);
var combineNames = combine("Max", "Anne", "as-text");
console.log(combineNames);
