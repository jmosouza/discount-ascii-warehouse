/* global beforeAll, afterAll */

export default () => {
  const actualNow = Date.now;

  beforeAll(() => {
    Date.now = () => new Date('Mon Oct 23 2017 12:00:00 GMT-0000 (-00)').getTime();
  });

  afterAll(() => {
    Date.now = actualNow;
  });
};
