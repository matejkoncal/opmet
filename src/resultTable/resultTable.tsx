import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { GroupHeader } from "./groupHeader/groupHeader";
import { DateTimeCell } from "./dateTimeCell/dateTimeCell";
import { BodyCell } from "./bodyCell/bodyCell";
import { WeatherReport } from "../opmet/opmet";

export type TableSource = Record<string, WeatherReport[]>;

type ResultTableProps = {
  tableSource: TableSource;
};

export const ResultTable = ({ tableSource }: ResultTableProps) => {
  const rows = Object.keys(tableSource).map(key => {
    return (
      <Fragment key={"fragment" + key}>
        <GroupHeader key={key + "header"}>{key}</GroupHeader>
        {tableSource[key]?.map((report, index) => (
          <TableRow key={key + index + report.text}>
            <TableCell align="center">{report.queryType}</TableCell>
            <DateTimeCell date={new Date(report.reportTime)} locales="sk-SK" />
            <BodyCell>{report.text}</BodyCell>
          </TableRow>
        ))}
      </Fragment>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="result table">
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
};
