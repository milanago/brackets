module.exports = function check(str, bracketsConfig) {
const open = ['(', '{', '[', '0', '1', '3', '5', '7', '8']
const pair = {
   [')'] : '(',
   ['}']: '{',
   [']']: '[',
   ['|']: '0',
   ['2']: '1',
   ['4']: '3',
   ['6']: '5',
   ['8']: '8',
}
let string = str;
for(let j = 0; j < str.length; j+=2) {
   string = str.replace('|', '0')
}

let stack = [];
for(let i = 0; i < str.length; i++) {
   let current = string[i];
   if(open.includes(current)) {
       stack.push(current)
       } else {
           if(stack.length === 0) {
               return false
           }
           let top = stack[stack.length - 1]
           if(pair[current] === top) {
               stack.pop()
           } else {
               return false
           }
       }
   } return stack.length === 0;
}