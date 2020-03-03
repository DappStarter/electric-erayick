require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remain purity gesture slender flee stuff'; 
let testAccounts = [
"0xe7c48580b4038bc3892ceeb5d910e909040fb8fbc4ce9d51d433579a9ac5dbda",
"0xd464ada0309396aa006f9f94edbf3c027c98f562c7f08897dd2bbb2bbde6ae22",
"0xd9ec51f36547d4975a78b55198c9de972bdc2e3850240636befdf731528b45c2",
"0xff4ebfc4c8e51a2b32d331e90044c28ea2ecb9dd2c44a04007bedd613c8a7b4f",
"0x9f552b8f62dd0ac98a364e8b191cf8461d65db1a5d79191043552e7b6e0e4f9a",
"0x62641cc851ee355a1e1d251267fa6379dc466f943e809d6d2e26cb1cbd96fb99",
"0xf8a5f185136d04cb9f15b5bdd1929d956c0f0d4da1bd2fa5e8ba21318ed062c8",
"0xfbb6e79009f3d1987737603a4443040a9619c283bc188ed542ee4c0d2d6be000",
"0x9a2a72854b042a9926d076d16e2bea14f6975efc82e1577d2408ed10a64f1be5",
"0xeefb479315e549ebab48b97e985099936b546b00ab26f97cacd3578f06df2cc9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
