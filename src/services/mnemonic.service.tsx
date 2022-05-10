const bip39 = require('bip39');

const generateBIP39Mnemonic = () => {
  var code = bip39.generateMnemonic();
  return code;
};

const validateBIP39Mnemonic = (mnemonic: string) => {
  var valid = bip39.validateMnemonic(mnemonic);
  return valid;
};

export {generateBIP39Mnemonic, validateBIP39Mnemonic};