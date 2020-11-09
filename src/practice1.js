const parseData = (input) => {
  const { data, column } = input;
  const keys = column.map(item => item.name);
  return data.map((item) => createObject(keys, item));
};

function createObject(keys, values) {
  const object = {};
  keys.forEach((key, index) => {
    object[key] = values[index];
  });
  return object;
}

export { parseData };
