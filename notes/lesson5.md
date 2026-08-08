# Lesson 5 - JavaScript Cơ Bản: Xóa dữ liệu với Axios

## Nội dung bài học

- Ôn tập gọi API với Axios
- Hiển thị danh sách
- Xóa dữ liệu với `DELETE`
- Xác nhận trước khi xóa
- Load lại danh sách sau khi xóa
- Bài tập thực hành

---

## 1. Ôn tập gọi API

Ở Lesson 4, chúng ta sử dụng Axios để lấy danh sách:

```js
axios({
  url: "http://localhost:3000/students",
  method: "GET",
}).then((response) => {
  console.log(response.data);
});
```

Dữ liệu trả về nằm trong:

```js
response.data;
```

---

## 2. Hiển thị danh sách

HTML:

```html
<table border="1" cellpadding="10">
  <thead>
    <tr>
      <th>ID</th>
      <th>Họ tên</th>
      <th>Tuổi</th>
      <th>Email</th>
      <th>Thao tác</th>
    </tr>
  </thead>

  <tbody id="student-list"></tbody>
</table>
```

JavaScript:

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
            <td>
              <button onclick="deleteStudent(${student.id})">
                Xóa
              </button>
            </td>
          </tr>
        `,
      )
      .join("");

    document.getElementById("student-list").innerHTML = html;
  });
}

loadStudents();
```

Chúng ta truyền `id` của sinh viên vào hàm:

```js
deleteStudent(${student.id})
```

Ví dụ:

```html
<button onclick="deleteStudent(1)">Xóa</button>
```

Khi bấm nút, hàm `deleteStudent()` sẽ nhận được `id`.

---

## 3. Xóa dữ liệu với Axios

Axios sử dụng method:

```text
DELETE
```

Ví dụ:

```js
axios({
  url: "http://localhost:3000/students/1",
  method: "DELETE",
});
```

Trong đó:

```text
/students/1
```

có nghĩa là xóa sinh viên có `id = 1`.

---

## 4. Tạo hàm `deleteStudent()`

```js
function deleteStudent(id) {
  axios({
    url: `http://localhost:3000/students/${id}`,
    method: "DELETE",
  }).then(() => {
    loadStudents();
  });
}
```

Sau khi xóa thành công:

```js
loadStudents();
```

được gọi lại để lấy danh sách mới.

---

## 5. Xác nhận trước khi xóa

Không nên xóa dữ liệu ngay khi người dùng bấm nút.

Sử dụng:

```js
confirm();
```

Ví dụ:

```js
const result = confirm("Bạn có chắc chắn muốn xóa không?");
```

Nếu người dùng chọn:

```text
OK
```

thì:

```js
result === true;
```

Nếu chọn:

```text
Cancel
```

thì:

```js
result === false;
```

---

## 6. Xóa sau khi xác nhận

Kết hợp `confirm()` với Axios:

```js
function deleteStudent(id) {
  const result = confirm("Bạn có chắc chắn muốn xóa không?");

  if (result) {
    axios({
      url: `http://localhost:3000/students/${id}`,
      method: "DELETE",
    }).then(() => {
      loadStudents();
    });
  }
}
```

Luồng hoạt động:

```text
Bấm Xóa
   ↓
confirm()
   ↓
 ┌───────────────┐
 │               │
OK             Cancel
 │               │
 ↓               ↓
DELETE          Không làm gì
 │
 ↓
loadStudents()
 │
 ↓
Hiển thị danh sách mới
```

---

## 7. Ví dụ hoàn chỉnh

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
          <th>Thao tác</th>
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
            <td>
              <button onclick="deleteStudent(${student.id})">
                Xóa
              </button>
            </td>
          </tr>
        `,
      )
      .join("");

    document.getElementById("student-list").innerHTML = html;
  });
}

function deleteStudent(id) {
  const result = confirm("Bạn có chắc chắn muốn xóa không?");

  if (result) {
    axios({
      url: `http://localhost:3000/students/${id}`,
      method: "DELETE",
    }).then(() => {
      loadStudents();
    });
  }
}

loadStudents();
```

---

# Bài tập thực hành

## Bài 1 - Hiển thị danh sách

Tạo `db.json`:

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
    },
    {
      "id": 4,
      "name": "Oppo Reno 12",
      "price": 12000000
    }
  ]
}
```

Hiển thị danh sách sản phẩm dưới dạng Table.

Yêu cầu:

- ID
- Tên sản phẩm
- Giá
- Thao tác

---

## Bài 2 - Xóa sản phẩm

Thêm nút:

```text
Xóa
```

Khi bấm **Xóa**:

1. Hiển thị `confirm()`.
2. Nếu chọn **OK** → gọi API `DELETE`.
3. Nếu chọn **Cancel** → không xóa.
4. Sau khi xóa thành công → gọi lại API lấy danh sách.

API:

```text
DELETE /products/:id
```

---

## Bài 3 - Hoàn thiện

Tạo giao diện hoàn chỉnh gồm:

```text
Danh sách sản phẩm

------------------------------------------------
ID | Tên sản phẩm | Giá        | Thao tác
------------------------------------------------
1  | iPhone 15    | 25000000   | Xóa
2  | Samsung S25  | 22000000   | Xóa
3  | Xiaomi 15    | 18000000   | Xóa
------------------------------------------------
```

Yêu cầu:

- Sử dụng Axios.
- Sử dụng `GET` để lấy danh sách.
- Sử dụng `DELETE` để xóa.
- Sử dụng `confirm()` trước khi xóa.
- Sử dụng `map()` để hiển thị danh sách.
- Sau khi xóa phải hiển thị lại danh sách.

---

## Tổng kết

Sau Lesson 5, học viên cần làm được:

```text
GET API
   ↓
Hiển thị danh sách
   ↓
Bấm Xóa
   ↓
confirm()
   ↓
DELETE API
   ↓
GET lại danh sách
```

**Đây là bài thực hành tổng hợp trước khi kiểm tra:** học viên cần tự làm được chức năng **hiển thị danh sách + xóa dữ liệu** mà không nhìn lại code mẫu.
