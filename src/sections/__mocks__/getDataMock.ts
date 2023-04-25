export const mockGetData = jest.fn();

const mockDataGetter = jest.fn().mockImplementation(() => {
  getData: mockGetData;
});

export default mockDataGetter;
