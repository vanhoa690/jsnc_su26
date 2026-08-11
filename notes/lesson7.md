# Lesson 7 - JavaScript Cơ Bản: Thêm dữ liệu với Axios

## Nội dung bài học

- Lấy dữ liệu từ Form
- Sử dụng sự kiện `submit`
- Thêm dữ liệu với Axios `POST`
- Xử lý `preventDefault()`
- Chuyển về trang danh sách sau khi thêm

---

## 1. Thêm dữ liệu với Axios

Axios sử dụng method:

```text
POST
```

Ví dụ:

```js
axios.post("http://localhost:3000/students", {
  name: "nguyen van a",
  age: 25,
  email: "a@gmail.com",
});
```

Sau khi gọi API, sản phẩm mới sẽ được thêm vào `db.json`.

---

## 2. Lấy dữ liệu từ Form

Giả sử `add.html` đã có form:

```html
<form id="form-add">
  <input id="name" placeholder="Tên sinh viên" />

  <input id="age" placeholder="Tuổi" />

  <input id="email" placeholder="Email" />

  <button type="submit">Thêm sinh viên</button>
</form>
```

Trong `add.js`, lấy dữ liệu:

```js
const name = document.getElementById("name").value;
const age = document.getElementById("age").value;
const email = document.getElementById("email").value;
```

---

## 3. Bắt sự kiện Submit

```js
document.getElementById("form-add").addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Submit form");
});
```

`e.preventDefault()` dùng để **ngăn trình duyệt reload trang** khi submit form.

---

## 4. Gọi API POST

```js
document.getElementById("form-add").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  axios
    .post("http://localhost:3000/students", {
      name: name,
      age: age,
      email: email,
    })
    .then(() => {
      alert("Thêm sinh viên thành công");
    });
});
```

Có thể viết ngắn hơn:

```js
axios.post("http://localhost:3000/students", {
  name,
  age,
  email,
});
```

---

## 5. Chuyển về trang danh sách

Sau khi thêm thành công, chuyển về `index.html`:

```js
axios
  .post("http://localhost:3000/students", {
    name,
    age,
    email,
  })
  .then(() => {
    alert("Thêm sinh viên thành công");

    window.location.href = "index.html";
  });
```

---

## 6. File `add.js` hoàn chỉnh

```js
document.getElementById("form-add").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  axios
    .post("http://localhost:3000/students", {
      name,
      age,
      email,
    })
    .then(() => {
      alert("Thêm sinh viên thành công");

      window.location.href = "index.html";
    });
});
```

---

## 7. Nhúng `add.js`

Trong `add.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="./add.js"></script>
```

---

## 8. Luồng hoạt động

```text
add.html
   ↓
Nhập thông tin
   ↓
Bấm Thêm
   ↓
submit
   ↓
preventDefault()
   ↓
Lấy dữ liệu Form
   ↓
Axios POST
   ↓
Thêm vào db.json
   ↓
Chuyển về index.html
   ↓
Hiển thị danh sách mới
```

---

# Bài tập thực hành

## Bài 1

Hoàn thiện chức năng **thêm sách** cho bài quản lý sách.

Sử dụng:

```text
POST /books
```

Form gồm:

- Tên sách
- Tác giả
- Giá

## Bài 2

Sau khi thêm thành công:

- Hiển thị thông báo.
- Chuyển về trang danh sách.
- Kiểm tra sách mới đã xuất hiện trong danh sách.

## Bài 3

Thêm kiểm tra dữ liệu:

- Tên sách không được để trống.
- Tác giả không được để trống.
- Giá phải lớn hơn `0`.

> **Lưu ý:** `id` không cần nhập. JSON Server sẽ tự tạo `id` cho bản ghi mới.
