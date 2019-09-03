import React, { useEffect, useState } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";

import LineChart from "../../components/charts/Line/Line";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';

import { Blockchain, Block, State } from "../../types";
import {
    convertTimeStamp,
    getSelectedDate
} from "./helpers";

const mapState = (state: State): Blockchain => ({
    blokchain: state.tezos.blocks
});

const LineCharts = (): React.ReactElement => {
    const dispatch = useDispatch();
    const { blokchain } = useMappedState(mapState);
    const [dateFrom, setDateFrom] = useState(getSelectedDate(7));
    const [label, setLabel] = useState([
        "19-04-2019",
        "20-04-2019",
        "21-04-2019",
        "22-04-2019"
    ]);
    const [data, setData] = useState([10, 20, 30, 40]);
    const [config, setConfig] = useState({
        chartType: "buyers",
        label: "Amount of the currency",
        title: "Transactions for the selected buyer and day"
    });
    const [select, setSelect] = useState("buyers");
    const [buyer, setBuyer] = useState("buyer");
    const [seller, setSeller] = useState("xyz2");
    const [chartType, setChartType] = useState("buyer");

    const handleBuyerChange = (e: any) => {
        setTimeout(() => setBuyer(e.target.value), 100)
    };

    const filterChart = (blokchain: Block[], chartType: string): void => {
        const labels: any[] = [];
        let elements: number[] = [];

        blokchain.forEach((item: Block): void => {
            const timeStampConverted: string = convertTimeStamp(item.timestamp);

            if (timeStampConverted === dateFrom) {
                switch (chartType) {
                    case "selers":
                        if (item.source == seller) {
                            elements.push(item.amount);
                        }

                        break;
                    case "buyers":
                        if (item.destination == buyer) {
                            elements.push(item.amount);
                        }

                        break;
                    default:
                }
            }
        });
        elements.forEach(() => {
            labels.push(dateFrom);
        });

        setLabel(labels.slice(0, 100));
        setData(elements.slice(0, 100));
        setLoaderFalse();

    };

    const triggerSetDateFrom = (e: React.ChangeEvent<HTMLInputElement>): void => {
        // setLoaderTrue();
        setDateFrom(e.target.value);
    };

    const setLoaderFalse = (): void => {
        dispatch({
            type: "LOADER_STATE",
            show: false
        });
    };

    const setLoaderTrue = (): void => {
        dispatch({
            type: "LOADER_STATE",
            show: true
        });
    };

    const submitChart = () => {
        setLoaderTrue();
        setTimeout(() => filterChart(blokchain, config.chartType), 100);
    }

    const handleChartChange = (e: any): void => {

        setSelect(e.target.value);

        switch (e.target.value) {
            case "selers":
                setConfig({
                    chartType: "selers",
                    label: "Amount of the currency",
                    title: "Transactions for the selected seller and day"
                });
                break;
            case "buyers":
                setConfig({
                    chartType: "buyers",
                    label: "Amount of the currency",
                    title: "Transactions for the selected buyer and day"
                });
                break;
            default:
        }
    };

    useEffect((): void => {
        filterChart(blokchain, config.chartType);

    }, [blokchain]);

    const chartLineData = {
        labels: label,
        datasets: [
            {
                label: config.label,
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: data
            }
        ]
    };

    return (
        <>
            <div>
                <div style={{ marginBottom: "30px", marginTop: "30px" }}>
                    <TextField
                        id="date"
                        label="Select date"
                        type="date"
                        name="dateFrom"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                            e.persist();
                            setTimeout(() => triggerSetDateFrom(e), 100);
                        }}
                        defaultValue={getSelectedDate(7)}
                        style={{ width: "30%" }}
                    />
                    <FormControl style={{ width: "30%" }}>
                        <InputLabel>Select chart</InputLabel>
                        <Select
                            value={select}
                            onChange={(e: any) => {
                                e.persist();
                                setTimeout(() => handleChartChange(e), 100);
                            }}
                        >
                            <MenuItem value="buyers">Buyers</MenuItem>
                            <MenuItem value="selers">Sellers</MenuItem>
                        </Select>
                    </FormControl>
                    {chartType == 'buyer' ?

                    <FormControl style={{ width: "30%" }}>
                        <InputLabel>Select buyer</InputLabel>
                        <Select
                            value={buyer}
                            onChange={(e: any) => {
                                handleBuyerChange(e);
                            }}
                        >
                            <MenuItem value='buyer'>Select buyer</MenuItem>

                            {blokchain.slice(0, 50).map(item => {
                                let prev;
                                if (item.destination != prev) {
                                    prev = item.destination;
                                    return (
                                        <MenuItem value={item.destination}>{item.destination}</MenuItem>
                                    );
                                }
                                return;
                            })}
                        </Select>
                    </FormControl>
                    :

                    <FormControl style={{ width: "30%" }}>
                        <InputLabel>Select seller</InputLabel>
                        <Select
                            value={buyer}
                            onChange={(e: any) => {
                                handleBuyerChange(e);
                            }}
                        >
                            <MenuItem value='buyer'>Select seller</MenuItem>

                            {blokchain.slice(0, 50).map(item => {
                                let prev;
                                if (item.source != prev) {
                                    prev = item.source;
                                    return (
                                        <MenuItem value={item.source}>{item.source}</MenuItem>
                                    );
                                }
                                return;
                            })}
                        </Select>
                    </FormControl>
                    }

                    <Button variant="contained" color="secondary" onClick={(): void => {
                        setTimeout(() => submitChart(), 100);
                    }} style={{ marginLeft: 20, marginTop: 10 }}>
                        Submit
                    </Button>
                </div>

                <h1 style={{ textAlign: "center" }}>{config.title}</h1>
                <LineChart
                    data={chartLineData}
                    width={100}
                    height={100}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
            </div>
        </>
    );
};

export default LineCharts;
