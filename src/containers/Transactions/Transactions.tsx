import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
<<<<<<< HEAD
import TransactionList from './../../components/TransactionList/TransactionList';

const Transactions = (): React.ReactElement => {
=======
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import TableSortLabel from "@material-ui/core/TableSortLabel/TableSortLabel";

import { stableSort, getSorting } from "../../helpers/helpers";

const headerCols = [
  { id: "timestamp", numeric: false, disablePadding: true, label: "Timestamp" },
  { id: "source", numeric: false, disablePadding: false, label: "Source" },
  {
    id: "destination",
    numeric: false,
    disablePadding: false,
    label: "Destination"
  }
];

type Order = "asc" | "desc";
type OrderBy = string;

const mapState = (state: any) => ({
  blokchain: state.tezos.blocks
});

const Transactions = (): React.ReactElement => {
  // const dispatch = useDispatch();
  const { blokchain } = useMappedState(mapState);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<OrderBy>("name");

  const handleRequestSort = (event: any, property: any) => {
    if (orderBy === property && order === "desc") {
      setOrder("asc");
    } else if (orderBy === property && order === "asc") {
      setOrder("desc");
    }
    setOrderBy(property);
  };

  const createSortHandler = (property: any) => (event: any) => {
    handleRequestSort(event, property);
  };

  const timestampToDate = (timestamp: number) => {
    const newDate = new Date(timestamp);
    const formattedDate =
      ("0" + newDate.getDate()).slice(-2) +
      "-" +
      ("0" + (newDate.getMonth() + 1)).slice(-2) +
      "-" +
      newDate.getFullYear();
    const dateWithHour =
      formattedDate
        .split("-")
        .reverse()
        .join("-") +
      " " +
      newDate.getHours() +
      ":" +
      newDate.getMinutes() +
      ":" +
      newDate.getSeconds();

    return dateWithHour.toString();
  };
>>>>>>> master

  return (

    <Grid container spacing={9} className="Container">
      <Grid item xs={12} lg={12}>
        <h1 id="client-manager-title" className="Transactions__header">
          Last 100 transactions
        </h1>
      </Grid>
      <Grid>
        <TransactionList/>
      </Grid>
    </Grid>
  );
};

export default Transactions;
