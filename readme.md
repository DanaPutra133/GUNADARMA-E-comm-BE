# GUNADARMA E-comm BE

Merupakan sebuah backend dari UNADARMA E-comm FE, menggunakan mongodb untuk database nya.

## Package

- mongose
- cloudinary
- cors
- express

## cara install

1. Clone repositori:

   ```bash
   git clone https://github.com/DanaPutra133/GUNADARMA-E-comm-BE.git

2. Install module:

   ```
   npm install
   ```

3. Running website:

   ```
   npm run dev
   ```

## Catatan

- Frontend sudah harus di jalankan agar dapat menggunakan website dengan maksimal!

- isi bagian connect di server.js dengan url mongodb kamu agar terhubung!

## Documentantion

Output JSON:

```json
"data": 
[
        {
            "_id": "6790826c21f67b8533184470",
            "image": "http://res.cloudinary.com/dwurje7kj/image/upload/v1737523799/pafqwaiyzl9cwenflzm1.jpg",
            "title": "orang pinter",
            "description": "NGERII SSHHHHH",
            "category": "Phone",
            "price": 10000,
            "salePrice": 124440,
            "totalStock": 277,
            "averageReview": 4,
            "createdAt": "2025-01-22T05:30:20.578Z",
            "updatedAt": "2025-01-23T05:38:18.714Z",
            "__v": 0
        },
]
```
## Contoh Pendefisian skema (schema) untuk model "Product"
```javascript
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    description: String,
    category: String,
    brand: String,
    price: Number,
    salePrice: Number,
    totalStock: Number,
    averageReview: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
```
## CORS/ Cross-Origin Resource Sharing
```javascript
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
```

## website dari developer dan data lain nya:
Kelompok Rafli website

Link website:
- > server 1
 https://tugas.danafxc.my.id
- > server 2
https://www.aquafxca.my.id

- Link repository FE: https://github.com/DanaPutra133/GUNADARMA-E-comm-FE
- Link repository BE: https://github.com/DanaPutra133/GUNADARMA-E-comm-BE

- Link spreadsheet: https://docs.google.com/spreadsheets/d/1cdm2tzX15Klu1PgE5-_UDyZsDfQrJ6FWbjfKydSPJiM/edit?usp=sharing

- Link Figma: https://www.figma.com/design/IwRY2OLD5cLqQhs4DrPvQ2/Untitled?node-id=1-9&t=S2tPWnXvhwTDSEuO-1 

- draw io (topologi server, flowchart, dll): https://drive.google.com/file/d/1kHdEBYwfzz1ZnQo3l3aZ8h3jhcqynyLc/view?usp=sharing
> buka dengan draw.io ada di atas
> desktop only or you already linked account to draw io :D



