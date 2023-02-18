import React from 'react';

import HomeTitle from './HomeTitle';
import ProjectStarter from './ProjectStarter';
import JestExamples from '../JestExample/JestExamples';


const Spinner = () => (
  <div className="hover:text-3xl bg-gradient-to-r w-36 p-5 m-5 text-center 
  from-indigo-500 to-orange-500 rounded-full hover:bg-red-500">
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
