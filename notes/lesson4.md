# Lesson 4 - JavaScript Cơ Bản: Call API với Axios

## Nội dung bài học

- API là gì?
- JSON Server
- Cài đặt Axios
- Gọi API lấy danh sách
- Hiển thị dữ liệu lên Table

---

## 1. API là gì?

API (Application Programming Interface) là nơi cung cấp dữ liệu cho ứng dụng.

Thay vì viết dữ liệu trực tiếp trong JavaScript, chúng ta sẽ lấy dữ liệu từ API.

Ví dụ:

```
http://localhost:3000/students
```

API trả về:

```json
[
  {
    "id": 1,
    "name": "Nguyễn Văn A",
    "age": 20
  },
  {
    "id": 2,
    "name": "Trần Văn B",
    "age": 21
  }
]
```

---

## 2. Chuẩn bị JSON Server

Tạo file `db.json`

```json
{
  "students": [
    {
      "id": 1,
      "name": "Nguyễn Văn A",
      "age": 20,
      "email": "a@gmail.com"
    },
    {
      "id": 2,
      "name": "Trần Văn B",
      "age": 21,
      "email": "b@gmail.com"
    },
    {
      "id": 3,
      "name": "Lê Văn C",
      "age": 22,
      "email": "c@gmail.com"
    }
  ]
}
```

Chạy JSON Server

```bash
npm run db
```

Sau khi chạy thành công:

```
http://localhost:3000/students
```

---

## 3. Cài đặt Axios

Có thể tải Axios bằng CDN.

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

Hoặc cài bằng npm (sử dụng sau này).

```bash
npm install axios
```

Trong khóa học này chúng ta sẽ sử dụng **CDN** để đơn giản hơn.

---

## 4. Chuẩn bị HTML

```html
<h2>Danh sách sinh viên</h2>

<table border="1" cellpadding="10">
  <thead>
    <tr>
      <th>ID</th>
      <th>Họ tên</th>
      <th>Tuổi</th>
      <th>Email</th>
    </tr>
  </thead>

  <tbody id="student-list"></tbody>
</table>
```

---

## 5. Gọi API với Axios

```js
axios({
  url: "http://localhost:3000/students",
  method: "GET",
}).then((response) => {
  console.log(response.data);
});
```

Kết quả:

```js
[
  {
    id: 1,
    name: "Nguyễn Văn A",
    age: 20,
    email: "a@gmail.com",
  },
];
```

Dữ liệu của API nằm trong:

```js
response.data;
```

---

## 6. Hiển thị dữ liệu lên Table

```js
axios({
  url: "http://localhost:3000/students",
  method: "GET",
}).then((response) => {
  const html = response.data
    .map(
      (student) => `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.email}</td>
        </tr>
    `,
    )
    .join("");

  document.getElementById("student-list").innerHTML = html;
});
```

Sau khi chạy, bảng sẽ hiển thị toàn bộ danh sách sinh viên.

---

## 7. Tách thành hàm `loadStudents()`

Để sau này có thể gọi lại nhiều lần, chúng ta đưa phần gọi API vào một hàm.

```js
function loadStudents() {
  axios({
    url: "http://localhost:3000/students",
    method: "GET",
  }).then((response) => {
    const html = response.data
      .map(
        (student) => `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.email}</td>
        </tr>
      `,
      )
      .join("");

    document.getElementById("student-list").innerHTML = html;
  });
}

loadStudents();
```

Sau này khi thêm, sửa hoặc xóa dữ liệu, chỉ cần gọi lại:

```js
loadStudents();
```

---

## 8. Cấu trúc thư mục

```
project

│── index.html
│── index.js
│── db.json
```

---

## 9. Ví dụ hoàn chỉnh

### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Student Manager</title>
  </head>

  <body>
    <h2>Danh sách sinh viên</h2>

    <table border="1" cellpadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Họ tên</th>
          <th>Tuổi</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody id="student-list"></tbody>
    </table>

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="./index.js"></script>
  </body>
</html>
```

### index.js

```js
function loadStudents() {
  axios({
    url: "http://localhost:3000/students",
    method: "GET",
  }).then((response) => {
    const html = response.data
      .map(
        (student) => `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.email}</td>
        </tr>
      `,
      )
      .join("");

    document.getElementById("student-list").innerHTML = html;
  });
}

loadStudents();
```

---

## Tổng kết

- API là nơi cung cấp dữ liệu.
- JSON Server giúp tạo API giả lập.
- Axios dùng để gọi API.
- Dữ liệu trả về nằm trong `response.data`.
- Dùng `map()` kết hợp `innerHTML` để hiển thị danh sách.
- Đưa phần gọi API vào hàm để dễ tái sử dụng.

---

## Bài tập

### Bài 1

Tạo file `db.json` gồm danh sách sản phẩm.

```json
{
  "products": [
    {
      "id": 1,
      "name": "iPhone 15",
      "price": 25000000
    },
    {
      "id": 2,
      "name": "Samsung S25",
      "price": 22000000
    },
    {
      "id": 3,
      "name": "Xiaomi 15",
      "price": 18000000
    }
  ]
}
```

Hiển thị danh sách sản phẩm dưới dạng bảng.

---

### Bài 2

Thêm cột **STT**.

---

### Bài 3

Thêm cột **Thao tác** gồm hai nút:

- Sửa
- Xóa

> Chỉ cần hiển thị giao diện, chưa cần xử lý chức năng.

---

### Bài 4

Đổi endpoint từ:

```
/students
```

sang

```
/products
```

và hiển thị đúng dữ liệu của sản phẩm.
