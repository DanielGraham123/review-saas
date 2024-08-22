"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import DataTables, { Config } from "datatables.net-dt";
import { useRef } from "react";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

const Table = ({ data }) => {
  const tableRef = useRef(null);

  const data_ = [
    {
      id: "1",
      name: "Tiger Nixon",
      position: "System Architect",
      salary: "$320,800",
      start_date: "2011/04/25",
      office: "Edinburgh",
      extn: "5421",
    },
    {
      id: "2",
      name: "Garrett Winters",
      position: "Accountant",
      salary: "$170,750",
      start_date: "2011/07/25",
      office: "Tokyo",
      extn: "8422",
    },
    {
      id: "3",
      name: "Garrett Winters",
      position: "Accountant",
      salary: "$170,750",
      start_date: "2011/07/25",
      office: "Tokyo",
      extn: "8422",
    },
    {
      id: "4",
      name: "Garrett Winters",
      position: "Accountant",
      salary: "$170,750",
      start_date: "2011/07/25",
      office: "Tokyo",
      extn: "8422",
    },
    {
      id: "5",
      name: "Garrett Winters",
      position: "Accountant",
      salary: "$170,750",
      start_date: "2011/07/25",
      office: "Tokyo",
      extn: "8422",
    },
    {
      id: "6",
      name: "Garrett Winters",
      position: "Accountant",
      salary: "$170,750",
      start_date: "2011/07/25",
      office: "Tokyo",
      extn: "8422",
    },
    {
      id: "7",
      name: "Garrett Winters",
      position: "Accountant",
      salary: "$170,750",
      start_date: "2011/07/25",
      office: "Tokyo",
      extn: "8422",
    },
    {
      id: "8",
      name: "Garrett Winters",
      position: "Accountant",
      salary: "$170,750",
      start_date: "2011/07/25",
      office: "Tokyo",
      extn: "8422",
    },
    {
      id: "9",
      name: "Garrett Winters",
      position: "Accountant",
      salary: "$170,750",
      start_date: "2011/07/25",
      office: "Tokyo",
      extn: "8422",
    },
    {
      id: "10",
      name: "Garrett Winters",
      position: "Accountant",
      salary: "$170,750",
      start_date: "2011/07/25",
      office: "Tokyo",
      extn: "8422",
    },
    {
      id: "11",
      name: "Garrett Winters",
      position: "Accountant",
      salary: "$170,750",
      start_date: "2011/07/25",
      office: "Tokyo",
      extn: "8422",
    },
    {
      id: "12",
      name: "Garrett Winters",
      position: "Accountant",
      salary: "$170,750",
      start_date: "2011/07/25",
      office: "Tokyo",
      extn: "8422",
    },
  ];

  const columns = [
    { data: "name", title: "Name" },
    { data: "position", title: "Position" },
  ];

  useEffect(() => {
    const dt = new DataTables(tableRef.current, {
      data: data_,
      columns: columns,
    });
    return () => {
      dt.destroy();
    };
  }, []);

  return (
    <>
      <table ref={tableRef} className="display"></table>
    </>
  );
};

export default Table;
