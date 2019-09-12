import React from "react";
import DashboardBox from "./../../components/dashboardBox/DashboardBox";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

import { menuItems } from "./../../constant";
import { MenuItemType } from "../../types";

const useStyles = makeStyles(theme => ({
  containerHome: {
    textAlign: "center",
    margin: "1rem"
  },
  dashboardCard: {
    '& > div:first-child ': {
      height: "100%",
      '& > div:first-child':{
        height: "100%"
      }
    }

  }
}));

const Home = (): React.ReactElement => {
  const MenuItems = menuItems;
  const classes = useStyles();

  const renderDashboardBox = (boxes: MenuItemType []):  JSX.Element [] => {
    return boxes.map((item: MenuItemType): JSX.Element =>
      item.name !== 'Home'
        ?  <Grid key={item.name} className={classes.dashboardCard} item xs={12} sm={6} md={4} >
          <DashboardBox icon={item.icon} name={item.name} route={item.route} description={item.description} />
        </Grid>
        : <div key='Home'/>
    );
  };

  return (
    <div className="classes.containerHome">
      <h1>Blockchain Analytic Dashboard</h1>
      <h3>
        <a
          href="https://github.com/ScalaConsultants/Blockchain-Analytic-Dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/ScalaConsultants/Blockchain-Analytic-Dashboard
        </a>
      </h3>
      <Grid container spacing={3} justify="center">
        {renderDashboardBox(MenuItems)}
      </Grid>
    </div>
  );
};
export default Home;
