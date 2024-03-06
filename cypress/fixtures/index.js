export const createMock = {
  name: "Apple MacBook Pro 20",
  data: {
    year: 2024,
    price: 1849.99,
    "CPU model": "M3",
    "Hard disk size": "1 TB",
  },
};

export const findMock = {
  id: "1",
  name: "Google Pixel 6 Pro",
  data: {
    color: "Cloudy White",
    capacity: "128 GB",
  },
};

export const objectId = 1;
export const nonExistentObjectId = "999";
export const createErrorMessage =
  "400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.";
export const findErrorMessage = `Oject with id=${nonExistentObjectId} was not found.`;
