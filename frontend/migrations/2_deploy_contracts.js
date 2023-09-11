const Will = artifacts.require('Will');

module.exports = async function (deployer) {
  await deployer
    .deploy(Will)
    // Option 2) Console log the address:
    .then(() => console.log(Will.address));
};
