![ezgif-6-56e909fc3d7b](https://user-images.githubusercontent.com/10210800/130650822-0561d33d-cc85-4e8a-91c5-bf1dc84af11f.gif)

# How to run this repo in local development
1. install yarn
2. install dependencies through yarn
```bash
yarn
```
3. open 2 terminal session, run front-end dev server and back-end dev server at the same time
* run front end dev server
```bash
yarn dev
```
* run back end dev server
```bash
yarn backend
```
4. the front end dev server would be running on http://localhost:3000, and the back end dev server would be running on http://localhost:3001

# Implementation Description
* serve static files in front end fastify server
* run api server with fastify
* css in js: choose @emotion/styled to style components to avoid css classname naming collision and polyfill styled cross different browsers.
* fetch data with feature of cache by `swr`
* debounce user input to avoid too much api requests

## Assumptions
* search results of topics is the union of topics in data list
* search panel only takes input event, click event would not trigger query

# License
[MIT](LICENSE)
