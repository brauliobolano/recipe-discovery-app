## Recipe Discovery App

## Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
- [User Interface Features](#user-interface-features)
- [Design Choices](#design-choices)
- [Technical Implementation](#technical-implementation)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Dependencies](#dependencies)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.



### Features
- **Search Recipes**: Users can search for recipes by name, ingredients, cuisine, and dietary preferences. The search is case-insensitive and can match partial words.
- **View Recipes**: Users can view a list of all recipes. Each recipe includes the name, ingredients, cuisine, instructions, and dietary preferences.

## User Interface Features

### Dark and White Mode
The application supports both dark and white modes for better user experience. Users can switch between these modes according to their preference.

### Checkboxes
The application uses checkboxes for selecting multiple options in various parts of the user interface. For instance, checkboxes can be used to select multiple ingredients for a recipe search.

### Design Choices
- **Next.js**: The application is built with Next.js, a React framework that enables server-side rendering and generates static websites for React based web applications.
- **Mongoose**: Mongoose is used to model the application data with MongoDB. It provides a straightforward, schema-based solution to model the application data and includes built-in type casting, validation, query building, and business logic hooks.
- **Environment Variables**: Environment variables are used to store sensitive information like the MongoDB connection string and the base URL of the API. This allows the code to be shared publicly without exposing sensitive information.

### Technical Implementation
- **Fetching Data**: The application fetches data from the /api/recipes endpoint using the fetch API. This is done in the getServerSideProps function in index.tsx, which runs on the server-side before the page is rendered.
- **Database Connection**: The application connects to a MongoDB database using Mongoose. The connection is established in the /api/recipes.js file, which exports a handler function for the /api/recipes endpoint.
- **Search Functionality**: The search functionality is implemented in the Home component in index.tsx. The runSearchFunction function filters the list of recipes based on the search input.
- **Environment Variables**: The NEXT_PUBLIC_APP_URL and MONGODB_URL environment variables are set in a .env file for local development and in the deployment environment for production.

### Deployment
The application is deployed on Vercel. The NEXT_PUBLIC_APP_URL environment variable is set to the URL of the deployed application, and the MONGODB_URL environment variable is set to the connection string of the MongoDB Atlas cluster.

The MongoDB Atlas cluster's network access rules are configured to allow connections from the IP address of the Vercel deployment platform.

### Future Improvements
- **Pagination**: Implement pagination to limit the number of recipes displayed at once and improve load times.
- **User Accounts**: Allow users to create accounts, save their favorite recipes, and submit their own recipes.
- **Recipe Details Page**: Add a recipe details page where users can view more information about a recipe, including user reviews and ratings.

## Dependencies

The project uses the following dependencies:

### Main Dependencies
- **body-parser**: "^1.20.2"
- **cors**: "^2.8.5"
- **dotenv**: "^16.4.5"
- **express**: "^4.19.2"
- **flowbite-react**: "^0.7.5"
- **mongodb**: "^6.5.0"
- **mongoose**: "^8.2.4"
- **next**: "14.1.4"
- **react**: "^18"
- **react-dom**: "^18"

### Development Dependencies
- **@types/node**: "^20"
- **@types/react**: "^18"
- **@types/react-dom**: "^18"
- **autoprefixer**: "^10.0.1"
- **eslint**: "^8"
- **eslint-config-next**: "14.1.4"
- **postcss**: "^8"
- **tailwindcss**: "^3.3.0"
- **typescript**: "^5"

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!