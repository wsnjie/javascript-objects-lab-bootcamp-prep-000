var recipes = new Object()
function updateObjectWithKeyAndValue(object, key, value){
return Object.assign({}, object, { [key]: value })
}
funcion destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return object[key] = value
}