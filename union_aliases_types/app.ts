//declaring my own types is called type aliases
type Combinable = number | string;
type ConversionDescription = "as-number" | "as-text";

//union types allow to decleare more than one type for the given value...
function combine(
    input1: Combinable,
    input2: Combinable,
    // literal type means we are passing specific value, for example specific string or number
    resultConversion: ConversionDescription
) {
    let result
    if (input1 === typeof "number" && input2 === typeof "number" || resultConversion === "as-number") {
        
        result = +input1 + +input2
    }
    else (
        result = input1.toString()+input2.toString()
    )
    // if (resultConversion === "as-number") {
    //     return +result;
    // }
    // else {
    //     return result.toString()
    // }
    return result
}

const combineAges = combine("30", "26", "as-number")
console.log(combineAges)

const combineNames = combine("Max","Anne", "as-text")
console.log(combineNames)
