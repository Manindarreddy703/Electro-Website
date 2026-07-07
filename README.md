# Electro – Premium Electronics Store

A modern e-commerce storefront built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**. This project demonstrates scalable frontend architecture, reusable component design, SEO best practices, responsive UI development, and AI-assisted development.

> **Note:** This is a frontend-only application. Product data is served from a static JSON file, and cart/session data is stored in the browser using `localStorage`.

---

# Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **UI:** React 19
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Forms:** React Hook Form + Zod
* **State Management:** React Context API
* **Data Source:** Static JSON
* **Persistence:** localStorage
* **Linting:** ESLint
* **Formatting:** Prettier

---

# Features

## Home Page

* Hero banner
* Featured products
* Promotional sections
* Newsletter section

## Product Listing

* Responsive product grid
* Product search
* Category filtering
* Product sorting
* Quick product view

## Product Details

* Product gallery
* Specifications
* Pricing
* Stock information
* Related products
* Add to Cart functionality

## Cart

* Add / Remove items
* Update quantities
* Price calculations
* Cart persistence using localStorage

## Login

* Login form
* Guest login support
* Form validation

## Additional Pages

* About Us
* Contact Us

---

# Folder Structure

```text
app/
components/
contexts/
hooks/
lib/
types/
data/
public/
```

The project follows a modular architecture where UI components, business logic, hooks, utilities, and page routes are separated for maintainability and scalability.

---

# Getting Started

## Install dependencies

```bash
npm install
```

## Run development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

## Build for production

```bash
npm run build
```

## Start production server

```bash
npm run start
```

---

# Architecture Decisions

* Next.js App Router
* Server Components by default
* Client Components only for interactive features
* Reusable UI components
* Context API for cart management
* Utility functions extracted into the `lib` directory
* Static product data stored in JSON
* Type-safe codebase using TypeScript interfaces

---

# SEO Implementation

The application follows modern SEO practices including:

* Dynamic page titles
* Meta descriptions
* Open Graph metadata
* Twitter metadata
* Canonical URLs
* Semantic HTML
* Proper heading hierarchy
* Image alt attributes
* Sitemap generation
* Robots.txt
* Structured metadata using the Next.js Metadata API

---

# State Management

Cart functionality is implemented using the React Context API.

Features include:

* Add to cart
* Remove from cart
* Quantity updates
* Cart totals
* Local persistence using localStorage

---

# Responsive Design

The application is fully responsive and optimized for:

* Mobile
* Tablet
* Laptop
* Desktop

---

# Accessibility

Implemented accessibility features include:

* Semantic HTML
* Keyboard navigation
* Focus-visible states
* ARIA labels
* Accessible forms
* Responsive navigation

---

# AI-Assisted Development

This project was developed with the assistance of **Claude AI**.

The AI was used to:

* Design the project architecture
* Generate reusable component structures
* Create TypeScript interfaces
* Implement responsive layouts
* Improve SEO implementation
* Build reusable UI components
* Generate mock product data
* Assist with debugging and code refinement

### Prompt Provided to Claude

The following high-level prompt was used:

> *"Build a production-quality Mini Product Showcase Website using Next.js (App Router), TypeScript, and Tailwind CSS. The application should include a Home page, Product Listing, Product Details, Cart, Login with Guest User handling, About, and Contact pages. Follow modern frontend architecture with reusable components, responsive design, Context API for state management, static JSON data, proper SEO using the Metadata API, semantic HTML, accessibility best practices, and clean TypeScript code. Organize the project using scalable folder structures, prioritize Server Components where appropriate, Client Components only for interactivity, and generate complete production-ready code with documentation."*

---

# Future Improvements

* Backend integration
* Authentication
* Payment gateway
* Wishlist
* Product reviews
* Order history
* User profiles
* API integration
* Unit testing
* End-to-end testing

---

# Assumptions

* Product data is stored locally.
* Authentication is simulated.
* Checkout is for demonstration purposes only.
* Cart data persists only in the browser.

---

# Limitations

* No backend services
* No real authentication
* No payment integration
* No inventory management
* No database

---

# Author

Developed as part of a frontend assessment to demonstrate proficiency in:

* Next.js
* TypeScript
* Component Architecture
* Responsive Design
* SEO
* Accessibility
* Modern Frontend Development
* AI-Assisted Software Development
