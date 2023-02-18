import React from 'react';
import { render, screen } from '@testing-library/react';
import { getName } from '../examples';
import HomePageExamples from 'src/sections/HomePage/HomePageExample';

describe('Jest Examples Test', () => {
  describe('getName', () => {
    it('Should return correct name', () => {
      const mock = { name: 'Joe' };

      const result = getName(mock);
      expect(result).toBeDefined();
    });
  });
});


describe('<HomePageExamples/>', () => {
  test('should render componente', async () => {
    render(<HomePageExamples />);
    const heading = await screen.findAllByRole('heading');
    expect(heading[0]).toBeInTheDocument();
    expect(heading[0]).toHaveTextContent('Home Page');
  });
});