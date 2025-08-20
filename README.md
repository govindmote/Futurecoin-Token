# FutureCoin (FTR) – ERC‑20 for Polygon Mumbai & BNB Testnet

Production‑ready Hardhat project to deploy a free **testnet** token.

## Token Defaults
- **Name:** FutureCoin
- **Symbol:** FTR
- **Decimals:** 18
- **Initial Supply:** passed at deploy time (e.g., 1_000_000)

---

## 1) Install
```bash
npm i
cp .env.example .env   # fill values
```

## 2) Get Testnet Funds
- **Polygon Mumbai:** https://faucet.polygon.technology
- **BNB Testnet:** https://testnet.binance.org/faucet-smart

## 3) Compile
```bash
npm run compile
```

## 4) Deploy
Edit `scripts/deploy.js` to set your desired initial supply and (optional) token name/symbol.

```bash
npm run deploy:mumbai
# or
npm run deploy:bscTestnet
```

The script will print the **deployer**, **contract address**, and write it into `addresses/<network>.json`.

## 5) Verify (optional)
```bash
npx hardhat verify --network mumbai <CONTRACT_ADDRESS> "1000000" "FutureCoin" "FTR"
npx hardhat verify --network bscTestnet <CONTRACT_ADDRESS> "1000000" "FutureCoin" "FTR"
```

## 6) Add to MetaMask
- Network: Polygon Mumbai (chainId 80001) or BSC Testnet (97)
- Import Token → paste your contract address
- You should see your initial supply in the deployer wallet

## Files
- `contracts/MyToken.sol` – ERC‑20 using OpenZeppelin
- `scripts/deploy.js` – deploy and persist addresses
- `hardhat.config.js` – networks + etherscan config
- `addresses/` – generated contract addresses per network
- `README.md` – this guide

## Security Notes
- This is for **testnets** only.
- Never commit your real private key.
- For mainnet, add access controls, pausability, etc.
