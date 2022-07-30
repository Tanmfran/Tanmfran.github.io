import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import React, { useEffect, useMemo, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import styles from "./Grid.module.scss";

export const Grid = () => {
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

  const columnDefs = useMemo(
    () => [
      { field: "make", filter: true },
      { field: "model", filter: true },
      { field: "price" },
    ],
    []
  );

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
        <div>Header</div>
        <div className={`ag-theme-alpine ${styles.agGridWrapper}`}>
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
