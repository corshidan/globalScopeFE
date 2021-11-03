import React from "react";
import Layout from "../Layout";

import { CSVLink } from "react-csv";
import { useState } from "react";

// const csvData = [
//   ["date", "confidence", "overall-feeling"],
//   ["Ahmed", "Tomi", "ah@smthing.co.com"],
//   ["Raed", "Labes", "rl@smthing.co.com"],
//   ["Yezzi", "Min l3b", "ymin@cocococo.com"],
// ];

const columnNames = [["date", "confidence", "overall-feeling"]];

export default function AdminPage() {
  const [csvData, setCsvData] = useState(null);
  // const [allData, setAllData] = useState(null);

  const getBootcamperData = () => {
    fetch("https://global-scope.herokuapp.com/reflections")
      .then((res) => res.json())
      .then((data) => {
        const reflectionsArray = data.payload.map((item) => {
          return [item.created, item.confidence, item.overallfeeling];
        });
        const filteredCsvData = [...columnNames, ...reflectionsArray];
        setCsvData(filteredCsvData);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Layout>
	<div className=" flex flex-col items-center p-2">
      <div className= " flex justify-end w-full pr-4 mt-2">
        {csvData === null ? (
          <button className="text-white bg-purple-900 btn-accent hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center shadow-md duration-300" onClick={getBootcamperData}>Generate download link</button>
        ) : (
          <CSVLink className="text-white bg-purple-900 btn-accent hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center shadow-md duration-300" data={csvData}>Download Bootcamper Data</CSVLink>
        )}
      </div>
	  <section>
		  Other Stuff!
	  </section>
	  </div>
    </Layout>
  );
}
