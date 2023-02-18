import React, { useEffect, useState } from 'react';

const na = 'fish';
const stuff = ['a', 'bb'];

/*
LINT TESTING
Test formatting here for linter settings.

.eslintrc.js
.prettierrc.js
.vscode/settings.json
.editorConfig
*/

// Should Error Use Hook 
useEffect(() => {
  console.log('effect');
}, []);


interface SomeProps {
  title: string
}

const SomeComponent: React.FC<SomeProps> = ({ title }) => {
  const [data, setData] = useState(0);

  return (
    <h3>{title} {data}</h3>
  );
};

enum Words {
  test = 'TEST',
  something = 'fish',
}

interface HumanInterface {
  name: string
  id: number
}

type PersonType<T> = {
  job: string
} & T

const person: PersonType<HumanInterface> = {
  job: 'Pizza guy',
  name: 'jo',
  id: 5,
};

// short array
const arr = ['a', 'b', 'c', Words.test, person.job];
const arr2 = [arr];

// long array
const longArr = [
  'kitten',
  'fish',
  'dragon',
  'bat',
  'sharky',
  'magic',
  'lion',
  'long word and stuff',
  'lasagna',
];


// object one line
const obj = { name: 'hi', job: 'pizza guy', fish: 'shark', test: 'test', thing: 'jeep', news: 'birds returned', moreStuff: 'this is a long thing' };


// Multi line
const largObj = {
  name: 'jo',
  pet: 'kitten',
  job: 'big broom pusher',
  car: 'ugly one',
  snacks: 'yes have some',
};

// arrow function ()
export const ComponentExample1 = () => (
  <h1>Some Text</h1>
);


// arrow function with return
export const ComponentExample2 = () => {
  const text = 'Component 2 arrow func';
  return (
    <p>{text}</p>
  );
};


// typescript react class
type exampleProps = {
  name: string
}

export class ComponentExample3 extends React.Component<exampleProps> {
  name: string;

  constructor(props: exampleProps) {
    super(props);
    this.name = this.props.name;
  }

  render() {
    const name = this.props.name;
    return (
      <p id="someId">{name}</p>
    );
  }
}
