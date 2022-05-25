const Immutable = require('immutable');
const obj = {
     fear: true,
     smell: -1033575916.9145899,
     wall: false,
     thing: -914767132
};
const map = Immutable.fromJS(obj);
console.log(map);
