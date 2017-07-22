import { DepannagesPage } from './app.po';

describe('depannages App', () => {
  let page: DepannagesPage;

  beforeEach(() => {
    page = new DepannagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
