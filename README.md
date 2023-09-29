# Connecting frontend to the dapps

**Important point** : Whenever we have web3 wallet installed like metamask , phantom etc. We will have the ethereum or solana object stuck to our
javascript. This can be used by _window.ethereum_ or _window.solana_
If we want to sign an transaction , we need to make a request for them to approve the transaction to go through , which can be accessed by the
window object

All of our blockchain have an RPC URL built into the wallet , whenever we are connecting to the blockchain , we are actually calling the
RPC URL the same way that we do it on _HARDHAT OR FOUNDRY_

When we connect our wallet , we are connecting to the RPC URL

### Ethereum JSON_RPC Methods

#### Important methods from this API

1. eth_accounts
2. eth_call
3. eth_getBalance
4. eth_sign
