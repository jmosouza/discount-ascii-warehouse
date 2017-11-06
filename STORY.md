# Discount Ascii Warehouse story

This is an **unusual** kind of changelog, which I decided to call "story". Instead of listing only changes in code, I also comment the development process. The goal of this file is to make it easier for the application review team to evaluate my steps.

# Day 1

## Hour 1

1. Quick overview of backend code
2. Testing server on Postman
3. Building minimal docs on Postman for reference
4. Git: initialize git, gitignore, commit server code and start branch `boilerplate`

## Hour 2

1. ESLint: extend airbnb and ignore server files
2. Webpack: install React and ES2015 loaders
3. Product components: face and grid item

I though of saving this hour by using a generator tool like `create-react-app`, but that wouldn't be compatible with the idea of this coding challenge, which is to add frontend code to an existing codebase along with server code. `create-react-app` is meant to create a standalone app. In a green field project, I would suggest to the client to separate concerns (server and frontend) because it's more maintainable.

## Hour 3

- Jest: install and write ProductFace spec
- Product date, price and size components with specs

Jest is using options `--watch --coverage`. I would normally ignore the `/coverage` directory in git, but this time I checked it in to make it easily available to the coding challenge evaluators.

## Hour 4

- Relative date interval
- Record debugging video

# Day 2

## Hour 1

- Test and refactor relativeDateInterval and ProductDate
- Record testing video

## Hour 2

- Extract Date.now mock and use in ProductGridItem spec
- ProductGrid component with spec

This was a shorter day because my job took more time than usual.

# Days 3 & 4

Busy with current job

# Day 5

## Hours 1 & 2

- Tidy up project: install missing eslint plugins, gitignore coverage directory, extract prop types into own file, rearrange products components and containers
- ProductGrid container with specs

## Hour 3

- Fetch NDJSON products in AsciiStore
- Record new tech video

# Day 6

## Hour 1

- Set up proxy to work around CORS in development with webpack-dev-server

## Hours 2, 3 & 4

- Set up redux
- Fetch products with redux + specs
- InfiniteScroll

# Day 7

## Hours 1 & 2

- Install Bulma (CSS framework)
- Experiment different grid components
- Style product grid using columns and cards
