const Migrations = artifacts.require('Migrations');

module.exports = async function (deployer) {
  await deployer.deploy(Migrations, { from: '0x86948078a2bC9A367DE4c1E24E9E8573f09cF20b' });
};
