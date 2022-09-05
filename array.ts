// 원래 자바스크립트에서 array는 객체
// 공통의 타입으로 묶을 수 있어야 array라고 할 수 있음
// Array<타입> or 타입[]

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let list3: (number | string)[] = [1, 2, 3, "4"];
