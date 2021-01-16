//-- tip1_const로 변하지 않는 값을 표현하라 --//


// const는 한 번 선언하면 그 값을 변경할 수 없다.
// const에 배열을 할당하는 경우 배열의 항목은 바뀔 수 있다.
//---

// const를 사용한 코드
const taxRate = 0.1;
const total= 100 + (100 * taxRate);
// [...] 100행의 코드
return `구매 금액은 ${total}입니다.`;

// var를 사용한 코드
var taxRate = 0.1;
var total = 100 + (100 * taxRate)
// [...] 100행의 코드
return `구매 금액은 ${total}입니다.`;
// var를 사용할 경우, 재할당할 수 있기 때문에 코드 전체를 살펴봐야 한다.

// const와 let을 함께 사용한 경우
const taxRate = 0.1;
const shipping = 5.00;
let total = 100 + (100 * taxRate) + shipping;
// [...] 100행의 코드
return `구매 금액은 ${total}입니다.`; 
// const와 let을 적절히 씀으로써 변경되지 않는 변수와 
// 변경될 수도 있는 변수를 예측할 수 있다.

// const로 배열 선언
const discountable = [];
// [...] 몇 줄의 코드
for (let i = 0; i < cart.length; i++) {
    if (cart[i].discountAvailable) {
        discountable.push(cart[i]);
    }
}
// 배열에 항목을 추가할 순 있지만, 뒤에 어떤 값이 올지 예측하기 어렵다.

// 선언 후 조작하는 부분을 삭제
const discountable = cart.filter(item => item.discountAvailable);
