"use client";
import { useMenuStore } from "@/store/useMenuStore";
import React from "react";

const GlobalPerformance = () => {
  const { reportingMenu } = useMenuStore();

  return <div>{reportingMenu === 2 && <div>GlobalPerformance</div>}</div>;
};

export default GlobalPerformance;
