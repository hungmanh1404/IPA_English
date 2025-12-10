# Interactive English Phonemic Chart

Ứng dụng học phát âm tiếng Anh với bảng IPA tương tác, có video hướng dẫn bằng tiếng Việt.

## Tính năng

- ✅ 44 âm IPA đầy đủ (20 nguyên âm + 24 phụ âm)
- ✅ Phát âm mẫu bằng giọng Mỹ
- ✅ Sơ đồ miệng cho từng âm
- ✅ Hướng dẫn chi tiết về vị trí lưỡi, môi, hàm
- ✅ **Video hướng dẫn phát âm bằng tiếng Việt** (mới!)
- ✅ Giao diện đẹp, responsive

## Cách chạy ứng dụng

### Bước 1: Mở Terminal

Mở Terminal và di chuyển đến thư mục dự án:

```bash
cd /Users/manh.nguyen/Desktop/ipa-english
```

### Bước 2: Khởi động HTTP Server

Chạy lệnh sau để khởi động web server:

```bash
python3 -m http.server 8000
```

Bạn sẽ thấy thông báo:
```
Serving HTTP on :: port 8000 (http://[::]:8000/) ...
```

### Bước 3: Mở trình duyệt

Mở trình duyệt web và truy cập:

```
http://localhost:8000
```

### Bước 4: Sử dụng

1. **Click vào bất kỳ âm nào** trong bảng
2. **Xem bảng hướng dẫn** bên trái
3. **Cuộn xuống** để thấy phần "Video Tutorial"
4. **Click nút "Play Video Tutorial"** để xem video hướng dẫn

## ⚠️ Lưu ý quan trọng

> **Không mở file `index.html` trực tiếp!**
> 
> YouTube không cho phép phát video trên các trang web chạy từ `file://` protocol. Bạn **BẮT BUỘC** phải chạy ứng dụng qua HTTP server như hướng dẫn ở trên.
> 
> Nếu mở trực tiếp file, bạn sẽ gặp lỗi **"Error 153 - Video player configuration error"**.

## Dừng server

Để dừng server, nhấn `Ctrl + C` trong Terminal.

## Cấu trúc dự án

```
ipa-english/
├── index.html              # Trang chính
├── styles.css              # CSS chính
├── video-styles.css        # CSS cho video player
├── script.js               # JavaScript chính
├── youtube-player.js       # YouTube player integration
├── word-data.js            # Dữ liệu từ vựng
└── README.md              # File này
```

## Video nguồn

Video hướng dẫn phát âm: [44 âm trong tiếng Anh](https://www.youtube.com/watch?v=wKEI9n_Xs5Q)

---

**Chúc bạn học tốt! 🎓**
