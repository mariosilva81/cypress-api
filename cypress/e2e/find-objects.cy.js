/// <reference types="cypress"/>

import {
  findMock,
  objectId,
  nonExistentObjectId,
  findErrorMessage,
} from "../fixtures";

describe("Find objects", () => {
  it("Find object by ID", () => {
    cy.request({
      method: "GET",
      url: `/objects/${objectId}`,
    }).then(({ status, body }) => {
      expect(status).to.equal(200);
      expect(body).to.deep.equal(findMock);
    });
  });

  it("Find all objects", () => {
    cy.request({
      method: "GET",
      url: "/objects",
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
      url: `/objects/${nonExistentObjectId}`,
      failOnStatusCode: false,
    }).then(({ status, body }) => {
      expect(status).to.equal(404);
      expect(body).to.deep.equal({
        error: findErrorMessage,
      });
    });
  });
});
