# 🍽️ Restaurant Reservation Management System

A complete system for managing restaurant table reservations, developed with Spring Boot (Backend) and React + TypeScript (Frontend).

## 📋 Description

This project is a complete solution for restaurants to efficiently manage their table reservations. The system allows customers to make reservations online and restaurants to manage their tables, staff, and reservations through intuitive dashboards.

## 🏗️ Architecture

The project is divided into two main parts:

- **Backend (API)**: Developed in Java with Spring Boot
- **Frontend**: Developed in React with TypeScript

## 🚀 Technologies Used

### Backend
- **Java 17**
- **Spring Boot 3.5.0**
- **Spring Data JPA**
- **Spring Security**
- **PostgreSQL** (Database)
- **JWT** (Authentication)
- **Lombok**
- **Maven**

### Frontend
- **React 18**
- **TypeScript**
- **Vite** (Build tool)
- **Tailwind CSS**
- **Shadcn/ui** (Components)
- **React Router DOM**
- **React Hook Form**
- **Axios**
- **TanStack Query**
- **Radix UI**

## 📁 Project Structure

```
gestao-reserva-restaurant-main/
├── api/ # Spring Boot Backend
│ ├── src/main/java/com/reservafacil/api/
│ │ ├── config/ # Settings
│ │ ├── controllers/ # REST Controllers
│ │ ├── dto/ # Data Transfer Objects
│ │ ├── entities/ # JPA Entities
│ │ ├── enums/ # Enumerations
│ │ ├── exceptions/ # Exception Handling
│ │ ├── repositories/ # Data repositories
│ │ ├── security/ # Security configurations
│ │ └── services/ # Business logic
│ ├── src/main/resources/
│ │ └── application.properties
│ └── pom.xml
├── react/ # React frontend
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ ├── context/ # React contexts
│ │ ├── hooks/ # Hooks Custom
│ │ ├── interfaces/ # TypeScript interfaces
│ │ ├── lib/ # Utilities
│ │ ├── pages/ # Application pages
│ │ ├── routes/ # Route configuration
│ │ └── service/ # API services
│ ├── package.json
│ └── vite.config.ts
└── README.md
```

## 🗄️ Data Model

### Main Entities

- **Restaurant**: Restaurant information (name, address, phone number, etc.)
- **Tables**: Available tables at the restaurant
- **Client**: Customer data
- **Employee**: Restaurant staff
- **Booking**: Reservations made
- **Availability**: Table availability
- **Review**: Customer reviews
- **User**: System users

## 🔐 Features

### For Customers
- Registration and Login
- View Restaurants
- Make Table Reservations
- Manage Profiles
- Rate Restaurants

### For Restaurants
- Registration and Login
- Management Dashboard
- Table Management
- View Reservations
- Employee Management
- View Reviews

## 🛠️ Prerequisites

- **Java 17** or higher
- **Node.js 18** or higher
- **PostgreSQL 12** or higher
- **Maven 3.6** or higher

## 📦 Installation and Configuration

### 1. Clone Repository
```bash
git clone <repository-url>
cd gestao-reserva-restaurant-main
```

### 2. Database Configuration

1. Create a PostgreSQL database called `restaurant_booking`
2. Configure the credentials in the `api/src/main/resources/application.properties` file:
```properties
spring.datasource.url=jdbc:postgresql://localhost:6442/restaurant_booking
spring.datasource.username=postgres
spring.datasource.password=root
```

### 3. Backend (API)

```bash
cd api
mvn clean install
mvn spring-boot:run
```

The API will be available at: `http://localhost:8080`

### 4. Frontend (React)

```bash
cd react
npm install
npm run dev
```

The frontend will be available at: `http://localhost:5173`

## 🔧 Settings

### Environment Variables

The project uses the following main settings:

- **JWT Secret**: Configured in `application.properties`
- **Database Port**: 6442 (PostgreSQL)
- **API Port**: 8080 (Spring Boot)
- **Frontend Port**: 5173 (Vite)

## 📱 Main Pages

### Customer
- `/customer/login` - Customer login
- `/customer/registration` - Customer registration
- `/customer/dashboard` - Customer dashboard
- `/customer/profile` - Customer profile

### Restaurant
- `/restaurant/login` - Restaurant login
- `/restaurant/registration` - Restaurant registration
- `/restaurant/dashboard` - Restaurant dashboard
- `/restaurant/tables` - Table management
- `/restaurant/reservations` - View reservations
- `/restaurant/reviews` - Received reviews

## 🚀 Deploy

### Backend
```bash
cd api
mvn clean package
java -jar target/api-0.0.1-SNAPSHOT.jar
```

### Frontend
```bash
cd react
npm run build
# The files will be in dist/
```

## 🧪 Tests

### Backend
```bash
cd api
mvn test
```

### Frontend
```bash
cd react
npm run lint
```

## 📝 API Endpoints

The API includes endpoints for:
- Authentication (JWT)
- Restaurant Management
- Table Management
- Reservation Management
- Customer Management
- Employee Management
- Reviews
