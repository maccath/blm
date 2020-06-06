const donate = "spare cash"
const learn = "learn more"
const amplify = "solidarity"

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
  it("Contains a logo", () => {
    cy.get("picture").should("exist")
  })
  it("Displays a title", () => {
    cy.get("h1").contains("Black Lives Matter")
  })
  it("Has a start button", () => {
    cy.get("a").contains("Get Started").click()
    cy.url().should("include", "/im-not-racist")
  })
})

describe("I'm Not Racist Page", () => {
  const firstOption = "Not convinced"
  const secondOption = "I get it"

  beforeEach(() => {
    cy.visit("/im-not-racist").get("main").injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
  it("Does not contain a logo", () => {
    cy.get("picture").should("not.exist")
  })
  it("Has a title", () => {
    cy.get("h1").should("exist")
  })
  it("Has two option buttons", () => {
    cy.get("a").contains(firstOption).should("exist")
    cy.get("a").contains(secondOption).should("exist")
  })
  it("Loads first option - " + firstOption, () => {
    cy.get("a").contains(firstOption).click()
    cy.url().should("include", "/white-privilege")
  })
  it("Loads second option - " + secondOption, () => {
    cy.get("a").contains(secondOption).click()
    cy.url().should("include", "/why-care")
  })
})

describe("White Privilege page", () => {
  beforeEach(() => {
    cy.visit("/white-privilege").get("main").injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
  it("Does not contain a logo", () => {
    cy.get("picture").should("not.exist")
  })
  it("Has a title", () => {
    cy.get("h1").should("exist")
  })
  it("Has a next button", () => {
    cy.get("a").contains("next").should("exist").click()
    cy.url().should("include", "/why-care")
  })
})

describe("Why Care? page", () => {
  const firstOption = "Why should I"
  const secondOption = "damning"

  beforeEach(() => {
    cy.visit("/why-care").get("main").injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
  it("Does not contain a logo", () => {
    cy.get("picture").should("not.exist")
  })
  it("Has a title", () => {
    cy.get("h1").should("exist")
  })
  it("Has two option buttons", () => {
    cy.contains("a", firstOption).should("exist")
    cy.contains("a", secondOption).should("exist")
  })
  it("Loads first option - who cares?", () => {
    cy.contains("a", firstOption).click()
    cy.url().should("include", "/who-cares")
  })
  it("Loads second option - what can I do?", () => {
    cy.contains("a", secondOption).click()
    cy.url().should("include", "/what-to-do")
  })
})

describe("Who Cares? page", () => {
  beforeEach(() => {
    cy.visit("/who-cares").get("main").injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
  it("Does not contain a logo", () => {
    cy.get("picture").should("not.exist")
  })
  it("Has a title", () => {
    cy.get("h1").should("exist")
  })
  it("Has 'next page' button", () => {
    cy.contains("a", "what can I do").should("exist")
  })
  it("Loads 'what can I do' page", () => {
    cy.contains("a", "what can I do").click()
    cy.url().should("include", "/what-to-do")
  })
})

describe("What Can I Do? page", () => {
  beforeEach(() => {
    cy.visit("/what-to-do").get("main").injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
  it("Does not contain a logo", () => {
    cy.get("picture").should("not.exist")
  })
  it("Has a title", () => {
    cy.get("h1").should("exist")
  })
  it("Has three options", () => {
    cy.contains("a", donate).should("exist")
    cy.contains("a", learn).should("exist")
    cy.contains("a", amplify).should("exist")
  })
  it("Loads donate page", () => {
    cy.contains("a", donate).click()
    cy.url().should("include", "/donate")
  })
  it("Loads learn page", () => {
    cy.contains("a", learn).click()
    cy.url().should("include", "/learn")
  })
  it("Loads amplify page", () => {
    cy.contains("a", amplify).click()
    cy.url().should("include", "/amplify")
  })
})

describe("Donate page", () => {
  beforeEach(() => {
    cy.visit("/donate").get("main").injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
  it("Does not contain a logo", () => {
    cy.get("picture").should("not.exist")
  })
  it("Has a title", () => {
    cy.get("h1").should("exist")
  })
  it("Has two options", () => {
    cy.contains("a", donate).should("not.exist")
    cy.contains("a", learn).should("exist")
    cy.contains("a", amplify).should("exist")
  })
  it("Loads learn page", () => {
    cy.contains("a", learn).click()
    cy.url().should("include", "/learn")
  })
  it("Loads amplify page", () => {
    cy.contains("a", amplify).click()
    cy.url().should("include", "/amplify")
  })
})

describe("Learn page", () => {
  beforeEach(() => {
    cy.visit("/learn").get("main").injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
  it("Does not contain a logo", () => {
    cy.get("picture").should("not.exist")
  })
  it("Has a title", () => {
    cy.get("h1").should("exist")
  })
  it("Has two options", () => {
    cy.contains("a", donate).should("exist")
    cy.contains("a", learn).should("not.exist")
    cy.contains("a", amplify).should("exist")
  })
  it("Loads donate page", () => {
    cy.contains("a", donate).click()
    cy.url().should("include", "/donate")
  })
  it("Loads amplify page", () => {
    cy.contains("a", amplify).click()
    cy.url().should("include", "/amplify")
  })
})

describe("Amplify page", () => {
  beforeEach(() => {
    cy.visit("/amplify").get("main").injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
  it("Does not contain a logo", () => {
    cy.get("picture").should("not.exist")
  })
  it("Has a title", () => {
    cy.get("h1").should("exist")
  })
  it("Has two options", () => {
    cy.contains("a", donate).should("exist")
    cy.contains("a", learn).should("exist")
    cy.contains("a", amplify).should("not.exist")
  })
  it("Loads donate page", () => {
    cy.contains("a", donate).click()
    cy.url().should("include", "/donate")
  })
  it("Loads learn page", () => {
    cy.contains("a", learn).click()
    cy.url().should("include", "/learn")
  })
})
