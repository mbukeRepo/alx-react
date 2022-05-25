const { Map } = require('immutable');
const getImmutableObject = (object) => {
  return Map(object);
}
export default getImmutableObject;
