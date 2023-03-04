## NEXT-tailwind Project Starter 

A nextjs configured environement for starting new projects. 

After forking and installing this repo you can test and edit linter settings before running a script to reset the project. 

#### Project Configuration:

- [nextjs 13](https://nextjs.org/docs) w/ [rust compiler](https://nextjs.org/docs/advanced-features/compiler) (no babel)
- [React18](https://reactjs.org/blog/2022/03/29/react-v18.html) with [Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
- Tailwind CSS (https://tailwindcss.com/)
- Testing with [jest](https://jestjs.io/) and [React-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- Linting for React with typescript


### Start New Project

- fork this repo
- name it something cool

install dependencies:
```bash
yarn
```

### Linting

To test and inspect lint settings:
> src/sections/LintTest.tsx

Feel free to make any eslint or project environemnt changes.


To checkout the base setup and any changes run the server with:
```bash
yarn dev
```

View examples on your local server
> localhost:3000

### Clear Examples

Once you are happy with your eslint (or before) reset the project.
This will remove the example files but keep configuration settings.

To remove the custom examples and get a fresh project, run:

```bash
yarn tabulaRasa
```

This will remove:

- src/sections
- reset src/pages/index.tsx
- ./tabulaRasa.sh

### Testing

Run all tests:
> yarn test

To test while working on a single file like you should (TDD):
> yarn test-file

Generate test coverage:
> yarn test-coverage




