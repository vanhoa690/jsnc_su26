# Bài thực hành - Quản lý sách

## Yêu cầu

Xây dựng trang **Danh sách sách** sử dụng JavaScript, Axios và JSON Server.

### Chức năng

1. Gọi API để lấy danh sách sách.
2. Hiển thị danh sách sách dưới dạng `table`.
3. Hiển thị các thông tin:
   - ID
   - Tên sách
   - Tác giả
   - Giá
   - Thao tác
4. Mỗi sách có một nút **Xóa**.
5. Khi bấm **Xóa**, phải sử dụng `confirm()` để hỏi người dùng.
6. Nếu chọn **OK**:
   - Gọi API `DELETE`.
   - Xóa đúng sách theo `id`.
   - Hiển thị lại danh sách sau khi xóa.
7. Nếu chọn **Cancel** thì không thực hiện xóa.

## API

```text
GET    http://localhost:3000/books
DELETE http://localhost:3000/books/:id
```

## Yêu cầu kỹ thuật

- Sử dụng Axios để gọi API.
- Sử dụng `map()` để hiển thị danh sách.
- Sử dụng `innerHTML` để hiển thị dữ liệu.
- Sử dụng `confirm()` trước khi xóa.
- Không cần làm chức năng thêm hoặc sửa.

## Dữ liệu

Sử dụng file `db.json` đi kèm.

```json
{
  "books": [
    {
      "id": 1,
      "title": "Lập trình JavaScript cơ bản",
      "author": "Nguyễn Văn An",
      "price": 150000
    },
    {
      "id": 2,
      "title": "HTML & CSS cho người mới",
      "author": "Trần Văn Bình",
      "price": 120000
    },
    {
      "id": 3,
      "title": "Học React từ cơ bản",
      "author": "Lê Minh Tuấn",
      "price": 180000
    },
    {
      "id": 4,
      "title": "Lập trình Web với Node.js",
      "author": "Phạm Văn Nam",
      "price": 200000
    },
    {
      "id": 5,
      "title": "Cơ sở dữ liệu SQL",
      "author": "Hoàng Minh Đức",
      "price": 170000
    }
  ]
}
```

## Kết quả mong muốn

Trang có một bảng:

| ID  | Tên sách                    | Tác giả       |    Giá | Thao tác |
| --- | --------------------------- | ------------- | -----: | -------- |
| 1   | Lập trình JavaScript cơ bản | Nguyễn Văn An | 150000 | Xóa      |
| 2   | HTML & CSS cho người mới    | Trần Văn Bình | 120000 | Xóa      |
| ... | ...                         | ...           |    ... | Xóa      |

**Mục tiêu:** Hoàn thành chức năng **hiển thị danh sách + xác nhận xóa + xóa dữ liệu bằng API**.
