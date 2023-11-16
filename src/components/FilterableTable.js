import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import DataTable from "./Datatable";
import Select from "react-select";

const columns = [
  { label: "Column 1", value: 0 },
  { label: "Column 2", value: 1 },
  { label: "Column 3", value: 2 },
  { label: "Column 4", value: 3 },
  { label: "Column 5", value: 4 },
];

const defaultSelectedColumns = columns.map((col) => col.value);

const FilterableTable = () => {
  const [selectedColumns, setSelectedColumns] = useState(
    defaultSelectedColumns
  );

  const handleColumnChange = (selectedOptions) => {
    if (selectedOptions.length === 0) {
        console.log("Aqui")
      setSelectedColumns(defaultSelectedColumns);
    } else {
      setSelectedColumns(
        selectedOptions
          ? selectedOptions.map((col) => col.value)
          : defaultSelectedColumns
      );
    }
  };

  const columnProps = useSpring({
    width: selectedColumns.length > 0 ? "20%" : "0%",
    opacity: selectedColumns.length > 0 ? 1 : 0,
    config: { mass: 1, tension: 210, friction: 20 },
  });

  return (
    <>
      <Select
        options={columns}
        isMulti
        value={columns.filter((col) => selectedColumns.includes(col.value))}
        onChange={handleColumnChange}
      />
      
      <div className="filterable-table">
        {columns.map((col, index) => (
          <animated.div
            key={index}
            className={`column ${
              selectedColumns.includes(index) ? "visible" : "hidden"
            }`}
            style={{ ...columnProps, overflow: "hidden" }}
          >
            <header>Teste</header>
            <div className="data-table">
              <DataTable />
            </div>
          </animated.div>
        ))}
      </div>
    </>
  );
};

export default FilterableTable;
