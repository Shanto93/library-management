# Library Management API

A RESTful API built with **Express**, **TypeScript**, and **MongoDB** (via **Mongoose**) for managing a library system — including books and borrow transactions. This API ensures proper business logic, such as inventory availability during borrowing, and supports aggregation reporting.

## Features

* Book creation, retrieval, update, and deletion
* Borrowing functionality with:

  * Availability checks
  * Real-time book quantity updates
* Aggregated summary of borrowed books
* Schema validation & error handling
* Filtering, sorting, and pagination
* Use of Mongoose static methods and middleware

---

## Tech Stack

* **Backend**: Express.js, TypeScript
* **Database**: MongoDB (via Mongoose)
* **Validation & Logic**: Mongoose schema, custom methods
* **Dev Tools**: Nodemon, ts-node, ESLint, Prettier

---

## Getting Started

### Prerequisites

* Node.js (v18+)
* MongoDB (local or cloud instance)
* npm or yarn

### Clone the Repo

```bash
https://github.com/Shanto93/library-management.git
cd library-management-api
```
### Install Dependencies

```bash
npm install
```

### Setup Environment

1. Create a `.env` file at the root of your project directory.

2. Add the following environment variables:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/library
```
### Run the Server

#### Development Mode

Start the server with hot reloading using `ts-node-dev`:

```bash
npm run dev
```
#### Production Mode

1. Build the TypeScript files:

```bash
npm run build
```
2. Start the compiled JavaScript with Node.js:

```bash
npm start
```

## API Endpoints

### Books

| Method | Endpoint               | Description                     |
|--------|------------------------|---------------------------------|
| POST   | `/api/books`           | Create a new book               |
| GET    | `/api/books`           | Get all books (with filters)    |
| GET    | `/api/books/:bookId`   | Get a single book by ID         |
| PATCH  | `/api/books/:bookId`   | Update a book by ID             |
| DELETE | `/api/books/:bookId`   | Delete a book by ID             |

#### Query Parameters for `/api/books`

- `filter` – Filter books by genre (e.g., `?filter=fiction`)
- `sortBy` – Sort by a field (e.g., `?sortBy=title`)
- `sort` – Order of sort: `asc` or `desc` (e.g., `?sort=desc`)
- `limit` – Limit the number of results (e.g., `?limit=5`)

---

### Borrow

| Method | Endpoint         | Description                               |
|--------|------------------|-------------------------------------------|
| POST   | `/api/borrow`    | Borrow a book (with availability check)   |
| GET    | `/api/borrow`    | Get a summary of all borrowed books       |

#### Sample POST `/api/borrow` Request Body

```json
{
  "book": "BOOK_ID_HERE",
  "quantity": 1,
  "dueDate": "2025-07-01"
}

