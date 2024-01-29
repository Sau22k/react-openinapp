import React, { useState } from "react";
import SortingTable from "./SortingTable";

const Upload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [tableData, setTableData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      parseFileData(file);
    }
  };

  const parseFileData = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target.result;
      const parsedData = parseCSV(fileContent); 
      setTableData(parsedData);
    };
    reader.readAsText(file);
  };

  const parseCSV = (content) => {
    const rows = content.split("\n").map((row) => row.split(","));
    const tableData = rows.map((row, index) => ({
      "sl. no.": row[0],
      "links": row[1], 
      "tags": row[2], 
    }));
    return tableData;
  };

  return (
    <div className="upload-container">
      <div className="upload-section">
        <input type="file" onChange={handleFileUpload} />
      </div>
      {tableData.length > 0 && <SortingTable data={tableData} />}
    </div>
  );
};

export default Upload;
