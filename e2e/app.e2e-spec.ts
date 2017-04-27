import { FilmServicePage } from './app.po';

describe('film-service App', () => {
  let page: FilmServicePage;

  beforeEach(() => {
    page = new FilmServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
