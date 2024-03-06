/// <reference types="cypress"/>

const baseURL = "https://api.restful-api.dev/objects";

const OBJECT = {
  name: "Apple MacBook Pro 20",
  data: {
    year: 2024,
    price: 1849.99,
    "CPU model": "M3",
    "Hard disk size": "1 TB",
  },
};

describe("Create object", () => {
  it("Create object successfully", () => {
    cy.request({
      method: "POST",
      url: baseURL,
      body: OBJECT,
    }).then(({ status, body }) => {
      expect(status).to.equal(200);
      expect(body).to.have.property("id");
      expect(body).to.have.property("createdAt");
      expect(body.name).to.equal("Apple MacBook Pro 20");
      expect(body.data).to.deep.equal({
        year: 2024,
        price: 1849.99,
        "CPU model": "M3",
        "Hard disk size": "1 TB",
      });
    });
  });

  it("Create object unsuccessfully", () => {
    cy.request({
      method: "POST",
      url: baseURL,
      failOnStatusCode: false,
    }).then(({ status, body }) => {
      expect(status).to.equal(400);
      expect(body).to.deep.equal({
        error:
          "400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.",
      });
    });
  });
});
