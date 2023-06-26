import React from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { ChevronDown, Filter, RefreshCw } from "lucide-react";
import ReportingMenu from "@/components/ReportingMenu";
import LogoutButton from "@/components/LogoutButton";
import ClientsNameFilter from "@/components/Filters/ClientsNameFilter";

const HomePage = () => {
  return (
    <div className=" bg-[#FAFFFF] pb-20">
      <header className=" border-b-2 border-[#EBEBEB]">
        <nav className=" flex items-center gap-16 py-5 pl-6 pr-16">
          <Image src={Logo} alt="Logo" />
          <div className=" flex items-center text-lg font-bold text-[#163143]">
            All reports <ChevronDown />
          </div>
          <LogoutButton />
        </nav>
      </header>
      <section className=" pl-10 pr-16">
        <div className="flex items-center pt-10">
          <h1 className="  text-2xl font-extrabold text-[#343434] ">
            Agent workforce report
          </h1>
          <button className="ml-auto flex items-center rounded-full bg-[#69C920] px-4 py-3 text-white">
            {" "}
            Refresh Report <RefreshCw className="ml-2" />{" "}
          </button>
        </div>
      </section>
      <div className="mt-6 flex items-center gap-5  px-16">
        <div className="flex">
          <Filter />
          <span className=" font-bold">Filters</span>
        </div>
        <ClientsNameFilter />

        <button
          // onClick={() => setshowModal(!showModal)}
          className=" relative flex items-center rounded-full border py-1 pl-3 text-sm font-bold text-[#163143]"
        >
          Agents{" "}
          <span className="flex h-[15px] w-[15px] items-center rounded-full bg-[#EBEBEB] px-1">
            0
          </span>
          <ChevronDown />
        </button>
        <button
          // onClick={() => setshowModal(!showModal)}
          className=" relative flex items-center rounded-full border py-1 pl-3 text-sm font-bold text-[#163143]"
        >
          Team Lead{" "}
          <span className="flex h-[15px] w-[15px] items-center rounded-full bg-[#EBEBEB] px-1">
            0
          </span>
          <ChevronDown />
        </button>
        <button
          // onClick={() => setshowModal(!showModal)}
          className=" relative flex items-center rounded-full border py-1 pl-3 text-sm font-bold text-[#163143]"
        >
          OM{" "}
          <span className="flex h-[15px] w-[15px] items-center rounded-full bg-[#EBEBEB] px-1">
            0
          </span>
          <ChevronDown />
        </button>
        <button
          // onClick={() => setshowModal(!showModal)}
          className=" relative flex items-center rounded-full border py-1 pl-3 text-sm font-bold text-[#163143]"
        >
          CSM{" "}
          <span className="flex h-[15px] w-[15px] items-center rounded-full bg-[#EBEBEB] px-1">
            0
          </span>
          <ChevronDown />
        </button>
      </div>
      <section className="ml-10 mr-16 bg-white pt-6">
        <ReportingMenu />
      </section>
    </div>
  );
};

export default HomePage;
