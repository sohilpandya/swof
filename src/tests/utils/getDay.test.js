import getDay from '../../utils/getDay';

test('getDay returns correct Day', () => {
  if (new Date().getDay() === 0) {
    expect(getDay()).toBe('Sunday');
  }
  if (new Date().getDay() === 1) {
    expect(getDay()).toBe('Monday');
  }
  if (new Date().getDay() === 2) {
    expect(getDay()).toBe('Tuesday');
  }
  if (new Date().getDay() === 3) {
    expect(getDay()).toBe('Wednesday');
  }
  if (new Date().getDay() === 4) {
    expect(getDay()).toBe('Thursday');
  }
  if (new Date().getDay() === 5) {
    expect(getDay()).toBe('Friday');
  }
  if (new Date().getDay() === 6) {
    expect(getDay()).toBe('Saturday');
  }
});