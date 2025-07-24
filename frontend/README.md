# 📘 Backend API Response Guidelines for Profile Page Integration

To ensure smooth integration with the front-end, follow the data structures and naming conventions described below. This enables plug-and-play replacement of mock/localStorage data with API responses.

---

## 🧑‍💼 Profile Header

```json
{
  "firstName": "Ajay",
  "lastName": "Khan",
  "username": "@ajaykhan6433",
  "headline": "Nothing to show here"
}

📧 Personal Info
```json
{
  "email": "ajaykhan6433@gmail.com",
  "country": "India",
  "phoneCode": "+91",
  "phoneNumber": "9717965986",
  "location": "Gurugram",
  "visibility": "private" // Options: 'private' or 'public'
}

📄 Resume
```json
{
  "fileName": "Ajay_Resume.pdf",
  "url": "https://yourcdn.com/uploads/resume/Ajay_Resume.pdf",
  "visibility": "private"
}

 Badges
```json
[
  {
    "name": "React Expert",
    "icon": "https://cdn-icons-png.flaticon.com/512/1183/1183672.png"
  },
  {
    "name": "Top Contributor",
    "icon": "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
  }
]
