import { TestMatPage } from './app.po';

describe('test-mat App', function() {
  let page: TestMatPage;

  beforeEach(() => {
    page = new TestMatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
