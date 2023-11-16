# 使用文档

## 基本使用，用于求得对于用户友好的大致比例
```js
import { simpleRatio } from 'simple-ratio'
let ratio = simpleRetio([155, 544])
console.log(ratio) // 11:39
```

## 设置比例分割符
```js
import { simpleRatio } from 'simple-ratio'
let ratio = simpleRetio([2, 4], '/')
console.log(ratio) // 1/2
```

## 求最简整数比（彼此互质）
```js
import { simplestRatio } from 'simple-ratio'
let ratio = simplestRatio([155, 545])
console.log(ratio) //31:109
```
