var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "Author";
})(Role || (Role = {}));
;
var person = {
    name: "David",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
