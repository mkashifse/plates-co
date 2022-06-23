
export const truncate = (number, index = 2) => {
  return +number
    .toString()
    .slice(0, number.toString().indexOf(".") + (index + 1));
};


