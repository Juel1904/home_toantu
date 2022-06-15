let fix_money = prompt ("Mời nhập vào số tiền gốc:");
let laisuat = prompt ("Mời nhập vào lãi suất của NH hiện tại:");
let year = prompt ("Mời nhập số năm gửi tiền:");
let lai1nam = fix_money * laisuat /100;
let tienloi = Number(fix_money) + Number(lai1nam * year);
document.write("Số tiền thu được sau " + year + " năm gửi ngân hàng là: " + tienloi);