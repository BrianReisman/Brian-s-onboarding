
describe('Brian makes and takes tests!', ()=>{
  beforeEach( ()=>{
    cy.visit('http://localhost:3000/')
  })


  //grabbing elements
  const name = () => cy.get('#name')
  const email = () => cy.get('#email')
  const password = () => cy.get('#password')
  const terms = () => cy.get('#terms')
  const subBtn = () => cy.get('button[type=submit]')

  it('sanity check', ()=>{
    expect(5).to.equal(5);
  })

  it('Are we all here??', ()=>{
    name().should('exist')
    email().should('exist')
    password().should('exist')
    terms().should('exist')
    subBtn().should('exist')
  })

  // it('gGet the Name input and type a name in it.', () => {
  //   name().type('Brian').should('have.value', 'Brian')
  // })
  // // it('Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)', () => {}) //TODO done above

  // it('gGet the Email input and type an email address in it', () => {
  //   email().type('brian@brian.com')
  // })

  // it('gGet the password input and type a password in it', () => {
  //   password().type('thisisaPASSword')})

  // it('Set up a test that will check to see if a user can check the terms of service box', () => {
  //   terms().check()
  // })

  // it('Check to see if a user can submit the form data', () => {
  //   name().type('Brian').should('have.value', 'Brian')
  //   email().type('brian@brian.com')
  //   password().type('thisisaPASSword')
  //   terms().check()
  //   subBtn().click()
  // })

  it('Check for form validation if an input is left empty', () => {
    email().type('bri')
    email().type('lkjh')
    
  })



})
