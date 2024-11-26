```
docker run -it --rm --name happycoin -v "$PWD":/usr/src/app -w /usr/src/app node node happycoin.js
```

```
docker run -it --rm --name happycoin -v "$PWD":/usr/src/app -w /usr/src/app node node happycoin-threads.js
```
