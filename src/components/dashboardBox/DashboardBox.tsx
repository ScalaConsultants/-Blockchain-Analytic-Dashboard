import React from "react";
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { IconClassKey } from "@material-ui/core/Icon";

type Props = {
    icon: any, //sprawdzic czy to sie sprawdzi
    title: string,
    route: string
}

const DasshboardBox = ({ icon, title, route }: Props): React.ReactElement => {


    return (
        <Card>
            <CardHeader
                avatar={
                    // <Avatar aria-label="recipe" className={classes.avatar}>R</Avatar>
                    <Avatar aria-label="menu">R</Avatar>
                }
                action={
                    <IconButton
                        href={route}
                        aria-label="Open subpage">
                        <ExitToAppIcon />
                    </IconButton>
                }
                title={title}
                subheader={route}
            />
            <CardContent>
                <Typography gutterBottom> Word of the Day </Typography>
            </CardContent>
        </Card>
    );
};

export default DasshboardBox;