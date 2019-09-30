import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const lineChartContainerStyle = makeStyles((theme: Theme) => createStyles({
    lineChartContainer: {
        height: 400,
        background: 'linear-gradient(193.66deg, rgba(37, 45, 72, 0) 49.65%, #252D48 100%)',
        padding: 10,
        borderRadius: 5
  }
}));