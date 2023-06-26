"use client";
import { useMenuStore } from "@/store/useMenuStore";
import React from "react";

const Overview = () => {
  const { reportingMenu } = useMenuStore();

  return <div>{reportingMenu === 0 && <div>OverView</div>}</div>;
};

export default Overview;
