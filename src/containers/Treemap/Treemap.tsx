/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// @ts-ignore
import { ResponsiveTreeMap } from '@nivo/treemap';
import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import {
  getSummedBlockchainByDatasource,
  getBlockchainByDatasource
} from '../../store/reducers/dataSource';
import { sumTransactionsByDatasource } from '../../store/actions/dataSource';

const mapState = (state: any): any => ({
  summedBlocks: getSummedBlockchainByDatasource(state, state.dataSource),
  blocks: getBlockchainByDatasource(state, state.dataSource),
  source: state.dataSource,
  isLoading: state.loader > 0
});

const Treemap = (): React.ReactElement => {
  const { summedBlocks, blocks, source, isLoading } = useMappedState(mapState);
  const dispatch = useDispatch();

  if (isLoading) return <div />;

  const test = summedBlocks.slice(0, 80).map((item: any) => ({
    name: item.source.substring(0, 8),
    loc: item.counter
  }));
  const root = {
    name: 'nivo',
    children: [...test]
  };

  const sumBlocksByOwner = (): void => {
    dispatch(sumTransactionsByDatasource(blocks, source));
  };

  if (!blocks.length) {
    return <div />;
  }

  if (!Object.keys(summedBlocks).length) {
    sumBlocksByOwner();
    return <div />;
  }

  // console.log(summedBlocks);
  return (
    <div style={{ height: '700px' }}>
      <ResponsiveTreeMap
        root={root}
        identity="name"
        value="loc"
        tile="binary"
        innerPadding={3}
        outerPadding={1}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        label="name"
        colors={{ scheme: 'purple_red' }}
        borderWidth={3}
        borderColor={{ from: 'color', modifiers: [['brighter', '1.1']] }}
        labelTextColor="#000000"
        labelSkipSize={25}
        animate
        motionStiffness={90}
        motionDamping={11}
      />
    </div>
  );
};

export default Treemap;
