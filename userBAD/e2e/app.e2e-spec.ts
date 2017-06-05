import { UserBADPage } from './app.po';

describe('user-bad App', () => {
  let page: UserBADPage;

  beforeEach(() => {
    page = new UserBADPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
