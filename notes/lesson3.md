# Lesson 3 - JavaScript Cơ Bản: Array và Hiển thị dữ liệu dạng Table

## Nội dung bài học

- Hiển thị Object lên Table
- Array là gì?
- Array chứa Object
- Hàm `map()`
- `join("")`

---

## 1. Hiển thị Object lên Table

Ở bài trước chúng ta đã hiển thị Object bằng `div`. Bây giờ sẽ hiển thị Object dưới dạng bảng (`table`).

HTML

```html
<table border="1">
  <thead>
    <tr>
      <th>Họ tên</th>
      <th>Tuổi</th>
      <th>Email</th>
      <th>Chuyên ngành</th>
    </tr>
  </thead>

  <tbody id="student"></tbody>
</table>
```

JavaScript

```js
const student = {
  name: "Nguyễn Văn A",
  age: 20,
  email: "vana@gmail.com",
  major: "CNTT",
};

document.getElementById("student").innerHTML = `
<tr>
  <td>${student.name}</td>
  <td>${student.age}</td>
  <td>${student.email}</td>
  <td>${student.major}</td>
</tr>
`;
```

Ở ví dụ trên chúng ta chỉ có **1 Object** nên bảng chỉ hiển thị **1 dòng dữ liệu**.

Nếu muốn hiển thị nhiều sinh viên, chúng ta sẽ lưu dữ liệu vào **Array**.

---

## 2. Array là gì?

Array (Mảng) dùng để lưu nhiều dữ liệu.

```js
const numbers = [10, 20, 30];
```

Có thể lấy từng phần tử:

```js
console.log(numbers[0]);
console.log(numbers[1]);
```

---

## 3. Array Object

Trong thực tế, chúng ta thường lưu danh sách Object.

```js
const students = [
  {
    id: 1,
    name: "An",
    age: 20,
  },
  {
    id: 2,
    name: "Bình",
    age: 21,
  },
  {
    id: 3,
    name: "Chi",
    age: 22,
  },
];
```

Lấy dữ liệu:

```js
console.log(students[0].name);
console.log(students[1].age);
```

---

## 4. Hàm `map()`

`map()` giúp duyệt qua từng phần tử của mảng.

Ví dụ:

```js
const numbers = [1, 2, 3];

numbers.map((item) => {
  console.log(item);
});
```

Kết quả:

```
1
2
3
```

---

## 5. Hiển thị danh sách lên Table

HTML

```html
<table border="1">
  <thead>
    <tr>
      <th>ID</th>
      <th>Tên</th>
      <th>Tuổi</th>
    </tr>
  </thead>

  <tbody id="student-list"></tbody>
</table>
```

JavaScript

```js
const students = [
  {
    id: 1,
    name: "An",
    age: 20,
  },
  {
    id: 2,
    name: "Bình",
    age: 21,
  },
  {
    id: 3,
    name: "Chi",
    age: 22,
  },
];

const html = students
  .map(
    (student) => `
<tr>
  <td>${student.id}</td>
  <td>${student.name}</td>
  <td>${student.age}</td>
</tr>
`,
  )
  .join("");

document.getElementById("student-list").innerHTML = html;
```

---

## 6. `join("")`

Sau khi dùng `map()`, kết quả thu được là một mảng.

```js
const arr = ["A", "B", "C"];

console.log(arr);
```

Muốn nối các phần tử thành một chuỗi:

```js
console.log(arr.join(""));
```

Kết quả:

```
ABC
```

Trong ví dụ trên, chúng ta dùng:

```js
.join("");
```

để nối các dòng HTML trước khi gán vào `innerHTML`.

## Tổng kết

- Array
- Array Object
- `map()`
- `join("")`
- Hiển thị danh sách dữ liệu lên Table

---

## Bài tập

### Bài 1

Cho dữ liệu:

```js
const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 25000000,
  },
  {
    id: 2,
    name: "Samsung S25",
    price: 22000000,
  },
  {
    id: 3,
    name: "Xiaomi 15",
    price: 18000000,
  },
];
```

Hiển thị danh sách sản phẩm dưới dạng bảng gồm:

- ID
- Tên
- Giá

---

### Bài 2

Thêm cột **STT** vào bảng.

---

### Bài 3

Thêm cột **Thao tác** gồm hai nút:

- Sửa
- Xóa

> Chỉ cần hiển thị giao diện, chưa cần xử lý sự kiện.
