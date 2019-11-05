const setTodayDate = () => {
  const date = new Date();
  const day: string | number = date.getDate();
  const month: string | number = date.getMonth()+1;
  const year: string | number = date.getFullYear(); 
  
  return {
    day: day,
    month: month,
    year: year
  }
}

const formatDate = (date: number | string) =>  date < 10 ? (date = '0' + date) : date; 

export const setDateToday = () => {
  let day: string | number = setTodayDate().day;
  let month: string | number = setTodayDate().month; 
  return formatDate(day) + '.' + formatDate(month);
}

export const setDateYesterday = () => {
  let day: string | number = setTodayDate().day;
  let month: string | number = setTodayDate().month;
  let year: string | number = setTodayDate().year; 
  
  if (day === 1) {
    month === 1 ? month = 12 : month--;
    (month === 4 || month === 6 || month === 9 || month === 11) ? (day = 30) :
    (month === 2 && ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? (day = 29) : 
    month === 2 ? (day = 28) : (day = 31);
  } else {
    day--;
  }

  return formatDate(day) + '.' + formatDate(month);
}
