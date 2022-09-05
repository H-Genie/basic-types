let x: [string, number];

// 순서, 타입, 길이 맞아야 함
x = ["hello", 39];
x = [39, "hello"];
x[2];

const person: [string, number] = ["mark", 39];
const [first, secnond, third] = person;
