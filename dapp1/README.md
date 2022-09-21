# dapp1

### Web3 dAPP to get all balances from given wallet address


* Copy example.env to `.env` and update appropriate values 
* To get *Web3 Api Key* visit [Account Settings](https://admin.moralis.io/account/profile) and check **Keys** tab
```
cp -v example.env .env
```

* Install and run using following commands
```
npm install moralis express
npm install dotenv --save
npm run start
```

* Using terminal or browser check at http://localhost:3000/demo
```
curl http://localhost:3000/demo | jq .
```


Source:
[Using NodeJS](https://docs.moralis.io/docs/nodejs-dapp-from-scratch)