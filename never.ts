// 모든 타입의 subtype
// never에는 어떤 것도 할당할 수 없음
// 잘못된 타입을 넣는 실수를 막고자 할때 사용

const error = (message: never) => {
    throw new Error(message);
};

const fial = () => {
    return error("fail");
};

const infiniteLoop = (): never => {
    while (true) {}
};

// ==============================
// let a: string = "hello";
declare const a: string | number;
if (typeof a !== "string") {
    a;
}

// type Indexable<T> = T extends string ? T & { [index: string]: any } : never;
// type ObjectIndexable = Indexable<{}>;
// const b: Indexable<{}> = "";
