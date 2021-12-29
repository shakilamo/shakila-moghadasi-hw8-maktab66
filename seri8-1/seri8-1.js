SplitBill = (amount , numPeople) => {
    return (`Each person needs to pay ${amount/numPeople} `)
}
console.log(SplitBill(10,2));
console.log(SplitBill(10,4));

let countdown = (startingNumber , step) => {
    let countFromNum = startingNumber + step;
    return (decrease = () => {
        countFromNum -= step;
        return countFromNum;
    })
}
let countingDown = countdown(20,2);
console.log(countingDown());
