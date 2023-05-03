import { isDefined } from './utils';

describe('check if value is defined', () => {
  it('returns false when value is undefined', () => {
    expect(isDefined(undefined)).toBeFalsy();
  });

  it('returns true when value is defined', () => {
    expect(isDefined('Aletheia')).toBeTruthy();
  });
});
