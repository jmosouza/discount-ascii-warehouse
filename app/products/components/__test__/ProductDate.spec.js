/* global test, expect */
import renderer from 'react-test-renderer';
import React from 'react';
import ProductDate from '../ProductDate';
import mockDateDotNow from '../../../__test__/mockDateDotNow';

mockDateDotNow();

[
  'Mon Oct 23 2017 13:00:00 GMT-0000 (-00)',
  'Mon Oct 23 2017 11:59:50 GMT-0000 (-00)',
  'Mon Oct 23 2017 11:59:30 GMT-0000 (-00)',
  'Mon Oct 23 2017 11:59:00 GMT-0000 (-00)',
  'Mon Oct 23 2017 11:30:00 GMT-0000 (-00)',
  'Mon Oct 23 2017 11:00:00 GMT-0000 (-00)',
  'Mon Oct 23 2017 06:00:00 GMT-0000 (-00)',
  'Sun Oct 22 2017 12:00:00 GMT-0000 (-00)',
  'Sat Oct 21 2017 12:00:00 GMT-0000 (-00)',
  'Fri Oct 20 2017 12:00:00 GMT-0000 (-00)',
  'Fri Oct 16 2017 12:00:00 GMT-0000 (-00)',
].forEach((dateStr) => {
  test('ProductDate', () => {
    expect(renderer.create(
      <ProductDate
        date={dateStr}
      />,
    )).toMatchSnapshot();
  });
});
