# ĐỀ KIỂM TRA ASM2 – JAVASCRIPT NÂNG CAO

## Chủ đề: Quản lý khóa học

### 1. Hiển thị danh sách khóa học – **2 điểm**

- Gọi API lấy danh sách khóa học. **(1đ)**
- Hiển thị: `name`, `teacher`, `price`, `category`. **(1đ)**

### 2. Xóa khóa học – **1.5 điểm**

- `confirm()` trước khi xóa. **(0.5đ)**
- Xóa bằng API `DELETE`. **(0.5đ)**
- Cập nhật lại danh sách. **(0.5đ)**

### 3. Thêm khóa học – **2.5 điểm**

- Form gồm: `name`, `teacher`, `price`, `category`. **(0.5đ)**
- `category` dùng `select`: `Frontend`, `Backend`, `Mobile`. **(0.5đ)**
- Validate:
  - `name`: required, tối thiểu 5 ký tự.
  - `teacher`: required.
  - `price`: number, > 0.
  - `category`: required. **(0.5đ)**
- Gọi API `POST` thêm dữ liệu. **(0.5đ)**
- Thông báo và chuyển về trang danh sách. **(0.5đ)**

### 4. Sửa khóa học – **2.5 điểm**

- Lấy `id` và hiển thị dữ liệu cũ lên Form. **(0.5đ)**
- `category` dùng `select`: `Frontend`, `Backend`, `Mobile`. **(0.5đ)**
- Validate dữ liệu giống chức năng thêm. **(0.5đ)**
- Gọi API `PUT` cập nhật dữ liệu. **(0.5đ)**
- Thông báo và chuyển về trang danh sách. **(0.5đ)**

### 5. Yêu cầu chung – **1.5 điểm**

- Sử dụng Axios gọi API. **(0.5đ)**
- Sử dụng `map()` và `innerHTML` hiển thị danh sách. **(0.5đ)**
- Code chạy đúng, giao diện rõ ràng. **(0.5đ)**

**Tổng: 10 điểm**

---

## `db.json`

```json
{
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
    },
    {
      "id": 5,
      "name": "PHP Laravel Cơ Bản",
      "teacher": "Hoàng Minh Đức",
      "price": 600000,
      "category": "Backend"
    }
  ]
}
```
