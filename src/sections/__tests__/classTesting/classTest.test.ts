import Dragon, { Animal } from './ClassSomething';
import mockDataGetter from 'src/sections/__mocks__/getDataMock';
jest.mock('./ClassSomething');

describe('Dragon Class', () => {
  const dragon = new Dragon('jo', 2, 'fire');
  test('Class Instances', () => {
    expect(Dragon).toHaveBeenCalledTimes(1);
  });

  test('Class Constructor called', () => {
    expect(dragon).toBeInstanceOf(Dragon);
  });

  test('Public method defined', () => {
    dragon.speak();
    expect(dragon.speak).toBeDefined();
    expect(dragon.speak).toHaveBeenCalledTimes(1);
  });

  test('Mocking', () => {
    mockDataGetter.getData;
    expect(mockDataGetter.getData).toBeDefined();
  });
});
