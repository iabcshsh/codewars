class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
 
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}

const stack = new Stack();
let stringMode = false;

function interpret(code) {
    var output = "";
    let arr = code.split('\n')
    let i = 0, j = 0;
    op = '>';
    console.log(code);
    console.log('----------------------------------------------------')
    while (op !== '@' && j< arr[i].length) {
        if (op == '>') {
            [i, j, op, output,arr] = dodo(arr[i][j], i, j, op, output, stack,arr)
            if (op == '>') {
                j++;
            }
        } else if (op == '<') {
            [i, j, op, output,arr] = dodo(arr[i][j], i, j, op, output, stack,arr)
            if (op == '<') {
                j--;
            }
        } else if (op == 'v') {
            [i, j, op, output,arr] = dodo(arr[i][j], i, j, op, output, stack,arr)
            if (op == 'v') {
                i++;
            }
        } else if (op == '^') {
            [i, j, op, output,arr] = dodo(arr[i][j], i, j, op, output, stack,arr)
            if (op == '^') {
                i--;
            }
        }
    }
    console.log(output)
    return output;
}
function dodo(c, i, j, op, ou, stack,arr) {
    let a, b;
    let y,x,v;
    if (stringMode) {
        if (c === '"') {
            stringMode = false;
        } else {
            stack.push(c.charCodeAt(0));
        }
    } else {
        switch (c) {
            case 'g':
                y = stack.pop();
                 x = stack.pop();
                stack.push(arr[y][x].charCodeAt(0));
                break;
            case 'p':
                y = stack.pop();
                x = stack.pop();
                v= stack.pop();
                var str = arr[y]; 
                var updatedStr = str.substring(0, x) + String.fromCharCode(v) + str.substring(x + 1); // Create a new string with the updated character
                arr[y] = updatedStr; // Assign the updated string back to the array
                // console.log(String.fromCharCode(v));
                // console.log(arr[y][x])
                // console.log(arr)
                break;
            case '>':
                op = '>';
                break;
            case '<':
                op = '<';
                break;
            case '^':
                op = '^';
                break;
            case 'v':
                op = 'v';
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                stack.push(parseInt(c))
                break;
            case '+':
                a = stack.pop();
                b = stack.pop();
                stack.push(a+b);
                break;
            case '-':
                a = stack.pop();
                b = stack.pop();
                stack.push(b-a);
                break;
            case '*':
                a = stack.pop();
                b = stack.pop();
                stack.push(a*b);
                break;
            case '/':
                a = stack.pop();
                b = stack.pop();
                stack.push(Math.floor(b/a));
                break;
            case '%':
                a = stack.pop();
                b = stack.pop();
                stack.push((b%a));
                break;
            case '!':
                a = stack.pop();
                if (a === 0) {
                    stack.push(1);
                } else {
                    stack.push(0);
                }
                break;
            case '`':
                a = stack.pop();
                b = stack.pop();
                if (b>a) {
                    stack.push(1);
                } else {
                    stack.push(0);
                }
                break;
            case '_':
                a = stack.pop();
                if (a === 0) {
                    op = '>'
                    j++;
                } else {
                    op = '<';
                    j--;
                }
                break;
            case '|':
                a = stack.pop();
                if (a == 0) {
                    op = 'v'
                    i++;
                } else {
                    op = '^';
                    i--;
                }
                break;
            case ':':
                a = stack.peek();
                if (a === 'Stack is empty') {
                    stack.push(0)
                } else {
                    stack.push(a)
                }
                break;
            case '.':
                a = stack.pop();
                ou += a + ""
                break;
            case '@':
                op = '@'
                break;
            case ' ':
                break;
            case '?':
                let oper = ['>', '<', '^', 'v']
                let pos =Math.floor(Math.random()*4)
                let pop =op;
                op = oper[pos];

                if (op === '>' && pop != op) {
                    j++;
                } else if (op === '<' && pop != op) {
                    j--;
                } else if (op === '^' && pop != op) {
                    i--;
                } else if (op === 'v' && pop != op) {
                    i++
                }
                break;
         
            case '$':
                stack.pop();
                break;
            case ',':
                a = stack.pop();
                ou += String.fromCharCode(a)
                break;
            case '#':

                if (op === '>') {
                    j++;
                } else if (op === '<') {
                    j--;
                }
                else if (op === '^') {
                    i--;
                } else {
                    i++;
                }
                break;
            case '"':
                stringMode = true;
                break;
            case '\\':
                a=stack.pop();
                if(stack.peek()==="Stack is empty"){
                    stack.push(0)
                }
                b=stack.pop();
                stack.push(a);
                stack.push(b);
                break;
            default:
                break;              
        }
    }

    return [i, j, op, ou,arr]
}

// interpret('>987v>.v\nv456<  :\n>321 ^ _@')
// interpret('987654321@')
// interpret('>25*"!dlroW olleH":v\n                v:,_@\n                >  ^')
// interpret('08>:1-:v v *_$.@ \n  ^    _$>\\:^')        
// interpret('01->1# +# :# 0# g# ,# :# 5# 8# *# 4# +# -# _@');
// interpret('2>:3g" "-!v\\  g30          <\n |!`"&":+1_:.:03p>03g+:"&"`|\n @               ^  p3\\" ":<\n2 2345678901234567890123456789012345678')
interpret('v@.<\n >1^\n>?<^\n >2^')