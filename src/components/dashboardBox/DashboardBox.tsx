import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles";
import { MenuItemType } from "../../types";

const dashboardStyle = makeStyles(theme => ({
    dashboardIcon: {
        paddingBottom: "0px",
        '& svg': {
            fontSize: "4rem",
            marginTop: "1rem"
        }
    },
    card: {
        backgroundColor: "#efefef",
        height: "100%"
    }
}));


const DashboardBox = ({ icon, name, route, description }: MenuItemType): React.ReactElement => {
    const classes = dashboardStyle();
    return (
        <Link underline='none' href={route}>
            <Card className={classes.card}>
                <CardContent className={classes.dashboardIcon}>
                    {icon}
                </CardContent>
                <CardHeader title={name} subheader={description} />
            </Card>
        </Link>
    );
};

export default DashboardBox;