import classnames from "classnames";
import objectAssign from "object-assign";

function longlong(longlongArg) {
  return classnames(longlongArg);
}

console.log(longlong());

console.log(objectAssign({ foo: 0 }, { bar: 1 }));
