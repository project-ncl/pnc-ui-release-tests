/* eslint no-process-env: "off" */ 
exports.seleniumAddress = process.env.npm_package_config_seleniumAddress;
exports.seleniumServerJar = process.env.npm_package_config_seleniumServerJar;
exports.chromeDriver = process.env.npm_package_config_chromeDriver;

exports.pncUiAddress = process.env.npm_package_config_pncUiAddress;
exports.pncRestAddress = process.env.pncRestAddress;

exports.pncUser = process.env.pncUser;
exports.pncPassword = process.env.pncPassword;