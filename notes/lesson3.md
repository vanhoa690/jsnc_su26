# Lesson 3 - JavaScript Cơ Bản: Array và Hiển thị dữ liệu dạng Table

## Nội dung bài học

- Array là gì?
- Array chứa Object
- Hiển thị dữ liệu dạng Table
- Hàm `map()`
- `join("")`

---

## 1. Array là gì?

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

## 2. Array Object

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

## 3. Tạo Table trên HTML

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

## 5. Hiển thị dữ liệu lên Table

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

Muốn nối các phần tử thành một chuỗi, sử dụng `join("")`.

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

---

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
