import React from "react";

const SortingTable = ({ data }) => {
  return (
    <div className="sorting-table">
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortingTable;
