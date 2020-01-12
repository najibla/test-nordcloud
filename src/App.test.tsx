import React from 'react';
import App, { getDistance, points, linkStations } from './App';

import {render} from '@testing-library/react'
test('create app', () => {
  const app = render(<App/>)
  expect(app).toBeTruthy();
});

test('getDistance should return correct cartesian distance between two points', () => {
  const expected = 2.23606797749979;
  const actual = getDistance(linkStations[0], points[0]);
  expect(expected.toFixed(2)).toEqual(actual.toFixed(2));
});
