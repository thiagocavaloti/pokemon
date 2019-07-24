export const removeDuplicateObjectsFromArray = (arrayOfObjects) => {
  let list = arrayOfObjects;
  list = list.reduce((accumulator, thing) => {
    if (!accumulator.filter((duplicate) => thing.name === duplicate.name)[0]) {
      accumulator.push(thing);
    }
    return accumulator;
  }, []);

  return list;
};

export const findPropertyNameByRegex = (obj, filter) => {
  const keys = [];
  Object.keys(obj).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key) && filter.test(key)) {
      keys.push(key);
    }
  });
  return keys[0];
};

export const isEmpty = (obj) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) { return false; }
    }
    return true;
};



export const getJsonParse = (string, keys) => {
  if (string) {
    const parsed = JSON.parse(string);
    if (!keys) {
      return parsed;
    }
  }
};


export function getUrlParams(search) {
  const hashes = search.slice(search.indexOf('?') + 1).split('&');
  return hashes.reduce((params, hash) => {
    const [key, val] = hash.split('=');
    return Object.assign(params, { [key]: decodeURIComponent(val) });
  }, {});
}
