const inject = (items, sections) => {
  const resultArray = [...items];
  sections.sort((item1, item2) => item2.index - item1.index);
  sections.forEach((item) => {
    resultArray.splice(item.index, 0, item.content);
  })
  return resultArray;
}
export { inject };
