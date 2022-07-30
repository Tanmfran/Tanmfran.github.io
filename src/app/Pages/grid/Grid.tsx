import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import React, { useEffect, useMemo, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";

import { currencyFormat } from "../../shared/utils";

import styles from "./Grid.module.scss";

interface Vehicle {
  make: string;
  model: string;
  price: number;
}

export const Grid = () => {
  const [rowData, setRowData] = useState<Vehicle[]>(); // Set rowData to Array of Objects, one Object per Row

  const columnDefs: ColDef<Vehicle>[] = [
    { field: "make", filter: true },
    { field: "model", filter: true },
    {
      field: "price",
      valueFormatter: (params) => currencyFormat(params.value),
    },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      flex: 1,
    }),
    []
  );

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  return (
    <>
      <div className={styles.gridPage}>
        <div className={styles.agGridWrapperHeader}>
          Random Cars and some Prices or something
        </div>
        <div className={`ag-theme-balham-dark ${styles.agGridWrapper}`}>
          <AgGridReact
            rowData={rowData} // Row Data for Rows
            columnDefs={columnDefs} // Column Defs for Columns
            defaultColDef={defaultColDef} // Default Column Properties
            animateRows={true} // Optional - set to 'true' to have rows animate when sorted
            rowSelection="multiple" // Options - allows click selection of rows
          />
        </div>
      </div>
    </>
  );
};
