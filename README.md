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
git clone https://github.com/your-username/library-management-api.git
cd library-management-api
```
