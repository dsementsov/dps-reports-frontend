import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from '/src/components/Header.jsx';
import './report.css';

export default function Report (props) {
  const { groupname } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // http://127.0.0.1:5173/report/BREAD?date=2023-11-12

  return (
      <>
        <Header titleText="DPS Raid Report"/>
        <div>Dynamic Dashboard Page, Param: {groupname} for date {searchParams.get("date")}</div>
      </>
  );
};
