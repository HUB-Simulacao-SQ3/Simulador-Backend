
function isValuesEmptyInObject<T = any>(_object: T, ignoreProperties?: string[]) {
  ignoreProperties && ignoreProperties.length > 0 && ignoreProperties?.forEach(_ => delete (_object as any)[_]);
  const array = Object.keys(_object)?.filter((item: any) => ((_object as any)[item] === '' || (_object as any)[item] === null || (_object as any)[item] === undefined));
  return {
    isNull: array.length > 0,
    values: array
  };
}

export { isValuesEmptyInObject }