# Lesson 10 - JavaScript Cơ Bản: Đăng ký với JSON Server Auth

## Nội dung bài học

- JSON Server Auth là gì?
- Chuẩn bị JSON Server Auth
- Form đăng ký
- Gọi API `POST /register`
- Xử lý đăng ký thành công
- Xử lý lỗi khi đăng ký

---

## 1. JSON Server Auth

JSON Server Auth hỗ trợ tạo API đăng ký và đăng nhập đơn giản để thực hành Authentication.

Trong bài này sử dụng:

```text
POST /register
```

để đăng ký tài khoản.

---

## 2. Cài đặt JSON Server Auth

Cài đặt:

Cài thêm JSON Server Auth:

```bash
npm install json-server-auth
```

---

## 3. Tạo `db.json`

```json
{
  "users": []
}
```

Chạy server:

```bash
  "db": "json-server --watch db.json --port 3000 -m ./node_modules/json-server-auth"
```

API chạy tại:

```text
http://localhost:3000
```

---

## 4. API đăng ký

JSON Server Auth sử dụng:

```text
POST /register
```

Ví dụ:

```js
axios.post("http://localhost:3000/register", {
  email: "vana@gmail.com",
  password: "123456",
});
```

Sau khi đăng ký thành công, user sẽ được lưu vào `db.json`.

---

## 5. Form đăng ký

Giả sử `register.html` đã có Form:

```html
<form id="form-register">
  <input id="email" type="email" placeholder="Email" />

  <input id="password" type="password" placeholder="Mật khẩu" />

  <button type="submit">Đăng ký</button>
</form>
```

---

## 6. Lấy dữ liệu từ Form

Trong `register.js`:

```js
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
```

---

## 7. Bắt sự kiện Submit

```js
document.getElementById("form-register").addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Submit form");
});
```

`e.preventDefault()` dùng để ngăn trình duyệt reload trang.

---

## 8. Gọi API đăng ký

```js
axios
  .post("http://localhost:3000/register", {
    email,
    password,
  })
  .then(() => {
    alert("Đăng ký thành công");
  });
```

---

## 9. Chuyển về trang Login

Sau khi đăng ký thành công:

```js
axios
  .post("http://localhost:3000/register", {
    email,
    password,
  })
  .then(() => {
    alert("Đăng ký thành công");

    window.location.href = "login.html";
  });
```

---

## 10. Xử lý lỗi

Có thể sử dụng `.catch()`:

```js
axios
  .post("http://localhost:3000/register", {
    email,
    password,
  })
  .then(() => {
    alert("Đăng ký thành công");

    window.location.href = "login.html";
  })
  .catch(() => {
    alert("Đăng ký thất bại");
  });
```

Ví dụ email đã tồn tại, API có thể trả về lỗi.

---

## 11. File `register.js` hoàn chỉnh

```js
document.getElementById("form-register").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  axios
    .post("http://localhost:3000/register", {
      email,
      password,
    })
    .then(() => {
      alert("Đăng ký thành công");

      window.location.href = "login.html";
    })
    .catch(() => {
      alert("Đăng ký thất bại");
    });
});
```

---

## 12. Nhúng `register.js`

Trong `register.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="./register.js"></script>
```

---

## 13. Kiểm tra dữ liệu

Sau khi đăng ký thành công, kiểm tra `db.json`:

```json
{
  "users": [
    {
      "email": "vana@gmail.com",
      "password": "123456",
      "id": 1
    }
  ]
}
```

---

## 14. Luồng hoạt động

```text
register.html
      ↓
Nhập Email + Password
      ↓
Bấm Đăng ký
      ↓
submit
      ↓
preventDefault()
      ↓
Lấy dữ liệu Form
      ↓
Axios POST /register
      ↓
Lưu user
      ↓
Đăng ký thành công
      ↓
Chuyển về login.html
```

---

# Bài tập thực hành

## Bài 1

Tạo trang **Đăng ký tài khoản**.

Form gồm:

- Email
- Password

Gọi:

```text
POST /register
```

## Bài 2

Sau khi đăng ký thành công:

- Hiển thị thông báo.
- Chuyển về `login.html`.

## Bài 3

Thêm validate:

- Email không được để trống.
- Password không được để trống.
- Password tối thiểu 6 ký tự.

> **Lưu ý:** Bài này chỉ tập trung vào **đăng ký tài khoản với JSON Server Auth**, chưa xử lý đăng nhập và lưu token.
