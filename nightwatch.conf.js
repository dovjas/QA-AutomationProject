module.exports = {
  src_folders: ['tests'],
  page_objects_path: 'pageObjects',
  webdriver: {
    start_process: true,
    port: 4444
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome'
      },
      webdriver: { server_path: require('chromedriver').path }
    }
  }
};