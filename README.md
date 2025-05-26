# BOOKSTORE_MICROSERVICES

A fully modular Book Store API built using **Node.js**, **Express**, **MongoDB**, and **Swagger (OpenAPI)**. This system is divided into independent microservices:

* 👤 **User Service**
* 📚 **Book Service**
* ✍️ **Review Service**
* 📦 **Order Service**

Each service is:

* Independently runnable
* Documented via Swagger UI
* Structured as RESTful APIs
* Designed to be easily debuggable

---

### 🏗️ Project Structure

```bash
swagger-book-store/
├── user-service/
├── book-service/
├── review-service/
├── order-service/
└── README.md   # ← you're here
```

---

### ⚙️ Technologies Used

* Node.js + Express
* MongoDB + Mongoose
* Swagger UI (OpenAPI 3.0)
* JWT Authentication
* Dotenv for config management
* Modular routing and controllers

---

### 🚀 How to Run the Entire Project Locally

1. **Clone the repo**

   ```bash
   git clone <your-repo-url>
   cd swagger-book-store
   ```

2. **Navigate to each service folder** and run:

   ```bash
   npm install
   node app.js
   ```

   Example:

   ```bash
   cd user-service
   npm install
   node app.js
   ```

3. ✅ Ensure MongoDB is running locally (`mongodb://localhost:27017/`)

4. **Services will run on:**

   * `User Service`: [http://localhost:3001](http://localhost:3001)
   * `Book Service`: [http://localhost:3002](http://localhost:3002)
   * `Review Service`: [http://localhost:3003](http://localhost:3003)
   * `Order Service`: [http://localhost:3004](http://localhost:3004)

---

### 🔐 Authentication (JWT)

* Register/Login via `/api/users`
* Pass the JWT token as a Bearer Token in `Authorization` header for protected routes.

---

### 📑 Swagger Docs

Each service has its own Swagger documentation:

| Service        | Swagger URL                                                      |
| -------------- | ---------------------------------------------------------------- |
| User Service   | [http://localhost:3001/api-docs](http://localhost:3001/api-docs) |
| Book Service   | [http://localhost:3002/api-docs](http://localhost:3002/api-docs) |
| Review Service | [http://localhost:3003/api-docs](http://localhost:3003/api-docs) |
| Order Service  | [http://localhost:3004/api-docs](http://localhost:3004/api-docs) |

---

### 🧪 Example Test Flow

1. **Register a User**
2. **Login → Get JWT Token**
3. **Add Books (with token)**
4. **Post a Review (with token)**
5. **Place an Order (with token)**

Use Swagger UI or Postman to test all endpoints.

---
