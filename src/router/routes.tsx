import React from 'react';
import { Route } from 'react-router';
import { Container } from '@material-ui/core';
import Transactions from '../containers/Transactions/Transactions';
import Charts from '../containers/Charts/Charts';
import Home from '../containers/Home/Home';
import LiveChart from '../containers/LiveChart/LiveChart';
import LiveChart2 from '../containers/LiveChart2/LiveChart2';
import LineCharts from '../containers/Charts/Line';
import SimpleBarChartDemo from '../containers/customChartsDemos/SimpleBarChartDemo/SimpleBarChartDemo';
import StackedBarChartDemo from '../containers/customChartsDemos/StackedBarChartDemo/StackedBarChartDemo';

export default (): React.ReactElement => {
  const routes = (
    <Container>
      <Route exact path="/" component={Home} />
      <Route exact path="/transactions" component={Transactions} />
      <Route exact path="/charts" component={Charts} />
      <Route exact path="/top-seller" component={LiveChart} />
      <Route exact path="/top-buyer" component={LiveChart2} />
      <Route exact path="/line-chart" component={LineCharts} />
      <Route exact path="/simple-bar-chart-demo" component={SimpleBarChartDemo} />
      <Route exact path="/stacked-bar-chart-demo" component={StackedBarChartDemo} />
    </Container>
  );

  return routes;
};
