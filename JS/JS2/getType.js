export default getType = data => {
  return Object.prototype.toString.call(data).slice(8, -1);
};
