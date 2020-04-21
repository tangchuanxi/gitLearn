/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(total) {
    // 建立映射
    const SIZE_1 = 1
    const SIZE_5 = 5
    const SIZE_10 = 10
    const SIZE_25 = 25
    let allNum = 0

    while (total >= SIZE_25) {
        total -= SIZE_25
        allNum++
    }
    while (total >= SIZE_10) {
        total -= SIZE_10
        allNum++
    }
    while (total >= SIZE_5) {
        total -= SIZE_5
        allNum++
    }
    while (total >= SIZE_1) {
        total -= SIZE_1
        allNum++
    }
    console.log(`总共需要${allNum}个硬币`)
};

function gcd (num1, num2) {
    return num2 === 0 ? num1 : gcd(num2, num1 % num2); 
}

// hasGroupsSizeX(41)

let map = new Map()
let nums = 0
function steps (n) {
    nums++
    if (n === 1) return 1
    if (n === 2) return 2

    return steps(n-1) + steps(n-2)
}

function stepsMark (n) {
    nums++
    if (n === 1) return 1
    if (n === 2) return 2

    if(map.get(n)){
        return map.get(n)
    }else {
        let val = stepsMark(n-1) + stepsMark(n-2)
        map.set(n, val)
        return val
    }
}


function stepsDyna(n) {
    if (n === 1) return 1
    if (n === 2) return 2

    let a = 1
    let b = 2
    let tmp
    for (let index = 3; index <= n; index++) {
        tmp = a + b;
        a = b
        b = tmp
    }
    return tmp
}
// console.log(stepsMark(50))
// console.log(stepsDyna(50))
// console.log(`计算次数${nums}`)


// 金矿数量 N
// 工人数   W
// 黄金含量 G = []
// 用工数量 P = []

const G = [500, 200, 300, 350, 400]
const P = [5, 3, 4, 3 , 5]

function maxGolden (n, w) {

    // 没有 或者人数不够
    if ((n<1) || w < P[n-1]) return 0

    // 人数够
    if ( (n===1) && (w >= P[n-1])) {
       return G[0]
    }
    // 金矿大于1，人数够
    if (n > 1 && w >= P[n-1]) {
        return Math.max((G[n-1] + maxGolden(n-1, w - P[n-1])) , maxGolden(n-1, w))
    }
    // 金矿大于1，人数不够挖当前矿
    if (n > 1 && w < P[n-1]) {
        return maxGolden(n-1, w)
    }
}

console.log(`最多挖${maxGolden(5, 10)}`)


// 金矿数量 N
// 工人数   W
// 黄金含量 g = []
// 用工数量 p = []
function getMostGold(n, w, g, p) { 
    let preResults = []; 
    let results = []; 
 
    for (let i = 0; i <= w; i++) { 
      preResults[i] = i < p[0] ? 0 : g[0] 
    } 
    // 循环 金矿数量 
    for (let i = 0; i < n; i++) { 
      // 循环 工人数 
      for (let j = 0; j <= w; j++) { 
        if (j < p[i]) { 
          results[j] = preResults[j] 
        } else { 
          results[j] = Math.max(preResults[j], preResults[j - p[i]] + g[i]); 
        } 
      } 
      for(let j=0; j<= w; j++) { 
            preResults[j] = results[j]; 
        } 
    } 
    return results[w] 
  }

console.log(`11最多挖${getMostGold(5, 10, G, P)}`)