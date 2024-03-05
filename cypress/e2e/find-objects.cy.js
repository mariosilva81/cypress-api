/// <reference types="cypress"/>

import { OBJECTS } from "../mock/objects";

export const BASE_URL = "https://api.restful-api.dev/objects";

describe("Find objects", () => {
  const objectId = 1;
  const nonExistentObjectId = "999";

  it("Find object by ID", () => {
    cy.request({
      method: "GET",
      url: `${BASE_URL}/${objectId}`,
    }).then(({ status, body }) => {
      expect(status).to.equal(200);
      expect(body).to.deep.equal(OBJECTS[0]);
    });
  });

  it("Find all objects", () => {
    cy.request({
      method: "GET",
      url: BASE_URL,
    }).then(({ status, body }) => {
      expect(status).to.equal(200);
      expect(body).to.deep.equal(OBJECTS);
    });
  });

  it("Find nonexistent object", () => {
    cy.request({
      method: "GET",
      url: `${BASE_URL}/${nonExistentObjectId}`,
      failOnStatusCode: false,
    }).then(({ status, body }) => {
      expect(status).to.equal(404);
      expect(body).to.deep.equal({
        "error": `Oject with id=${nonExistentObjectId} was not found.`,
      });
    });
  });
});
