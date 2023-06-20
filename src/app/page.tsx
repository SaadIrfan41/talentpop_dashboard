import React from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { ChevronDown, RefreshCw } from "lucide-react";
import ReportingMenu from "@/components/ReportingMenu";
import LogoutButton from "@/components/LogoutButton";

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
      <section className="ml-10 mr-16 bg-white pt-6">
        <ReportingMenu />
      </section>
    </div>
  );
};

export default HomePage;
