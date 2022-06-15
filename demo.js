// debugger;
// let demo = 0;
// let result = 5 + demo++;
// let result1 = 5 + ++demo;
// document.write(demo + "<br>" + result +"<br>" + result1);
// nhập vào bàn phím 1 số có 3 chữ số, đưa ra kết quả số đó có chia hết cho 3 k
// nhập chữ số thứ nhất
// nhập chữ số thứ hai
// nhập chữ số thứ ba;
// tổng các chữ số là:...
let num1 = prompt("Nhập vào số thứ nhất:");
let num2 = prompt("Nhập vào số thứ hai:");
let num3 = prompt("Nhập vào số thứ ba:");
let sum = num1 + num2 + num3;
alert(sum);
if(sum % 3 == 0)
{
    alert("tổng là số chia hết cho 3");
}
else
    alert("tổng là số không chia hết cho 3");