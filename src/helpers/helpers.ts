export const stableSort = (array: any, cmp: any): any => {
  const stabilizedThis = array.map((el: any, index: any) => [el, index]);
  stabilizedThis.sort((a: any, b: any) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el: any) => el[0]);
};

export const desc = (a: any, b: any, orderBy: any) => {
  if (!b[orderBy] || !a[orderBy]) return 0;

  const aVal = typeof a[orderBy] === 'string' ? a[orderBy].toLowerCase() : a[orderBy];
  const bVal = typeof b[orderBy] === 'string' ? b[orderBy].toLowerCase() : b[orderBy];

  if (bVal < aVal) {
    return -1;
  }
  if (bVal > aVal) {
    return 1;
  }
  return 0;
};

export const getSorting = (order: any, orderBy: any) =>
  (order === 'desc' ? (a: any, b: any) => desc(a, b, orderBy) : (a: any, b: any) => -desc(a, b, orderBy));

export const timestampToDate = (timestamp: number) => {
  const fullDate = new Date(timestamp).toISOString().substr(0, 19);

  const date = fullDate.slice(0, 10);
  const time = fullDate.slice(11, -3);

  return `${time}-${date}`;
};
