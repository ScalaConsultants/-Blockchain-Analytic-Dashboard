import React from "react";
import { Route } from "react-router";
import Transactions from "../containers/Transactions/Transactions";
import Charts from "../containers/Charts/Charts";
import LineCharts from "../containers/Charts/Line";
import Home from "../containers/Home/Home";
import LiveChart from "../containers/LiveChart/LiveChart";
import LiveChart2 from "../containers/LiveChart2/LiveChart2";
import Treemap from "../containers/Treemap/Treemap";
import SimpleBarChartDemo from "../containers/customChartsDemos/SimpleBarChartDemo/SimpleBarChartDemo";
import StackedBarChartDemo from "../containers/customChartsDemos/StackedBarChartDemo/StackedBarChartDemo";
import { Container } from "@material-ui/core";

export default (): React.ReactElement => {
  let routes = (
    <Container>
      <Route exact path="/" component={Home} />
      <Route exact path="/transactions" component={Transactions} />
      <Route exact path="/charts" component={Charts} />
      <Route exact path="/treemap" component={Treemap} />

      <Route exact path="/top-seller" component={LiveChart} />
      <Route exact path="/top-buyer" component={LiveChart2} />
      <Route exact path="/line-chart" component={LineCharts} />
      <Route exact path="/simple-bar-chart-demo" component={SimpleBarChartDemo} />
      <Route exact path="/stacked-bar-chart-demo" component={StackedBarChartDemo} />
    </Container>
  );

  return routes;
};
