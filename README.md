# Cách tùy chỉnh Profile

## 1. Chỉnh sửa thông tin cá nhân

Mở file `index.html` và thay đổi các thông tin sau:
- Tên của bạn: `<h1 class="name">Your Name</h1>`
- Tiêu đề: `<p class="title">Developer | Designer | Creator</p>`
- Liên kết mạng xã hội: thay đổi `yourusername` trong các href

## 2. Thêm ảnh đại diện

Đặt ảnh của bạn vào thư mục `assets/images/` với tên `avatar.jpg`

## 3. Chỉnh sửa kỹ năng

Trong phần `<section class="skills">`, thêm hoặc xóa các thẻ `<span class="skill-tag">`

## 4. Thêm dự án

Trong phần `<section class="projects">`, thêm các thẻ `<div class="project-card">` mới

## 5. Deploy lên GitHub Pages

### Cách 1: Sử dụng GitHub Actions (tự động)
1. Push code lên branch `main`
2. Vào Settings > Pages
3. Chọn "GitHub Actions" trong Source
4. Workflow sẽ tự chạy và deploy

### Cách 2: Thủ công
1. Vào repository Settings
2. Chọn Pages trong menu bên trái
3. Source: Deploy from a branch
4. Branch: main, folder: / (root)
5. Click Save

## Cấu trúc thư mục

```
ReadmeGit/
├── index.html          # Trang profile chính
├── css/
│   └── style.css       # File CSS style
├── assets/
│   └── images/
│       └── avatar.jpg  # Ảnh đại diện
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions workflow
```
