# Snackly

## Description

Snackly Food Delivery is a comprehensive food delivery website that allows users to easily order food from a diverse menu. The platform is designed to provide a seamless ordering experience, featuring robust user authentication, detailed menu categorization, and secure payment options.

## Features

- **User Authentication**: Secure login and signup functionalities to keep user accounts protected.
- **Menu Rendering**: Dynamically renders and displays an extensive range of food items available for order from the database connected to admin panel
- **Menu Category Filtering:** Allows users to filter menu items by categories, making it easier to find their favorite foods.
- **Cart Functionality**: Allows users to add and remove items from their cart with details of their order (menu items, quantity, total price)
- **Payment Integration**: Incorporates Stripe for secure online payments.
- **Order Tracking**: Allows users to view all of their past orders as well as seeing their current status to track them. (adjusted through admin panel)
- **Admin Panel**: Seperate admin panel where menu items can be added, removed, or edited. Can also view all orders and update their status (processing, out for delivery, delivered)
- **Database Integration**: Seamless integration in MongoDB between frontend and admin with the database to ensure efficient storage of all data

## Installation

To set up Snackly locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies:
3. npm run dev to run the admin and frontend
4. npm start server to run the backend

## Technologies

- **Frontend**: React and Tailwind CSS
- **Database**: MongoDB
- **Backend**: Express.js and Node.js
- **Payment Processing**: Stripe
