# Lesson 2 - JavaScript Cơ Bản: Biến, Kiểu Dữ Liệu và Object

## Nội dung bài học

- JavaScript là gì?
- Khai báo biến
- Kiểu dữ liệu
- Hiển thị dữ liệu
- Template String

---

## 1. JavaScript là gì?

JavaScript là ngôn ngữ lập trình giúp website có khả năng tương tác như
xử lý sự kiện, hiển thị dữ liệu, gọi API và thao tác với HTML.

## 2. Nhúng JavaScript

```html
<script src="./index.js"></script>
```

Đặt thẻ `<script>` trước thẻ `</body>`.

## 4. Biến

```js
let name = "Nguyễn Văn A";
const school = "FPT Polytechnic";
```

- `let`: có thể thay đổi giá trị.
- `const`: không thể gán lại.

## 5. Kiểu dữ liệu

```js
let name = "Hoà";
let age = 30;
let isAdmin = true;
```

Ví dụ

---

- String: "Hello", "Xin chào"
- Number: 20, 10
- Boolean: true, false

## 6. Hiển thị dữ liệu

```js
console.log(name);
alert("Xin chào JavaScript");
```

## 7. Hiển thị lên HTML

HTML

```html
<h2 id="title"></h2>
```

JavaScript

```js
document.getElementById("title").innerHTML = "Xin chào JavaScript";
```

## 8. Template String

```js
const name = "Hoà";
const age = 30;

document.getElementById("title").innerHTML = `${name} - ${age}`;
```

## 9. Object

```js
const book = {
  id: 1,
  name: "JavaScript Cơ Bản",
  price: 200000,
};
```

Truy cập:

```js
console.log(book.name);
```

## 10. Hiển thị Object

HTML

```html
<div id="book"></div>
```

JavaScript

```js
const book = {
  id: 1,
  name: "JavaScript Cơ Bản",
  price: 200000,
};

document.getElementById("book").innerHTML = `
<h2>${book.name}</h2>
<p>Giá: ${book.price} VNĐ</p>
`;
```

## 11. Ví dụ Student

```js
const student = {
  name: "Nguyễn Văn A",
  age: 20,
  email: "vana@gmail.com",
  major: "CNTT",
};

document.getElementById("book").innerHTML = `
<h2>${student.name}</h2>
<p>Tuổi: ${student.age}</p>
<p>Email: ${student.email}</p>
<p>Chuyên ngành: ${student.major}</p>
`;
```

## Tổng kết

- Biến (`let`, `const`)
- Kiểu dữ liệu
- `innerHTML`
- Template String
- Object
- Hiển thị Object lên HTML

## Bài tập

1.  Khai báo biến: họ tên, tuổi, email, địa chỉ và in ra Console.
2.  Hiển thị họ tên và tuổi lên HTML.
3.  Tạo Object `book` và hiển thị lên HTML.
4.  Tạo Object `student` và hiển thị lên HTML.
