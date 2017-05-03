import { HerbsAppPage } from './app.po';

describe('herbs-app App', () => {
  let page: HerbsAppPage;

  beforeEach(() => {
    page = new HerbsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
