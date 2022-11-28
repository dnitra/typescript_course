enum Role{
    ADMIN =1 ,READ_ONLY =100,AUTHOR = "Author"
};

const person = {
    name: "David",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN
}


if (person.role === Role.ADMIN) {
    
    console.log("is admin")
}

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

