const setTodayDate = (): Record<string, number> => {
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

const formatDate = (date: number | string): string | number =>  date < 10 ? (date = '0' + date) : date; 

export const setDateToday = (): string => {
  let day: string | number = setTodayDate().day;
  let month: string | number = setTodayDate().month; 
  return formatDate(day) + '.' + formatDate(month);
}

export const setDateYesterday = (): string => {
  let day: string | number = setTodayDate().day;
  let month: string | number = setTodayDate().month;
  let year: string | number = setTodayDate().year; 
  
  if (day === 1) {
    month === 1 ? month = 12 : month--;
    (month === 4 || month === 6 || month === 9 || month === 11) ? (day = 30) :
    ((month === 2 && ((year % 4 === 0) && (year % 100 !== 0))) || (year % 400 === 0)) ? (day = 29) : 
    month === 2 ? (day = 28) : (day = 31);
  } else {
    day--;
  }

  return formatDate(day) + '.' + formatDate(month);
}

export const translateTimePeriod = (activeLabel: string[]): string => {
  switch(activeLabel[0].toString()) {
    case('By hour'): 
    return 'BY_1_HOUR';
    case('By 10 minutes'): 
    return 'BY_10_MINUTES';
    case('By minutes'): 
    return 'BY_1_MINUTE';
    default: 
    return 'BY_1_MINUTE'
  }
}

export const setMinValue = (): number =>  Number(setTimeNow() - 24*60*60*1000);
export const setTimeNow = (): number =>  Number(new Date().getTime());
export const convertTimestampToTime = (timestamp: number): string => new Date(timestamp).toISOString().substr(0, 19).slice(11, -3);

export const setStep = (timeStepString: string | undefined = 'BY_1_MINUTE'): number => {
  switch(timeStepString) {
    case('BY_1_HOUR'): return 3600000;
    case('BY_10_MINUTES'): return 600000;
    case('BY_1_MINUTE'): return 60000;
    default: return 60000;
  }
}

export const roundTimeTo10Minutes = (date: Date): number => {
  const round: number = 1000 * 60 * 10;
  const roundedTimestamp: number = new Date(Math.round(date.getTime() / round) * round).getTime();
  return roundedTimestamp;
}
