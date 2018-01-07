import { NodePortfolioPage } from './app.po';

describe('node-portfolio App', () => {
  let page: NodePortfolioPage;

  beforeEach(() => {
    page = new NodePortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
