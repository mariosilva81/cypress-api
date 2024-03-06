/// <reference types="cypress"/>

export const baseURL = "https://api.restful-api.dev/objects";

const OBJECT = {
  id: "1",
  name: "Google Pixel 6 Pro",
  data: {
    color: "Cloudy White",
    capacity: "128 GB",
  },
};

describe("Find objects", () => {
  const objectId = 1;
  const nonExistentObjectId = "999";

  it("Find object by ID", () => {
    cy.request({
      method: "GET",
      url: `${baseURL}/${objectId}`,
    }).then(({ status, body }) => {
      expect(status).to.equal(200);
      expect(body).to.deep.equal(OBJECT);
    });
  });

  it("Find all objects", () => {
    cy.request({
      method: "GET",
      url: baseURL,
    }).then((response) => {
      expect(response.status).to.equal(200);
      response.body.forEach((object) => {
        expect(object).to.have.property("id");
        expect(object).to.have.property("name");
        expect(object).to.have.property("data");
      });
    });
  });

  it("Find nonexistent object", () => {
    cy.request({
      method: "GET",
      url: `${baseURL}/${nonExistentObjectId}`,
      failOnStatusCode: false,
    }).then(({ status, body }) => {
      expect(status).to.equal(404);
      expect(body).to.deep.equal({
        error: `Oject with id=${nonExistentObjectId} was not found.`,
      });
    });
  });
});
