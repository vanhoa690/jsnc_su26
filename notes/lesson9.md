# Bài thực hành - Quản lý Movie

## Yêu cầu

Xây dựng trang **Quản lý Movie** sử dụng JavaScript, Axios và JSON Server.

### Chức năng

1. Gọi API để lấy danh sách Movie.
2. Hiển thị danh sách Movie dưới dạng `table`.
3. Hiển thị các thông tin:
   - ID
   - Tên phim
   - Thể loại
   - Năm phát hành
   - Thao tác
4. Mỗi Movie có các nút:
   - **Sửa**
   - **Xóa**
5. Khi bấm **Xóa**, phải sử dụng `confirm()` để hỏi người dùng.
6. Nếu chọn **OK**:
   - Gọi API `DELETE`.
   - Xóa đúng Movie theo `id`.
   - Hiển thị lại danh sách sau khi xóa.
7. Khi bấm **Sửa**:
   - Chuyển sang trang sửa.
   - Lấy dữ liệu Movie theo `id`.
   - Hiển thị dữ liệu cũ lên Form.
   - Cho phép chỉnh sửa và cập nhật Movie.
8. Tạo Form **Thêm Movie**:
   - Tên phim
   - Thể loại
   - Năm phát hành
9. Khi thêm Movie:
   - Gọi API `POST`.
   - Thêm dữ liệu vào `db.json`.
   - Chuyển về trang danh sách.

## API

```text
GET    http://localhost:3000/movies
GET    http://localhost:3000/movies/:id
POST   http://localhost:3000/movies
PUT    http://localhost:3000/movies/:id
DELETE http://localhost:3000/movies/:id
```

## Yêu cầu kỹ thuật

- Sử dụng Axios để gọi API.
- Sử dụng `map()` để hiển thị danh sách.
- Sử dụng `innerHTML` để hiển thị dữ liệu.
- Sử dụng `confirm()` trước khi xóa.
- Sử dụng `GET`, `POST`, `PUT`, `DELETE`.
- Sử dụng `URLSearchParams` để lấy `id` khi sửa.
- Không sử dụng framework JavaScript.

## Dữ liệu

Sử dụng file `db.json`:

```json
{
  "movies": [
    {
      "id": 1,
      "name": "Avengers: Endgame",
      "genre": "Action",
      "year": 2019
    },
    {
      "id": 2,
      "name": "Interstellar",
      "genre": "Sci-Fi",
      "year": 2014
    },
    {
      "id": 3,
      "name": "Spider-Man: No Way Home",
      "genre": "Action",
      "year": 2021
    },
    {
      "id": 4,
      "name": "The Lion King",
      "genre": "Animation",
      "year": 2019
    },
    {
      "id": 5,
      "name": "Parasite",
      "genre": "Drama",
      "year": 2019
    }
  ]
}
```

## Kết quả mong muốn

Trang danh sách có một bảng:

| ID | Tên phim | Thể loại | Năm phát hành | Thao tác |
|---:|---|---|---:|---|
| 1 | Avengers: Endgame | Action | 2019 | Sửa / Xóa |
| 2 | Interstellar | Sci-Fi | 2014 | Sửa / Xóa |
| 3 | Spider-Man: No Way Home | Action | 2021 | Sửa / Xóa |
| ... | ... | ... | ... | ... |

**Mục tiêu:** Hoàn thành đầy đủ chức năng **CRUD Movie: hiển thị, thêm, sửa và xóa dữ liệu bằng Axios + JSON Server**.
