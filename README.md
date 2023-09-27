## Donation Campaign

## Features

Here are some of the key features of this React application:

1. **Client-Side Routing**:
   - The application uses the `react-router-dom` library to implement client-side routing. Routes are defined using the `createBrowserRouter` function, allowing for seamless navigation between different components based on specified paths.

2. **Asynchronous Data Loading**:
   - Data is loaded asynchronously using the `fetch` function. For example, card data is fetched from a JSON file located at `'../public/card.json'`. This dynamic data loading enhances the user experience by updating content without requiring full page reloads.

3. **React Strict Mode**:
   - The application is wrapped in `<React.StrictMode>`, enabling React's strict mode during development. Strict mode helps identify and address potential issues early in the development process, improving overall reliability and performance.

## Getting Started

To run this application locally, follow these steps:

1. [Clone the repository](#clone-the-repository)
2. [Install dependencies](#install-dependencies)
3. [Start the development server](#start-the-development-server)

### Clone the Repository

```bash
git clone [repository URL]
cd [repository directory]
