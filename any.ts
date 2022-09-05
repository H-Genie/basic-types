const returnAny = (message: any): any => {
    console.log(message);
};

const any1 = returnAny("리턴은 아무거나");

// 타입이 any기 때문에 에러가 나지는 않음
// any : 어떤 것인지 모르기때문에 아떤 것이든 할수 있음
any1.toString();
fatkun;
// any는 계속해서 개체를 통해 전파됨
let looselyTyped: any = {};
const e = looselyTyped.a.b.c;

const leakingAny = (obj: any) => {
    // a의 타입을 규정하는 순간 누수를 막을수 있음
    // const a = obj.num;
    const a: number = obj.num;
    const b = a + 1;
    return b;
};
const c = leakingAny({ num: 0 });
const d: string = c.indexOf("0");
