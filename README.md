# demo-react-next-cms

### Intro

This small workshop demo contains 4 separate repos

`hello-world-app` => a CRA app comsuing some basic CMS data

`hello-world-nextjs-cms` => a NextJS application consuming some basic content driven from a strapi CMS

`hello-world-strapi` => a StrapiJS applications putting out json data at localhost:1337/products

`react-testing` => a CRA app pulling in some basic movie information with some good Jest, Enzyme, and Cypresss tests

### Branch guide

`create-context` => `create-context-finish`

The above branches go from 0 to having data loaded with componentdidmount and some small components built to show reacts composition model

`redux` => `redux-finish`

Above branches go from just basic libraries installed to a small implementation of redux and how the store, actions, reducers, and state all come together

`next-js`

contains all the nextjs code changes and shows the different between getstatic and getserver props will be used with StrapiJS folder

`react-testing`

self contained branch for all application code relating to Jest, Enzyme and Cypress tests

Each folder should have readme on how to get started. It'll be a good idea to `yarn install` or `npm i` with each branch as some have additional libraries

for strapi: admin login: test@test.io pw: Test1234 note is a pre-build sqlite db
