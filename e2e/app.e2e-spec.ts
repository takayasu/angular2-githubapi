import { GithubsearchPage } from './app.po';

describe('githubsearch App', () => {
  let page: GithubsearchPage;

  beforeEach(() => {
    page = new GithubsearchPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
