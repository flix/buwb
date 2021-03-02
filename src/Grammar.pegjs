// https://pegjs.org/online
// compile with:
// $ pegjs -o Parser.js Grammar.pegjs

Conjunction
  = head:Disjunction tail:(_ ("||" / "or" / "∨") _ Disjunction)* {
      return tail.reduce(function(result, element) {
        if (element[1] === "||") { return {type: 'OR', f1: result, f2: element[3]}; }
        if (element[1] === "or") { return {type: 'OR', f1: result, f2: element[3]}; }
        if (element[1] === "∨")  { return {type: 'OR', f1: result, f2: element[3]}; }

      }, head);
    }

Disjunction
  = head:Factor tail:(_ ("&&" / "and" / "∧") _ Factor)* {
      return tail.reduce(function(result, element) {
        if (element[1] === "&&")  { return {type: 'AND', f1: result, f2: element[3]}; }
        if (element[1] === "and") { return {type: 'AND', f1: result, f2: element[3]}; }
        if (element[1] === "∧")   { return {type: 'AND', f1: result, f2: element[3]}; }
      }, head);
    }

Factor
  = "(" _ expr:Conjunction _ ")" { return expr; }
  / "not" _  expr:Factor         { return {type: 'NOT', f: expr}; }
  / "neg" _  expr:Factor         { return {type: 'NOT', f: expr}; }
  / "¬"   _  expr:Factor         { return {type: 'NOT', f: expr}; }
  / LitOrVar

LitOrVar "literal or variable"
  = _ "true"                { return {type: 'TRUE'}; }
  / _ "false"               { return {type: 'FALSE'}; }
  / _ [a-z][a-z0-9]*        { return {type: 'VAR', name: text()};  }

_ "whitespace"
  = [ \t\n\r]*
