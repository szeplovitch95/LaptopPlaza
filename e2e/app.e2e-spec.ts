import { LaptopPlazaProjectPage } from './app.po';

describe('laptop-plaza-project App', () => {
  let page: LaptopPlazaProjectPage;

  beforeEach(() => {
    page = new LaptopPlazaProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
