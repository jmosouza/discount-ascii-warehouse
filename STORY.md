# Discount Ascii Warehouse story

This is an **unusual** kind of changelog, which I decided to call "story". Instead of listing only changes in code, I also comment the development process. The goal of this file is to make it easier for the application review team to evaluate my steps.

# Day 1

## 1st hour of work

1. Quick overview of backend code
2. Testing server on Postman
3. Building minimal docs on Postman for reference
4. Git: initialize git, gitignore, commit server code and start branch `boilerplate`

## 2nd hour of work

1. ESLint: extend airbnb and ignore server files
2. Webpack: install React and ES2015 loaders
3. Product components: face and grid item

I though of saving this hour by using a generator tool like `create-react-app`, but that wouldn't be compatible with the idea of this coding challenge, which is to add frontend code to an existing codebase along with server code. `create-react-app` is meant to create a standalone app. In a green field project, I would suggest to the client to separate concerns (server and frontend) because it's more maintainable.

## 3rd hour of work

- Jest: install and write ProductFace spec
- Product date, price and size components with specs

Jest is using options `--watch --coverage`. I would normally ignore the `/coverage` directory in git, but this time I checked it in to make it easily available to the coding challenge evaluators.

## 4th hour of work

- Relative date interval
- Record debugging video

# Day 2

## 1st hour of work

- Test and refactor relativeDateInterval and ProductDate
- Record testing video

## 2nd hour of work

- Extract Date.now mock and use in ProductGridItem spec
- ProductGrid component with spec

This was a shorter day because my current work took more time than usual.
