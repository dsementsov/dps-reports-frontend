import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function Report () {
  const { groupname } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // http://127.0.0.1:5173/report/BREAD?date=2023-11-12

  return <div>Dynamic Dashboard Page, Param: {groupname} for date {searchParams.get("date")}</div>;
};
