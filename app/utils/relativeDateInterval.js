// Based on: https://stackoverflow.com/a/7641812/4668975
/**
* Returns a relative date interval. E.g.: 3 days ago.
* If the date parameter is in the future or more than 1 week old, returns the absolute date.
* @param dateStr - a valid date string
*/
const relativeDateInterval = ({ dateStr }) => {
  const date = new Date(dateStr);
  const delta = Math.round((+new Date() - date) / 1000);

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;

  let fuzzy;

  if (delta < 30) {
    fuzzy = 'just then.';
  } else if (delta < minute) {
    fuzzy = `${delta} seconds ago.`;
  } else if (delta < 2 * minute) {
    fuzzy = 'a minute ago.';
  } else if (delta < hour) {
    fuzzy = `${Math.floor(delta / minute)} minutes ago.`;
  } else if (Math.floor(delta / hour) === 1) {
    fuzzy = '1 hour ago.';
  } else if (delta < day) {
    fuzzy = `${Math.floor(delta / hour)} hours ago.`;
  } else if (delta < day * 2) {
    fuzzy = 'yesterday';
  } else if (delta < week) {
    fuzzy = `${Math.floor(delta / day)} days ago.`;
  } else {
    fuzzy = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  return fuzzy;
};

export default relativeDateInterval;
