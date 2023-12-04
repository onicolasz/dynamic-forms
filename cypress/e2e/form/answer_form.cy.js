/// <reference types="Cypress"/>

describe("Teste Funcional preenchimento de formulário", () => {
  it("Teste preenchendo formulário pelo botão", () => {
    cy.visit("http://localhost:3000/form/1");
    cy.get(".field-text").type("Nicolas Barros");
    cy.get("button > div").click();

    cy.wait(2000);

    cy.get(".field-text").type("devnicolasbarrosdesouza@gmail.com");
    cy.get("button > div").click();

    cy.wait(2000);

    cy.get(":nth-child(2) > .checkbox-label > .checkbox-text").click();
    cy.get(":nth-child(3) > .checkbox-label > .checkbox-text").click();
    cy.get("button > div").click();

    cy.wait(2000);

    cy.get(".field-text").type("teste");
    cy.get("button > div").click();

    cy.wait(2000);
    cy.get(".thank-you-title").should("be.visible");
  });

  it("Teste preenchendo formulário pelo navbar", () => {
    cy.visit("http://localhost:3000/form/1");
    cy.get(".field-text").type("Nicolas Barros");
    cy.get(".nav-button-container > :nth-child(2)").click();

    cy.wait(2000);

    cy.get(".field-text").type("devnicolasbarrosdesouza@gmail.com");
    cy.get(".nav-button-container > :nth-child(2)").click();

    cy.wait(2000);

    cy.get(":nth-child(2) > .checkbox-label > .checkbox-text").click();
    cy.get(":nth-child(3) > .checkbox-label > .checkbox-text").click();
    cy.get(".nav-button-container > :nth-child(2)").click();

    cy.wait(2000);

    cy.get(".field-text").type("teste");
    cy.get(".nav-button-container > :nth-child(2)").click();

    cy.wait(2000);
    cy.get(".thank-you-title").should("be.visible");
  });

  it("Teste preenchendo formulário até a penúltima pergunta, voltando pra primeira e preenchendo de novo.", () => {
    cy.visit("http://localhost:3000/form/1");
    cy.get(".field-text").type("Nicolas Barros");
    cy.get(".nav-button-container > :nth-child(2)").click();

    cy.wait(2000);

    cy.get(".field-text").type("devnicolasbarrosdesouza@gmail.com");
    cy.get(".nav-button-container > :nth-child(2)").click();

    cy.wait(2000);

    cy.get(":nth-child(2) > .checkbox-label > .checkbox-text").click();
    cy.get(":nth-child(3) > .checkbox-label > .checkbox-text").click();
    cy.get(".nav-button-container > :nth-child(2)").click();

    cy.wait(2000);

    cy.get(".nav-button-container > :nth-child(1)").click();

    cy.wait(2000);

    cy.get(".nav-button-container > :nth-child(1)").click();

    cy.wait(2000);

    cy.get(".nav-button-container > :nth-child(1)").click();

    cy.wait(2000);

    cy.get(".field-text").clear().type("Teste da Silva");
    cy.get(".nav-button-container > :nth-child(2)").click();

    cy.wait(2000);

    cy.get(".field-text").clear().type("testedasilva@gmail.com");
    cy.get(".nav-button-container > :nth-child(2)").click();

    cy.wait(2000);

    cy.get(":nth-child(2) > .checkbox-label > .checkbox-text").click();
    cy.get(":nth-child(3) > .checkbox-label > .checkbox-text").click();
    cy.get(":nth-child(4) > .checkbox-label > .checkbox-text").click();
    cy.get(":nth-child(5) > .checkbox-label > .checkbox-text").click();
    cy.get(".nav-button-container > :nth-child(2)").click();

    cy.wait(2000);

    cy.get(".field-text").type("tudo certo");
    cy.get(".nav-button-container > :nth-child(2)").click();

    cy.wait(2000);

    cy.get(".thank-you-title").should("be.visible");
  });

  it("Teste validações do input, errando pelo menos uma vez.", () => {
    cy.visit("http://localhost:3000/form/1");
    cy.get(".nav-button-container > :nth-child(2)").click();
    cy.get(".error-message").should("be.visible");
    cy.get(".field-text").type("Nicolas Barros");
    cy.get(".nav-button-container > :nth-child(2)").click();

    cy.wait(2000);

    cy.get(".field-text").type("devnicolasbarrosdesouza");
    cy.get(".nav-button-container > :nth-child(2)").click();
    cy.get(".error-message").should("be.visible");
    cy.get(".field-text").type("@gmail.com");
    cy.get(".nav-button-container > :nth-child(2)").click();

    cy.wait(2000);

    cy.get(".nav-button-container > :nth-child(2)").click();
    cy.get(".error-message").should("be.visible");
    cy.get(":nth-child(2) > .checkbox-label > .checkbox-text").click();
    cy.get(":nth-child(3) > .checkbox-label > .checkbox-text").click();
    cy.get(".nav-button-container > :nth-child(2)").click();

    cy.wait(2000);

    cy.get(".field-text").type("teste");
    cy.get(".nav-button-container > :nth-child(2)").click();

    cy.wait(2000);
    cy.get(".thank-you-title").should("be.visible");
  });
});
