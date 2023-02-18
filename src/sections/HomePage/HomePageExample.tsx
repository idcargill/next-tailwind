import React from 'react';

import HomeTitle from './HomeTitle';
import ProjectStarter from './ProjectStarter';
import JestExamples from '../JestExample/JestExamples';


const Spinner = () => (
  <div>
    <p>Hover here</p>
  </div>
);

const HomePageExamples = () => (
  <>
    <HomeTitle title="Home Page Example" />
    <ProjectStarter />
    <Spinner />
    <JestExamples />
  </>
);

export default HomePageExamples;
