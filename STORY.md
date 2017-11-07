# Discount Ascii Warehouse story

This is an **unusual** changelog, which I decided to call "story". Here I list the steps I took each day until the final product. The goal of this file is to make it easier for the review team to evaluate my process.

## Day 1 | 4 hours

**TLDR:** setup TDD from the start, boilerplate and first React components.

- Quick overview of backend code
- Postman: testing server + writing reference docs
- Setup ESLint, webpack and jest
- Write product components + specs: grid item, face, date, price and size
- Write relativeDateInterval function

Jest is using options `--watch --coverage`. The folder `/coverage` is ignored in git because it's regenerated every time.

## Day 2 | 4 hours

**TLDR:** Testing, refactoring and new components.

- Test and refactor relativeDateInterval and ProductDate
- Extract Date.now mock and use in ProductGridItem spec
- ProductGrid component with spec

## Day 3 | 3 hours

**TLDR:** Project organization, first container and networking.

- General improvements: install missing eslint plugins, gitignore coverage directory, extract prop types into its own file, rearrange products components and containers
- ProductGrid container with specs
- Fetch products using NDJSON

## Day 4 | 9 hours

**TLDR:** Scrolling products and showing ads (first usable version).

- Set up proxy to work around CORS in webpack-dev-server
- Set up redux
- Products: infinite scroll and sorting
- Show ads among products

This day I wasted a lot of time trying to use existing infinite scrolling components. I ended up writing my own solution.

## Day 5 | 6 hours

**TLDR:** Style the app and general improvements.

- Style entire app with Bulma (SASS framework)
- Improve product load performance
- General improvements e.g. updating tests and extracting components
