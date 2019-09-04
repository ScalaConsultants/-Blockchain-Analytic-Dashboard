import React from "react";
import DashboardBox from "./../../components/dashboardBox/DashboardBox";
import Grid from '@material-ui/core/Grid';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const icons2 = <EqualizerIcon/>;
const icons = <ExitToAppIcon/>;

const Home = (): React.ReactElement => {
  return (
    <div
      style={{
        textAlign: "center",
        margin:"1rem"
      }}
    >
      <h1>Blockchain Analytic Dashboard</h1>
      <h3><a href="https://github.com/ScalaConsultants/Blockchain-Analytic-Dashboard" target="_blank">https://github.com/ScalaConsultants/Blockchain-Analytic-Dashboard</a></h3>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={4}><DashboardBox icon={icons} title="AAAA" route="/"/></Grid>
        <Grid item xs={12} sm={4}><DashboardBox icon={icons} title="gggggggggggg" route="/"/></Grid>
        <Grid item xs={12} sm={4}><DashboardBox icon={icons} title="tt" route="/"/></Grid>
      </Grid>
    </div>
  );
};
export default Home;
