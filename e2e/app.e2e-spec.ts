import { RVARiverPirateBootstrapPage } from './app.po';

describe('rva-river-pirate-bootstrap App', () => {
  let page: RVARiverPirateBootstrapPage;

  beforeEach(() => {
    page = new RVARiverPirateBootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
