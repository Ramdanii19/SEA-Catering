# SEA Catering

SEA Catering is a modern web application built using **Next.js** and **Tailwind CSS** for healthy meal plan subscriptions. It includes user authentication, testimonial features, a responsive frontend, and admin functionality powered by a Strapi backend.

---

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [API Integration](#api-integration)
- [Frontend Pages](#frontend-pages)
- [Admin Access](#admin-access)
- [Testimonials](#testimonials)
- [Meal Plans](#meal-plans)
- [Contact Us](#contact-us)
- [License](#license)

---

## Features

- User authentication (login/register via Strapi)
- Meal plan listing and detail modal
- Admin-only access to meal plan CRUD (via Strapi)
- Submit and view testimonials with rating
- Subscription form and status management
- Responsive UI with Tailwind CSS
- Environment-based API configuration

---

## Requirements

- Node.js & npm
- Access to hosted Strapi backend (e.g., https://glowing-fitness-2fd3ddb969.strapiapp.com)
- Modern browser

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/sea-catering.git
   cd sea-catering
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

---

## Environment Setup

1. Create a `.env.local` file in the root directory.

2. Add the following variables:

   ```env
   NEXT_PUBLIC_API_BASE_URL=https://glowing-fitness-2fd3ddb969.strapiapp.com
   ```

3. Ensure CORS is properly configured in your Strapi backend to allow requests from your frontend domain.

---

## API Integration

- The app fetches data from a Strapi backend using the REST API endpoints.
- Example endpoint to get meal plans: `/api/meal-plans?populate=*`
- Example endpoint to login: `/api/auth/local`
- Example endpoint to post testimonial: `/api/testimonials`

---

## Frontend Pages

- `/` - Landing page with hero, features, and testimonials
- `/menu` - Meal plans listing and details modal
- `/subscribe` - Subscription form
- `/dashboard` - User dashboard to manage subscriptions (requires login)
- `/signin` & `/signup` - Auth pages

---

## Admin Access

Demo Account for admin:

- **Email**: admin@seacatering.com
- **Password**: Adminsea@123

> Only users with the `admin` role can access admin dashboard features

---

## Testimonials

- Users can submit testimonials with a star rating.
- Testimonials are shown in a Swiper carousel on homepage.

---

## Meal Plans

- Available plans include: Diet, Protein, and Royal.
- Each has details, benefits, and pricing fetched from Strapi.

---

## Contact Us

- Dedicated page showing contact manager info (name and phone number).

---

## License

This project is licensed under the MIT License.