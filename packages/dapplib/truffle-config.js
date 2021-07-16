require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remember essay idea knife fortune sorry'; 
let testAccounts = [
"0x3455b0ddd896998ab3c03c31a77655fd8914f3af8a25810854d931f1a43f3ccd",
"0x67ffd5d8f884269843f68211a52f5a67496a6e2fe9e8873d01b296f7e7deeff4",
"0x0abf1a5313d27e04ce9f63c0b4974d3c31b1f34bb963a8ed13c6b3b7c10e4c93",
"0x93bfd9ba58a3424c34d7ac5619ecd99b8b64aa38cc9c3e21fff65364ff88ecfe",
"0xc4934a231aa0b2640f25f30ddd2ff8a83f50353434d6926b0da71dac6c50a75c",
"0x18a8f4daaaddd28a0adde1cffaec67caff02150cd6b07553bef30ff8ff2b37ad",
"0xdaf58c2aeba80f52ccc383f581f305185ea51dfce9eff9743c95afe6cccbfe71",
"0x8de9d572ec523bf063a0d25dd662dfd46a1e0bfd2f977ad03a0c35fb32dca004",
"0x14350785b0e5209c6ff946730efb0d20bbfd0c12091ad62a4130385ebbdfc123",
"0x3f1dd60ab94ba02a9c73c67a4bfd699851e2d7bf57c643ca5fb632791622a569"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
            version: '^0.8.0'
        }
    }
};

