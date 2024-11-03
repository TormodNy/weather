# Weather

A React app that displays weather forecast and sunrise data from [api.met.no](https://api.met.no/).

## Tools and Frameworks

-   [React](https://react.dev/) - Frontend framework
-   [TypeScript](https://www.typescriptlang.org/) - Programming language
-   [Tailwind](https://tailwindcss.com/) - CSS framework
-   [React Router](https://reactrouter.com/en/main) - Client side routing
-   [MUI](https://mui.com/) - Icons and extra components
-   [Hey API](https://heyapi.dev/) - Client generation based on OpenAPI schema
-   [Vite](https://vite.dev/) - Build and
-   [Vitest](https://vitest.dev/) - Unit and component testing
-   [ESLint](https://eslint.org/) - Code analysis
-   [typescript-eslint](https://typescript-eslint.io/) - TypeScript support for ESLint
-   [Prettier](https://prettier.io/) - Code formatter

# Setup

To run the weather app locally follow these steps:

1. Clone this GitHub repository
2. Run `npm i` in the root folder to install dependencies
3. Run `npm run dev` to run the app with hot reloading enabled
4. App should now run on `http://localhost:5173/`

## Tests

Component, hook and unit tests can be started by running `npm run test` in the terminal.

# Approach

I started by setting up the project using tools and frameworks I have experience with before I started on the Dashboard page. I tried to work iteratively and focused mostly on creating working features, before looking at the next necessary step. This means I mostly finished the Dashboard page before adding routing. The benefits of doing this is that I think it is easier to make decisions (like how to do routing) when I know how it will fit into the application at the time it is needed.

I decided to generate API clients using the OpenAPI specifications for the APIs. This saves me a lot of work not having to write all types and fetching functions manually. However, in this case it seemed the specifications were lacking some types which meant I had to do some manual typing as well.

When most of the functionality was added I spent some time updating and adding tests, making the design more responsive, adding loading indicators, and making errors from data fetching more visible to the user. Mostly things that are not necessary for the application to work, but which help increase both the perceived and actual quality of the application.

# Enhancements

The following is a list of things I would like to improve:

-   **Timezone issues:**
    -   Sunrise and sunset times are shown in the user's local timezone, but it would be more correct to show it in the timezone of the location instead.
    -   `getTimezoneOffsetString` should be able to handle timezones that are not full hours.
-   **API client generation:** The Swagger/OpenAPI schema of the APIs are lacking in some parts. More correct endpoint functions and types would make fetching more robust.
-   **More tests:** Not all components, hooks and functions are tested. Adding more tests and tracking test coverage could help with improving the application's quality.
-   **Better mocking in tests:** Properly mocking API calls and timezones would make it easier to test certain functionality by being able to control both side effects and returned values.
-   **Accessibility:** Testing the app properly with screen readers, only navigating with keyboard, and automated accessibility tools like [Pa11y](https://pa11y.org/) can help make the application accessible for more users.
