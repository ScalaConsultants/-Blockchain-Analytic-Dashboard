export const colorsArr = ['market', 'private', 'daap', 'fraud'];

export const getTotalWalletsAmounts = (groupingKey: string, blockchain: object[]) =>
  blockchain.reduce((acc: any, next: any): any => {
    const alreadyExist = acc.find(
      (item: any) => item.key === next[groupingKey]
    );
    if (alreadyExist) {
      alreadyExist.value += next.amount;
      return acc;
    }
    const newItem = {
      key: next[groupingKey],
      value: next.amount
    };

    return [...acc, newItem];
  }, []).sort((a: any, b: any) => b.value - a.value);


export const getTotalDataValues = (data: any) => data.reduce((acc: any, next: any) => acc + next.value, 0);

export const getSegmentsData = (data: any, totalDataValue: any, width: any, colors: any) => 
  data.map((item: any, index: any) => ({
    width: (width * (item.value * 100 / totalDataValue) / 100),
    value: item.value * 100 / totalDataValue,
    color: colors[colorsArr[Math.round(Math.random() * 3)]],
    isOthers: (item.value * 100 / totalDataValue) < 0.1,
    key: index
  }));

