export const convertTimeStampToHour = (date: number): number => {
  const newDate = new Date(date);
  const formattedDate = newDate.getHours();
  return formattedDate;
};

export const convertTimeStampToHours = (date: string): string => {
  const newDate = new Date(date);
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  let formattedDate;
  if(minutes < 10) {
    formattedDate = `${hours}:0${minutes}`;
  } else {
    formattedDate = `${hours}:${minutes}`;
  }

  return formattedDate;
};

export const convertTimeStamp = (date: number): string => {
  const newDate = new Date(date);
  const tempDate = `0${newDate.getDate()}`.slice(-2);
  const tempMonth = `0${(newDate.getMonth() + 1)}`.slice(-2);
  const formattedDate = `${tempDate}-${tempMonth}-${newDate.getFullYear()}`;

  return formattedDate
    .split('-')
    .reverse()
    .join('-');
};

export const convertDateArray = (
  dateFrom: string,
  dateTo: string
): string[] => {
  const listDate = [];
  const startDate = dateFrom.toString();
  const endDate = dateTo.toString();
  const dateMove = new Date(startDate);
  let strDate = startDate;

  while (strDate < endDate) {
    strDate = dateMove.toISOString().slice(0, 10);
    listDate.push(strDate);
    dateMove.setDate(dateMove.getDate() + 1);
  }

  return listDate;
};

export const getSelectedDate = (days:any):string => {
  const date = new Date();
  const last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
  const data = last.toJSON().slice(0, 10).replace(/-/g, '-');
  return data.toString();
};
