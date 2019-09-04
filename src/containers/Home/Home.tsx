import React from "react";
import DashboardBox from "./../../components/dashboardBox/DashboardBox";
import Grid from '@material-ui/core/Grid';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EqualizerIcon from '@material-ui/icons/Equalizer';

import { menuItems } from "./../../constant";

const icons2 = <EqualizerIcon/>;
const icons = <ExitToAppIcon/>;

const Home = (): React.ReactElement => {
  const MenuItems = menuItems;
  const dashboardBoxGenerator = (boxes:any) => {
    return boxes.map((item: { icons: any; name: string; route: string; }) => {
      return <Grid item xs={12} sm={4}><DashboardBox icon={item.icons} name={item.name} route={item.route}/></Grid>
    });
  };
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
        {dashboardBoxGenerator(MenuItems)}
      </Grid>
    </div>
  );
};
export default Home;
