import { IdesmacPage } from './app.po';

describe('idesmac App', () => {
  let page: IdesmacPage;

  beforeEach(() => {
    page = new IdesmacPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
