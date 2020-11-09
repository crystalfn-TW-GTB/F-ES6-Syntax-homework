const inject = (items, sections) => {
  const resultArray = [];
  items.forEach((item, index) => {
    sections.forEach(section => {
      if (section.index === index) {
        resultArray.push(section.content);
      }
    });
    resultArray.push(item);
  });
  return resultArray;
}
export { inject };
