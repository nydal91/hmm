import { XsfarmingPage } from './app.po';

describe('xsfarming App', function() {
  let page: XsfarmingPage;

  beforeEach(() => {
    page = new XsfarmingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
