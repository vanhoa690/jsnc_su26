# Bài thực hành – Quản lý khóa học

Xây dựng website **Quản lý khóa học** sử dụng **HTML, JavaScript, Axios và JSON Server Auth**.

## 1. Đăng ký – **1 điểm**

- Tạo trang đăng ký.
- Email, Password.
- Gọi API `POST /register`.
- Đăng ký thành công → chuyển sang trang Login.

## 2. Đăng nhập – **1 điểm**

- Tạo trang Login.
- Gọi API `POST /login`.
- Lưu `accessToken` vào `localStorage`.
- Đăng nhập thành công → chuyển sang trang danh sách.

## 3. Hiển thị danh sách khóa học – **2 điểm**

Hiển thị:

- ID
- Tên khóa học
- Giảng viên
- Giá
- Danh mục
- Thao tác

Sử dụng:

```text
GET /courses
```

## 4. Thêm khóa học – **2 điểm**

Form gồm:

- Tên khóa học
- Giảng viên
- Giá
- Danh mục

Danh mục:

```text
Frontend
Backend
Mobile
```

Sử dụng:

```text
POST /courses
```

Sau khi thêm thành công → quay về danh sách.

## 5. Sửa khóa học – **1.5 điểm**

- Hiển thị dữ liệu cũ lên Form.
- Cho phép chỉnh sửa.
- Gọi API:

```text
PUT /courses/:id
```

- Cập nhật thành công → quay về danh sách.

## 6. Xóa khóa học – **1 điểm**

- Có nút **Xóa**.
- Sử dụng `confirm()`.
- Gọi:

```text
DELETE /courses/:id
```

- Hiển thị lại danh sách sau khi xóa.

## 7. Đăng xuất + kiểm tra đăng nhập – **1.5 điểm**

- Có nút **Đăng xuất**.
- Xóa `token` khỏi `localStorage`.
- Chuyển về Login.
- Nếu chưa có token → không cho vào trang quản lý khóa học.

---

## Tổng: **10 điểm**

### API

```text
POST   /register
POST   /login

GET    /courses
POST   /courses
PUT    /courses/:id
DELETE /courses/:id
```

### Dữ liệu `db.json`

```json
{
  "users": [],
  "courses": [
    {
      "id": 1,
      "name": "JavaScript Cơ Bản",
      "teacher": "Nguyễn Văn An",
      "price": 500000,
      "category": "Frontend"
    },
    {
      "id": 2,
      "name": "Node.js Cơ Bản",
      "teacher": "Trần Văn Bình",
      "price": 650000,
      "category": "Backend"
    },
    {
      "id": 3,
      "name": "React Cơ Bản",
      "teacher": "Lê Minh Tuấn",
      "price": 700000,
      "category": "Frontend"
    },
    {
      "id": 4,
      "name": "Lập trình Mobile",
      "teacher": "Phạm Văn Nam",
      "price": 800000,
      "category": "Mobile"
    }
  ]
}
```

**Yêu cầu kỹ thuật:** Sử dụng **Axios, `map()`, `innerHTML`, `localStorage`, `confirm()` và JSON Server Auth**.
