import { ApptestPage } from './app.po';

describe('apptest App', () => {
  let page: ApptestPage;

  beforeEach(() => {
    page = new ApptestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
