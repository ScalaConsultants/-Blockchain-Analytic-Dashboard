import React, { useState } from 'react';
import CustomChart from '../../components/customCharts/CustomChart';

const CustomChartView = () => {
  const [chart1, setChart1] = useState(200);
  const [chart2, setChart2] = useState(30);

  return (
    <div>
      <CustomChart data={[chart1, chart2]}/>
      <input
        type="number"
        value={chart1}
        onChange={e => setChart1(parseInt(e.target.value, 10))}
      />
      <input
        type="number"
        value={chart2}
        onChange={e => setChart2(parseInt(e.target.value, 10))}
      />
    </div>
  );
};

export default CustomChartView;
