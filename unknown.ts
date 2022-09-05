// 동적 컨텐츠(ex API)에 따라 모르는 변수의 타입을 묘사해야 할수도 있음
// API가 모든 값을 의도적으로 수락하기를 원할수 있음
// 이 변수가 무엇이든 될수 있음을 알려주는 타입

declare const maybe: unknown;

const aNumber: number = maybe;

if (maybe === true) {
    const aBoolean: boolean = maybe;
    const aString: string = maybe;
}

if (typeof maybe === "string") {
    const aString: string = maybe;
    const aBoolean: boolean = maybe;
}

// 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁힘
// 타입을 확정해주지 않으면 다른 곳에 할당하거나 사용할 수 없다
