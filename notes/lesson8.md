# Lesson 8 - JavaScript Cơ Bản: Sửa dữ liệu với Axios

## Nội dung bài học

- Lấy `id` sản phẩm cần sửa
- Lấy dữ liệu cũ từ API
- Hiển thị dữ liệu lên Form
- Sửa dữ liệu với Axios `PUT`
- Chuyển về trang danh sách sau khi sửa

---

## 1. Sửa dữ liệu với Axios

Axios sử dụng method:

```text
PUT
```

Ví dụ:

```js
axios.put("http://localhost:3000/students/1", {
  name: "Nguyễn Văn A",
  age: 25,
  email: "a@gmail.com",
});
```

Trong đó:

```text
/students/1
```

có nghĩa là sửa sinh viên có `id = 1`.

---

## 2. Nút Sửa ở trang danh sách

Trong `index.js`, thêm nút **Sửa**:

```js
<td>
  <button onclick="editStudent(${student.id})">
    Sửa
  </button>

  <button onclick="deleteStudent(${student.id})">
    Xóa
  </button>
</td>
```

Khi bấm **Sửa**, truyền `id` của sinh viên:

```js
editStudent(1);
```

---

## 3. Chuyển sang trang sửa

Tạo hàm:

```js
function editStudent(id) {
  window.location.href = `edit.html?id=${id}`;
}
```

Ví dụ:

```text
http://localhost:5500/edit.html?id=1
```

`id=1` chính là sinh viên cần sửa.

---

## 4. Lấy `id` từ URL

Trong `edit.js`:

```js
const params = new URLSearchParams(window.location.search);

const id = params.get("id");

console.log(id);
```

Nếu URL là:

```text
edit.html?id=1
```

thì `id` sẽ có giá trị:

```text
1
```

---

## 5. Lấy dữ liệu cũ

Sau khi có `id`, gọi API:

```js
axios
  .get(`http://localhost:3000/students/${id}`)
  .then((res) => {
    console.log(res.data);
  });
```

---

## 6. Hiển thị dữ liệu lên Form

Giả sử `edit.html` có Form:

```html
<form id="form-edit">
  <input id="name" placeholder="Tên sinh viên" />

  <input id="age" placeholder="Tuổi" />

  <input id="email" placeholder="Email" />

  <button type="submit">
    Cập nhật sinh viên
  </button>
</form>
```

Trong `edit.js`:

```js
axios
  .get(`http://localhost:3000/students/${id}`)
  .then((res) => {
    const student = res.data;

    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("email").value = student.email;
  });
```

---

## 7. Bắt sự kiện Submit

```js
document.getElementById("form-edit").addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Submit form");
});
```

`e.preventDefault()` dùng để ngăn trình duyệt reload trang khi submit Form.

---

## 8. Lấy dữ liệu mới từ Form

```js
const name = document.getElementById("name").value;
const age = document.getElementById("age").value;
const email = document.getElementById("email").value;
```

---

## 9. Gọi API PUT

```js
axios
  .put(`http://localhost:3000/students/${id}`, {
    name,
    age,
    email,
  })
  .then(() => {
    alert("Cập nhật sinh viên thành công");
  });
```

---

## 10. Chuyển về trang danh sách

```js
axios
  .put(`http://localhost:3000/students/${id}`, {
    name,
    age,
    email,
  })
  .then(() => {
    alert("Cập nhật sinh viên thành công");

    window.location.href = "index.html";
  });
```

---

## 11. File `edit.js` hoàn chỉnh

```js
const params = new URLSearchParams(window.location.search);

const id = params.get("id");

// Lấy dữ liệu cũ
axios
  .get(`http://localhost:3000/students/${id}`)
  .then((res) => {
    const student = res.data;

    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("email").value = student.email;
  });

// Cập nhật dữ liệu
document.getElementById("form-edit").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  axios
    .put(`http://localhost:3000/students/${id}`, {
      name,
      age,
      email,
    })
    .then(() => {
      alert("Cập nhật sinh viên thành công");

      window.location.href = "index.html";
    });
});
```

---

## 12. Nhúng `edit.js`

Trong `edit.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="./edit.js"></script>
```

---

## 13. Luồng hoạt động

```text
index.html
   ↓
Bấm Sửa
   ↓
edit.html?id=1
   ↓
Lấy id
   ↓
GET /students/1
   ↓
Hiển thị dữ liệu cũ lên Form
   ↓
Người dùng sửa dữ liệu
   ↓
Bấm Cập nhật
   ↓
PUT /students/1
   ↓
Cập nhật db.json
   ↓
Chuyển về index.html
```

---

# Bài tập thực hành

## Bài 1

Hoàn thiện chức năng **sửa sách** cho bài quản lý sách.

Sử dụng:

```text
GET /books/:id
PUT /books/:id
```

Form gồm:

- Tên sách
- Tác giả
- Giá

## Bài 2

Tại trang danh sách sách, thêm nút:

```text
Sửa
```

Khi bấm **Sửa**:

- Chuyển sang `edit.html`.
- Truyền `id` của sách qua URL.
- Lấy dữ liệu cũ từ API.
- Hiển thị dữ liệu lên Form.

## Bài 3

Khi bấm **Cập nhật**:

- Lấy dữ liệu từ Form.
- Gọi API `PUT`.
- Hiển thị thông báo cập nhật thành công.
- Chuyển về trang danh sách.
- Kiểm tra dữ liệu đã được cập nhật.

> **Lưu ý:** Không cần nhập `id`. Lấy `id` từ URL để xác định bản ghi cần sửa.
