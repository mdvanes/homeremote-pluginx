describe('homeremote: StreamPlayer component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=streamplayer--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to homeremote!');
    });
});
