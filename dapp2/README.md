# dapp1

### Web3 dAPP to get all balances from given wallet address


* Copy example.env to `.env` and update appropriate values 
* To get *Web3 Api Key* visit [Account Settings](https://admin.moralis.io/account/profile) and check **Keys** tab
```
cp -v example.env .env.local
```

* Install and run using following commands
```
npm install moralis next react react-dom
npm run dev
```

* Using terminal or browser check at http://localhost:3000/native
  
* Using terminal or browser check at http://localhost:3000/api/balances
```
curl -s http://localhost:3000/api/balances | jq
```


Source:
[Using NextJS](https://docs.moralis.io/docs/nextjs-dapp)