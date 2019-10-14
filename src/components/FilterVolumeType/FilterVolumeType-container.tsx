import React from 'react';
import useFilterVolumeType from "./FilterVolumeType-styles";

const types = {
  relative: 'Relative'
};

const FilterVolumeTypeContainer = () => {
  const { typeDescription } = useFilterVolumeType();

  return (
    <>
      <span>Volume Type:&nbsp;</span>
      <span className={typeDescription}>{types.relative}&nbsp;&nbsp;</span>
      <span>
        <img src="./icons/down.svg" alt="down"/>
        <img src="./icons/up.svg" alt="up"/>
      </span>
    </>
  );
};

export default FilterVolumeTypeContainer;
