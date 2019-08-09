module.exports = {
  "src_folders" : ["tests"],

  "webdriver": {
    "start_process" : true,
    "server_path": "./node_modules/geckodriver/geckodriver.exe",
    "cli_args": [
      "--log", "debug"
    ],
    "port": 4444
  },

  "test_settings" : {
    "default" : {
      "desiredCapabilities": {
        "browserName" : "firefox",
        "acceptInsecureCerts": true
      }
    }
  }
};