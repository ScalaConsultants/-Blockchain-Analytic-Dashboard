import React from 'react';
import FilterVolumeTypeContainer from './FilterVolumeType-container';

const types = {
  relative: 'Relative'
};

const FilterVolumeTypeRedux = () => {
  const sort = (direction: string): void => {
    // TODO
    console.log('sort', direction);
  };

  return (
    <FilterVolumeTypeContainer
      sort={sort}
      type={types.relative}
    />
  );
};

export default FilterVolumeTypeRedux;
