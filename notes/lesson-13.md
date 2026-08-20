# Bài kiểm tra – Quản lý phim

Xây dựng website **Quản lý phim** sử dụng **HTML, JavaScript, Axios và JSON Server Auth**.

## 1. Đăng ký – 1 điểm

- Form gồm: Email, Password.
- Gọi `POST /register`.
- Đăng ký thành công → chuyển Login.

## 2. Đăng nhập – 1 điểm

- Gọi `POST /login`.
- Lưu `accessToken` vào `localStorage`.
- Đăng nhập thành công → trang danh sách.

## 3. Hiển thị danh sách phim – 2 điểm

Hiển thị:

- ID
- Tên phim
- Đạo diễn
- Năm phát hành
- Thể loại
- Thao tác

API:

```text
GET /movies
```

## 4. Thêm phim – 2 điểm

Form gồm:

- Tên phim
- Đạo diễn
- Năm phát hành
- Thể loại

`category` sử dụng `select`:

```text
Action
Comedy
Drama
Animation
```

API:

```text
POST /movies
```

Sau khi thêm thành công → thông báo và chuyển về danh sách.

## 5. Sửa phim – 1.5 điểm

- Hiển thị dữ liệu cũ lên Form.
- Cho phép chỉnh sửa.
- Gọi API:

```text
PUT /movies/:id
```

- Cập nhật thành công → chuyển về danh sách.

## 6. Xóa phim – 1 điểm

- Có nút **Xóa**.
- Sử dụng `confirm()`.
- Gọi:

```text
DELETE /movies/:id
```

- Hiển thị lại danh sách.

## 7. Validate Form – 1 điểm

### `name`

- Bắt buộc.
- Tối thiểu 3 ký tự.

### `director`

- Bắt buộc.
- Tối thiểu 3 ký tự.

### `year`

- Bắt buộc.
- Là số.
- Từ `1900` đến `2026`.

### `category`

- Bắt buộc.
- Phải chọn một danh mục.

## 8. Đăng xuất – 0.5 điểm

- Xóa `token` khỏi `localStorage`.
- Chuyển về trang Login.

---

# Tổng: 10 điểm

## API

```text
POST   /register
POST   /login

GET    /movies
POST   /movies
PUT    /movies/:id
DELETE /movies/:id
```

## `db.json`

```json
{
  "users": [],
  "movies": [
    {
      "id": 1,
      "name": "Avengers: Endgame",
      "director": "Anthony Russo",
      "year": 2019,
      "category": "Action"
    },
    {
      "id": 2,
      "name": "The Lion King",
      "director": "Jon Favreau",
      "year": 2019,
      "category": "Animation"
    },
    {
      "id": 3,
      "name": "The Notebook",
      "director": "Nick Cassavetes",
      "year": 2004,
      "category": "Drama"
    },
    {
      "id": 4,
      "name": "Home Alone",
      "director": "Chris Columbus",
      "year": 1990,
      "category": "Comedy"
    }
  ]
}
```

## Yêu cầu kỹ thuật

- Sử dụng **Axios**.
- Sử dụng `map()` để hiển thị danh sách.
- Sử dụng `innerHTML`.
- Sử dụng `localStorage` lưu token.
- Sử dụng `confirm()` trước khi xóa.
- Có **validate Form thêm và sửa**.
- Không cần CSS phức tạp.
