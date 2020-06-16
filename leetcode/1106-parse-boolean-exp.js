//

/**
 * @param {string} expression
 * @return {boolean}
 */

var parse = (exp) => {
  let inner_exps = [];
  let comma_tracker = 0;
  let last_comma = -1;
  for (let i = 0; i < exp.length; i++) {
    console.log(exp[i]);
    if (exp[i] == "," && comma_tracker == 0) {
      inner_exps.push(exp.slice(last_comma + 1, i));
      last_comma = i;
    }
    if (exp[i] == "(") comma_tracker++;
    if (exp[i] == ")") comma_tracker--;
  }
  inner_exps.push(exp.slice(last_comma + 1, exp.length));
  return inner_exps;
};

var parseBoolExpr = function (expression) {
  if (expression == "t") {
    return true;
  }
  if (expression == "f") {
    return false;
  }
  const first_op = expression[0];
  console.log(first_op);
  if ("|&!".includes(first_op)) {
    let innerExpression = expression.slice(2, expression.length - 1);
    if (first_op == "!") {
      return !parseBoolExpr(innerExpression);
    }
    let innerExps = parse(innerExpression);
    console.log(innerExps);
    let acc = first_op == "|" ? false : true;
    for (let exp of innerExps) {
      if (first_op == "|") {
        acc = acc || parseBoolExpr(exp);
      } else {
        acc = acc && parseBoolExpr(exp);
      }
    }
    return acc;
  }
};

const exp1 = "t";
console.log(parseBoolExpr(exp1) == true);
console.log(parseBoolExpr("f") == false);
console.log(parseBoolExpr("!(t)") == false);
console.log(parseBoolExpr("&(t,f)") == false);
