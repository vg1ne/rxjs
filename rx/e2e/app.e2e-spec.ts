import { RxPage } from './app.po';

describe('rx App', () => {
  let page: RxPage;

  beforeEach(() => {
    page = new RxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
