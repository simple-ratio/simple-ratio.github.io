// 最大公约数
function gcd(a, b) {
  if (a === 0) return b
  if (b === 0) return a
  return a % b === 0 ? b : gcd(b, a % b)
}

// 约分
function fractionReduction(arr) {
  let common = arr.reduce((a, b) => {
    return gcd(a, b)
  })
  return arr.map(v => {
    if (common === 0) return 0
    return v / common
  })
}

// 最简整数比形式
export function simplestRatio(arr, symbol = ':') {
  return fractionReduction(arr).join(symbol)
}

// 百分比基准简化形式
export function simpleRatio(arr, symbol = ':') {
  if (arr.length === 0) return ''
  arr = fractionReduction(arr)

  // 0:0直接返回
  let total = arr.reduce((a, b) => a + b, 0)
  if (total === 0) {
    return arr.join(symbol)
  }

  // 有个位数直接返回，比如3:11
  if (arr.some(v => v < 10 && v > 0)) {
    return arr.join(symbol)
  }
  
  let percentArray = arr.map(v => {
    return v / total * 100
  })

  // 极端大比例2.5:97.5，返回1:39, 
  let min = Math.min(...percentArray)
  if (min < 3 && min > 0) {
    return percentArray.map(v => {
      return +Math.round(v / min)
    }).join(symbol)
  }

  // 验证百分数和是否为100%，从最大的数上增减补平
  percentArray = percentArray.map(v => Math.round(v))
  let t = percentArray.reduce((a, b) => a + b, 0)
  let max = Math.max(...percentArray)
  let index = percentArray.indexOf(max)
  if (index > -1) {
    percentArray[index] += 100 - t
  }

  // 百分比再化为最简形式，比如48:52，化简为12:13
  return simplestRatio(percentArray, symbol)
}

export default {
  simpleRatio,
  simplestRatio
}
