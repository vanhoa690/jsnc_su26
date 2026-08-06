console.log("javascript");
let name = "hoadv"; // string
const age = 35; // number
let money = 100;
let isStuding = true; // boolean

money = 50;

const yearCong = 2004;
console.log(name);

// alert("Xin chào JavaScript"); // sau them thanh cong, co loi xay ra
// thay doi du lieu HTML: innerHTML

const h1 = document.getElementById("title");
console.log(h1);
const title = "Laptop - Mobile";
// ``  dấu cạnh số 1, ${}
h1.innerHTML = `Danh sách sản phẩm ${title}`;

// object
const student = {
  name: "hoadv",
  age: 30,
  isStudent: true,
};
console.log(student.name);
h1.innerHTML = `Danh sách sinh viên ${student.name}`;

const book = {
  title: "Hoa vàng trên cỏ xanh",
  author: "Nguyễn Nhật Anh",
  cover: " ",
  year: 1999,
};
document.getElementById("titleBook").innerHTML = book.title;
document.getElementById("titleBook").innerHTML = `Tên cuốn sách ${book.title}`;
