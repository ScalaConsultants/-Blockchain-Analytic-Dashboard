import React from 'react';
import useFilterVolumeType from './FilterVolumeType-styles';
import { ViewProps } from './types';

const FilterVolumeTypeContainer = ({ type, sort }: ViewProps) => {
  const { PUBLIC_URL } = process.env;
  const { typeDescription } = useFilterVolumeType();
  return (
    <div>
      <span>Volume Type:&nbsp;</span>
      <span className={typeDescription}>
        {type}
        &nbsp;&nbsp;
      </span>
      <span>
        <img src={`${PUBLIC_URL}/icons/down.svg`} onClick={() => sort('desc')} alt="desc"/>
        <img src={`${PUBLIC_URL}/icons/up.svg`} onClick={() => sort('asc')} alt="asc"/>
      </span>
    </div>
  );
};

export default FilterVolumeTypeContainer;
