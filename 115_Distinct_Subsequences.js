/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
 let  getReg = t=> new RegExp(t.split('').join('.*'))
 if(!s.match(getReg(t)) return 0
}

