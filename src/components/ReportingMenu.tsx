"use client";
import React, { useState } from "react";
import { OverviewMenuIcon } from "./Icons/icons";
import Overview from "./Overview";
import AgentsWorkforceReport from "./AgentsWorkforceReport";
import GlobalPerformance from "./GlobalPerformance";
import { useMenuStore } from "@/store/useMenuStore";

const ReportingMenu = () => {
  const { changeReportingMenu, reportingMenu } = useMenuStore();
  console.log(reportingMenu);

  return (
    <section className=" overflow-hidden">
      <nav className=" flex text-base font-medium text-[#163143] ">
        <button
          onClick={() => changeReportingMenu(0)}
          className={` relative flex items-center gap-3 rounded-t-3xl border border-r-0 border-[#EBEBEB] pb-6 pl-4  pr-16  pt-3 ${
            reportingMenu === 0
              ? '  before:absolute before:left-0  before:top-0  before:h-full before:w-full before:-skew-x-[20deg] before:rounded-t-lg before:border-l before:border-[#EBEBEB] before:bg-white before:content-[""] after:absolute  after:right-0  after:top-0 after:h-full after:w-full after:skew-x-[20deg] after:rounded-t-lg after:border-r after:border-[#EBEBEB]  after:bg-white after:content-[""]'
              : 'after:absolute after:right-0  after:top-0  after:h-full after:w-full after:skew-x-[20deg] after:rounded-t-lg after:border-r after:border-[#EBEBEB] after:content-[""]  '
          }`}
        >
          <OverviewMenuIcon />
          <span className=" relative z-50 ">Overview</span>
        </button>
        {/* <div
          className={`relative pt-3 pb-6 pl-4 pr-16 border border-[#EBEBEB]  border-r-0 border-l-0 rounded-t-3xl before:block  before:absolute  before:-inset-1 before:border-l before:border-[#EBEBEB]  before:rotate-[11deg]   after:block after:absolute  after:-inset-1 after:border-r after:border-[#EBEBEB]  after:-rotate-12   ${
            menu === 1
              ? ' before:z-[-1] z-50 after:z-[-2]  before:pr-10 after:pl-10 before:w-fit  '
              : ''
          }`}
        >
          Agent workforce report
        </div> */}
        <button
          onClick={() => changeReportingMenu(1)}
          className={` relative rounded-t-3xl border border-l-0 border-r-0 border-[#EBEBEB] pb-6  pl-4 pr-16 pt-3 ${
            reportingMenu === 1
              ? '  before:absolute before:left-0  before:top-0  before:h-full before:w-full before:-skew-x-[20deg] before:rounded-t-lg before:border-l before:border-[#EBEBEB] before:bg-white before:content-[""] after:absolute  after:right-0  after:top-0 after:h-full after:w-full after:skew-x-[20deg] after:rounded-t-lg after:border-r after:border-[#EBEBEB] after:bg-white after:content-[""] '
              : 'after:absolute after:right-0  after:top-0  after:h-full after:w-full after:skew-x-[20deg] after:rounded-t-lg after:border-r after:border-[#EBEBEB]  after:content-[""] '
          }`}
        >
          <span className=" relative z-10"> Agent workforce report</span>
        </button>

        <button
          onClick={() => changeReportingMenu(2)}
          className={` relative rounded-t-3xl border border-r-0 border-[#EBEBEB] pb-6 pl-4   pr-16  pt-3 ${
            reportingMenu === 0
              ? '  before:absolute before:left-0  before:top-0  before:h-full before:w-full before:-skew-x-[20deg] before:rounded-t-lg before:border-l before:border-[#EBEBEB] before:bg-white before:content-[""] after:absolute  after:right-0  after:top-0 after:h-full after:w-full after:skew-x-[20deg] after:rounded-t-lg after:border-r after:border-[#EBEBEB] after:bg-white after:content-[""] '
              : 'after:absolute after:right-0  after:top-0  after:h-full after:w-full after:skew-x-[20deg] after:rounded-t-lg after:border-r after:border-[#EBEBEB] after:content-[""]  '
          }`}
        >
          <span className=" relative z-50 "> Global Performance</span>
        </button>
      </nav>

      <Overview />

      <AgentsWorkforceReport />

      <GlobalPerformance />
    </section>
  );
};

export default ReportingMenu;
