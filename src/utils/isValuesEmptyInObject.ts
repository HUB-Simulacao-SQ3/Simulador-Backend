
function isValuesEmptyInObject<T = any>(_object: T, ignoreProperties?: string[]) {
  const array = Object.keys(_object as any)?.filter(item => {
    if (ignoreProperties?.find(value => item === value)) {
      return false;
    }
    return ((_object as any)[item] === '' || (_object as any)[item] === null || (_object as any)[item] === undefined)
  });
  return {
    isNull: array.length > 0,
    values: array
  };
}

export { isValuesEmptyInObject }