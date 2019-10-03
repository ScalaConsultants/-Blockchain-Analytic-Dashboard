import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const lineChartContainerStyle = makeStyles((theme: Theme) => createStyles({
  lineChartContainer: {
    height: 400,
    background: 'linear-gradient(193.66deg, rgba(37, 45, 72, 0) 49.65%, #252D48 100%)',
    padding: 10,
    borderRadius: 5
  }
}));


export const chartLineOptions = {
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      gridLines: {
        color: 'rgb(163,167,176,0.1)'
      },
      ticks: {
        maxTicksLimit: 10,
        fontColor: 'rgb(163,167,176,0.8)', // this here
      },
    }],
    yAxes: [{
      gridLines: {
        color: 'rgb(163,167,176,0.1)'
      },
      ticks: {
        maxTicksLimit: 10,
        fontColor: 'rgb(163,167,176,0.8)',
      },
    }]
  }
}

export const chartLineData = (data: number[], labels:string[]) => {
  return {
    labels: labels,
    datasets: [
      {
        label: 'ETH',
        backgroundColor: 'rgba(255,99,132,0.0)',
        borderColor: 'rgba(107,94,233,0.5)',
        borderWidth: 4,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data,
        lineTension: 0,
      }
    ]
  }
}