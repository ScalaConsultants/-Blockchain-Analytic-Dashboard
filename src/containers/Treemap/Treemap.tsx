/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// @ts-ignore
import { ResponsiveTreeMap } from "@nivo/treemap";
import React, { Component } from "react";
import * as BlokchainActions from "../../store/actions/blokchain";
import { useMappedState, useDispatch } from "redux-react-hook";

const mapState = (state:any) => ({
  summedBlocks: state.blokchain.summedBlocks,
  blocks: state.blokchain.blocks
});

const Treemap = () => {
  const { summedBlocks, blocks } = useMappedState(mapState);
  const dispatch = useDispatch();

  const test = summedBlocks.slice(0, 80).map((item:any) => ({
    name: item.source.substring(0, 8),
    loc: item.counter
  }));
  const root = {
    name: "nivo",
    children: [...test]
  };

  const sumBlocksByOwner = () => {
    dispatch({
      type: BlokchainActions.BLOKCHAIN_SUM_TRANSACTIONS,
      payload: {
        blocks
      }
    });
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
    <div style={{ height: "700px" }}>
      <ResponsiveTreeMap
        root={root}
        identity="name"
        value="loc"
        tile="binary"
        innerPadding={3}
        outerPadding={1}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        label="name"
        colors={{ scheme: "purple_red" }}
        borderWidth={3}
        borderColor={{ from: "color", modifiers: [["brighter", "1.1"]] }}
        labelTextColor="#000000"
        labelSkipSize={25}
        animate={true}
        motionStiffness={90}
        motionDamping={11}
      />
    </div>
  );
};

export default Treemap;
