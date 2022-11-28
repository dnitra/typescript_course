const person
// explicitly decleare individual parameteres inside of object
    : {
        name: string;
        age: number;
        hobbies: string[];
        /**
         * tuple is a special type whiich is
         * just in typescript but not in javascript
         *  
         * Tuple allows to specify the number of elements in the array and their types...
         * 
         * !!!array.push can still be applied and it is exception with tuples!!!
         * */ 
        role: [number, string];
    }

// typescript will aut automatically recognize  
    = {
    name: "David",
    age: 30,
    hobbies: ["sports", "cooking"],
    //
    role: [2,"author"]
}

person.role = [0,"admin"]
let favoriteActivities: string[]
favoriteActivities = ["chess"]

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}