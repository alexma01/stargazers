describe('E2" Tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have home screen', async () => {
    await expect(element(by.id('homescreen'))).toBeVisible();
  });

  it('should show loading after insert owner and repository', async () => {
    await element(by.id('ownerInput')).replaceText('reactjs');
    await element(by.id('repositoryInput')).replaceText('reactjs.org');
    await expect(element(by.id('StargazersList'))).toBeVisible();
  });

  it('should have home screen', async () => {
    await element(by.id('ownerInput')).replaceText('ffefefe');
    await element(by.id('repositoryInput')).replaceText('ioefefef');
    await expect(element(by.id('StargazersList'))).not.toBeVisible();
  });
});
