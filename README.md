# react-sample

## quick start

root 直下に`.env`ファイルを作成

```
REACT_APP_AUTH_REGION=<リージョン名>
REACT_APP_AUTH_USER_POOL_ID=<ユーザープールID>
REACT_APP_AUTH_USER_POOL_WEB_CLIENT_ID=<クライアントID>
REACT_APP_AUTH_COOKIE_STORAGE_DOMAIN=localhost //ローカル環境だったらこれでOK
```

docker を起動  
`docker-compose build`  
`docker-compose up`  
`localhost:3000`にアクセス

## mock_server の立ち上げ

`cd mock_server`  
`yarn`  
`yarn start`
