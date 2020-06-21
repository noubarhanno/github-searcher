# Tradeling Code challenge

#### Install dependencies

```bash
yarn install
```

#### Building the files

```bash
yarn build
```

#### start the development server

```bash
yarn start
```

#### Run Test

tools used for testing

-   [react-mock-store](https://www.npmjs.com/package/redux-mock-store)
-   [testing-library/react](https://testing-library.com/docs/react-testing-library/intro)

```bash
yarn test
```

## Solution

this is an integration app with github to fetch `users` and `repositories` from `github API` you can refer to Please refer to the [github developer](https://developer.github.com/v3/) for more details about the implementation the project data is cached in `redux store` and persiste using `redux-persist` only `users and repositories are persisted` there are three pages mainly one for handling the search control and one for handling users fetching and one for handling repos fetching

### users page and repos

there are two network request for fetching matched users with the search term and one with multiple network request to fetch user details using

```bash
 axios.all
```

and one single request to fetch repos
if the search term is exist in redux no more api calls will be executed
a debounce will return a function that will be delayed every key change in the input , only once you finish typing and no matched search term in redux then it will start the API call with the standard process (start, error, end)

## Notes for runing the app

in order to get the app running , you need to replace the github api token inside `.env` the tolen will be injected in the authorization header to get more `rate-limit`

-   you can create a testing token which gonna give you little more `rate-limit` or you can skip it to have very minimum `rate-limit`

## Routing

this project has been developed to be multipages supported using [react-router](https://reacttraining.com/react-router/web/guides/quick-start)

## tools

-   [redux-persist](https://github.com/rt2zz/redux-persist) - to persist your redux store
-   [Redux](https://redux.js.org/) - Manage your state
-   [Axios](https://github.com/axios/axios) - API calls
-   [Typescript](https://www.typescriptlang.org/)
-   [emotion](https://emotion.sh/)
-   [styled-system](https://styled-system.com/)
-   [reflexbox](https://rebassjs.org/reflexbox/)
-   [Prettier](https://prettier.io/) on staged files
