var person 
// explicitly decleare individual parameteres inside of object
// : {
// name: string;
// age: number;
// }
// typescript will aut automatically recognize  
= {
    name: "David",
    age: 30,
    hobbies: ["sports", "cooking"]
};
var favoriteActivities;
favoriteActivities = ["chess"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
