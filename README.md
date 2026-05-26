# ApnaStay – Airbnb Clone

ApnaStay is a full-stack web application inspired by Airbnb where users can explore, list, and review rental properties.
This project allows users to create listings, view property details, and interact with other users through reviews.

The application is built using the **Node.js, Express, MongoDB stack** and follows the **MVC architecture**.

---

## Features

* User Authentication (Signup / Login)
* Create, Edit, and Delete Property Listings
* Add and Delete Reviews
* Map Integration for Property Location
* Image Upload using Cloudinary
* Responsive UI
* Error Handling and Flash Messages

---

## Tech Stack

**Frontend**

* HTML
* CSS
* Bootstrap
* EJS Templates

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB
* Mongoose

**Other Tools**

* Cloudinary (Image Storage)
* Map Integration
* Express-session
* Passport.js (Authentication)

---

## Project Structure

```
majorProject
│
├── controllers
├── models
├── routes
├── views
├── public
├── utils
├── init
│
├── app.js
├── middleware.js
├── schema.js
├── cloudConfig.js
├── package.json
└── README.md
```

---


## Installation

Install dependencies

npm install

Create a .env file and add required variables

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
DB_URL=your_database_url
SESSION_SECRET=your_secret

Run the project

node app.js


## Future Improvements

* Payment Integration
* Booking System
* Advanced Search Filters
* Wishlist Feature

---

## Author

**Khushi Tiwari**

If you like this project, feel free to ⭐ the repository.

---
