import { Block } from '../../../types';

// Loops through an entire array of transactions and sums them up
// by owner
function sumTransactions(blocks: Block[]): any[] {
  const blocksArr = blocks.reduce((acc: any, next: any): any => {
    const foundIndex = acc.findIndex((a: any): any => a.source === next.source);
    if (foundIndex !== -1) {
      acc[foundIndex].transactions++;
    } else {
      next.transactions = 1;
      acc.push(next);
    }

    return acc;
  }, []);

  return blocksArr.sort(
    (a: any, b: any): number => b.transactions - a.transactions
  );
}

export default sumTransactions;
