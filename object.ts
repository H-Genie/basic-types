// create by object literal and isnt object type
const person1 = {
    name: "Mark",
    age: 39,
};

// create by Object.create
// object type : primitive type이 아닌 것을 나타내고 싶을 때
const person2 = Object.create({
    name: "Mark",
    age: 39,
});
