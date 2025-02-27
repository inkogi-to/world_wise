Certainly! Here is your **README.md** in markdown format:

```markdown
# World Wise SPA

A modern Single Page Application (SPA) built with **React**, **React Router**, and **Context API**. This project provides an interactive platform that showcases product details, pricing information, user login, city and country listings, and more. It also implements a protected route for authenticated users to access the app's content.

## Features

- **Homepage**: The landing page with general information.
- **Product Page**: Detailed product information and features.
- **Pricing Page**: Pricing options for the products.
- **Login**: User authentication functionality.
- **App Layout**: A layout protected by authentication.
- **City and Country Listings**: Dynamic lists of cities and countries.
- **Forms**: A form to collect data from users.
- **Protected Routes**: Pages that are accessible only to authenticated users.

## Tech Stack

- **React**: The core JavaScript library used for building the user interface.
- **React Router**: Provides navigation and routing capabilities within the application.
- **Context API**: Used for managing global state, specifically for cities and user authentication.
- **React Hooks**: Used for managing state and side effects within functional components.
- **JSON Server**: A fake REST API to handle city and country data (for local development).
  
## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/worldwise-spa.git
   ```

2. Navigate to the project directory:

   ```bash
   cd worldwise-spa
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the app locally at `http://localhost:5173/` and the JSON server API at `http://localhost:8000/`.

## Folder Structure

```bash
src/
├── components/         # Contains reusable components like CityList, CountryList, etc.
├── contexts/           # Contains Context Providers for Cities and Authentication.
├── pages/              # Contains the different page components (Homepage, Product, Login, etc.)
├── App.js              # Main app file with routes and components
├── index.js            # Entry point for the application
public/
├── index.html          # Main HTML file for the app
```

## Routes

- `/` - Homepage
- `/product` - Product details page
- `/pricing` - Pricing page
- `/login` - Login page
- `/app` - Protected layout page (requires authentication)
    - `/app/cities` - City List
    - `/app/cities/:id` - Specific City details
    - `/app/countries` - Country List
    - `/app/form` - Form for collecting data
- `/404` - Page Not Found (shown for any undefined routes)

## Protected Routes

Certain routes under the `/app` path are protected and require a user to be authenticated. If the user is not logged in, they will be redirected to the login page.

### ProtectedRoute Component

The `ProtectedRoute` component wraps any route that requires authentication. If the user is not logged in, they will be redirected to the login page.

## Authentication

This project uses a **fake authentication context** for demonstration purposes. The authentication is simulated with a context and local state. The authentication logic can be replaced with real authentication methods like OAuth, JWT, etc.

## Running the JSON Server API

For local development, this project uses **JSON Server** to serve data for cities and countries.

To run the JSON server, the command `npm run server` will start the mock backend, which watches the `data/db.json` file for changes.

---

## Deployment

To deploy this project on a platform like **Netlify**, **Vercel**, or **Render**, follow the platform's documentation for deploying React applications.

1. **Build the project**:

   ```bash
   npm run build
   ```

2. **Deploy the contents of the `dist` folder** to the hosting platform.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

---

This markdown format includes everything you need:

- Project description
- Features list
- Tech stack
- Installation instructions
- Folder structure
- Route details
- Protected route handling
- Authentication info
- JSON Server instructions
- Deployment instructions
- License section

Feel free to modify it as needed!