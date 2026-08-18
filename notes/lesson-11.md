# Lesson 11 - JavaScript Cơ Bản: Đăng nhập và lưu Token

## Nội dung bài học

- Form đăng nhập
- Gọi API `POST /login`
- Nhận `accessToken`
- Lưu token vào `localStorage`
- Kiểm tra token
- Đăng xuất

---

## 1. API đăng nhập

JSON Server Auth sử dụng:

```text
POST /login
```

Ví dụ:

```js
axios.post("http://localhost:3000/login", {
  email: "vana@gmail.com",
  password: "123456",
});
```

Nếu tài khoản đúng, API trả về `accessToken`.

---

## 2. Form đăng nhập

```html
<form id="form-login">
  <input id="email" type="email" placeholder="Email" />

  <input id="password" type="password" placeholder="Mật khẩu" />

  <button type="submit">Đăng nhập</button>
</form>
```

---

## 3. Lấy dữ liệu từ Form

Trong `login.js`:

```js
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
```

---

## 4. Bắt sự kiện Submit

```js
document.getElementById("form-login").addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Submit form");
});
```

`e.preventDefault()` dùng để ngăn trình duyệt reload trang.

---

## 5. Gọi API Login

```js
axios
  .post("http://localhost:3000/login", {
    email,
    password,
  })
  .then((res) => {
    console.log(res.data);
  });
```

Token nằm trong:

```js
res.data.accessToken
```

---

## 6. Lưu Token vào LocalStorage

```js
const token = res.data.accessToken;

localStorage.setItem("token", token);
```

Kiểm tra token:

```js
console.log(localStorage.getItem("token"));
```

---

## 7. Chuyển sang trang danh sách

```js
axios
  .post("http://localhost:3000/login", {
    email,
    password,
  })
  .then((res) => {
    const token = res.data.accessToken;

    localStorage.setItem("token", token);

    alert("Đăng nhập thành công");

    window.location.href = "index.html";
  });
```

---

## 8. Xử lý đăng nhập thất bại

```js
axios
  .post("http://localhost:3000/login", {
    email,
    password,
  })
  .then((res) => {
    const token = res.data.accessToken;

    localStorage.setItem("token", token);

    alert("Đăng nhập thành công");

    window.location.href = "index.html";
  })
  .catch(() => {
    alert("Email hoặc mật khẩu không đúng");
  });
```

---

## 9. File `login.js` hoàn chỉnh

```js
document.getElementById("form-login").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  axios
    .post("http://localhost:3000/login", {
      email,
      password,
    })
    .then((res) => {
      const token = res.data.accessToken;

      localStorage.setItem("token", token);

      alert("Đăng nhập thành công");

      window.location.href = "index.html";
    })
    .catch(() => {
      alert("Email hoặc mật khẩu không đúng");
    });
});
```

---

## 10. Nhúng `login.js`

Trong `login.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="./login.js"></script>
```

---

## 11. Kiểm tra Token

Mở:

```text
F12 → Application → Local Storage
```

Hoặc:

```js
const token = localStorage.getItem("token");

console.log(token);
```

---

## 12. Đăng xuất

Xóa token:

```js
localStorage.removeItem("token");
```

Ví dụ:

```html
<button onclick="logout()">Đăng xuất</button>
```

```js
function logout() {
  localStorage.removeItem("token");

  window.location.href = "login.html";
}
```

---

## 13. Luồng hoạt động

```text
login.html
      ↓
Nhập Email + Password
      ↓
Bấm Đăng nhập
      ↓
submit
      ↓
preventDefault()
      ↓
Axios POST /login
      ↓
API trả về accessToken
      ↓
Lưu token vào localStorage
      ↓
Chuyển về index.html
```

Đăng xuất:

```text
Bấm Đăng xuất
      ↓
removeItem("token")
      ↓
Chuyển về login.html
```

---

# Bài tập thực hành

## Bài 1

Tạo trang **Đăng nhập**.

Form gồm:

- Email
- Password

Gọi:

```text
POST /login
```

## Bài 2

Sau khi đăng nhập thành công:

- Lấy `accessToken`.
- Lưu vào `localStorage`.
- Hiển thị thông báo.
- Chuyển về `index.html`.

## Bài 3

Tạo chức năng **Đăng xuất**:

- Xóa token khỏi `localStorage`.
- Chuyển về `login.html`.

> **Lưu ý:** Bài này tập trung vào **Login + lưu Token + Logout**. Chưa xử lý Private Route và gửi Token vào API.
