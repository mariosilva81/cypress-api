/// <reference types="cypress"/>

import { createMock, createErrorMessage } from "../fixtures";

describe("Create object", () => {
  it("Create object successfully", () => {
    cy.request({
      method: "POST",
      url: "/objects",
      body: createMock,
    }).then(({ status, body }) => {
      expect(status).to.equal(200);
      expect(body).to.have.property("id");
      expect(body).to.have.property("createdAt");
      expect(body.name).to.equal(createMock.name);
      expect(body.data).to.deep.equal(createMock.data);
    });
  });

  it("Create object unsuccessfully", () => {
    cy.request({
      method: "POST",
      url: "/objects",
      failOnStatusCode: false,
    }).then(({ status, body }) => {
      expect(status).to.equal(400);
      expect(body).to.deep.equal({
        error: createErrorMessage,
      });
    });
  });
});
