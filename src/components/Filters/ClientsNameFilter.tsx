"use client";
import TotalActiveAgents from "@/components/apis/getTotalActiveAgents";
import { useFiltersStore } from "@/store/useFiltersStore";
import { useQuery } from "@tanstack/react-query";
import { CookieValueTypes, getCookie, hasCookie } from "cookies-next";
import { ChevronDown, ChevronUp, Search, X } from "lucide-react";
import React, { Fragment, useEffect, useRef, useState } from "react";

// const data = [
//   {
//     "hop.name": "Customer Service - 260 Sample Sale"
//   },
//   {
//     "hop.name": "Customer Service - 54 Thrones"
//   },
//   {
//     "hop.name": "Customer Service - Abstract Ocean"
//   },
//   {
//     "hop.name": "Customer Service - Ade + Ayo"
//   },
//   {
//     "hop.name": "Customer Service - Ade + Ayo &. Odele Beauty"
//   },
//   {
//     "hop.name": "Customer Service - Affordable Luxury Group (ALG)"
//   },
//   {
//     "hop.name": "Customer Service - Agro Thrive"
//   },
//   {
//     "hop.name": "Customer Service - AIIR Professional"
//   },
//   {
//     "hop.name": "Customer Service - AIIR Professional &. Pillow Fight &. Swoon"
//   },
//   {
//     "hop.name": "Customer Service - AIIR Professional &. Swoon"
//   },
//   {
//     "hop.name": "Customer Service - AirPop"
//   },
//   {
//     "hop.name": "Customer Service - AirPop &. Bean Box"
//   },
//   {
//     "hop.name": "Customer Service - AirSelfie"
//   },
//   {
//     "hop.name": "Customer Service - Alala"
//   },
//   {
//     "hop.name": "Customer Service - Alchemy 43"
//   },
//   {
//     "hop.name": "Customer Service - Alchemy 43 (NB) &. Oracle Lighting"
//   },
//   {
//     "hop.name": "Customer Service - All Things Commerce"
//   },
//   {
//     "hop.name": "Customer Service - Aloha"
//   },
//   {
//     "hop.name": "Customer Service - Alpaka"
//   },
//   {
//     "hop.name": "Customer Service - Alpaka Gear &. Digital Dream Labs"
//   },
//   {
//     "hop.name": "Customer Service - Alpaka Gear &. Digital Dream Labs &. Riviera Seafood Club"
//   },
//   {
//     "hop.name": "Customer Service - Alpaka &. Riviera Seafood Club"
//   },
//   {
//     "hop.name": "Customer Service - Alphalete Athletics"
//   },
//   {
//     "hop.name": "Customer Service - Alphalete Athletics &. Heiress Beverly Hills (Shop Muse Clothing)"
//   },
//   {
//     "hop.name": "Customer Service - American Modified"
//   },
//   {
//     "hop.name": "Customer Service - Amy Howard at Home"
//   },
//   {
//     "hop.name": "Customer Service - Analogue"
//   },
//   {
//     "hop.name": "Customer Service - Ancient Nutrition"
//   },
//   {
//     "hop.name": "Customer Service - Andrea Iyamah"
//   },
//   {
//     "hop.name": "Customer Service - Anime Cases"
//   },
//   {
//     "hop.name": "Customer Service - Anime Cases &. Hai"
//   },
//   {
//     "hop.name": "Customer Service - Ape Beverages"
//   },
//   {
//     "hop.name": "Customer Service - Apollo Scooters"
//   },
//   {
//     "hop.name": "Customer Service - Apothia Los Angeles"
//   },
//   {
//     "hop.name": "Customer Service - Apply Design"
//   },
//   {
//     "hop.name": "Customer Service - Arena Flowers"
//   },
//   {
//     "hop.name": "Customer Service - Arena Flowers &. Wine & Liquor Depot"
//   },
//   {
//     "hop.name": "Customer Service - Ariel Rider"
//   },
//   {
//     "hop.name": "Customer Service - ARMRA"
//   },
//   {
//     "hop.name": "Customer Service - Aroma360"
//   },
//   {
//     "hop.name": "Customer Service - ArtCreativity"
//   },
//   {
//     "hop.name": "Customer Service - ArtCreativity &. WYR Wear"
//   },
//   {
//     "hop.name": "Customer Service - Art of Tea"
//   },
//   {
//     "hop.name": "Customer Service - Art of Tea &. Kettle and Fire"
//   },
//   {
//     "hop.name": "Customer Service - AYBL"
//   },
//   {
//     "hop.name": "Customer Service - Azurous Inc, DBA Cabeau"
//   },
//   {
//     "hop.name": "Customer Service - Babe Lash"
//   },
//   {
//     "hop.name": "Customer Service - Babe Lash &. Skinny Mixes"
//   },
//   {
//     "hop.name": "Customer Service - Baby Gold"
//   },
//   {
//     "hop.name": "Customer Service - Bad Birdie"
//   },
//   {
//     "hop.name": "Customer Service - Baffin"
//   },
//   {
//     "hop.name": "Customer Service - Bamblu"
//   },
//   {
//     "hop.name": "Customer Service - Bamblu &. Modular Closet"
//   },
//   {
//     "hop.name": "Customer Service - Bara Sportswear"
//   },
//   {
//     "hop.name": "Customer Service - Barton Watch Bands"
//   },
//   {
//     "hop.name": "Customer Service - Barton Watch Bands &. Label Daddy"
//   },
//   {
//     "hop.name": "Customer Service - Barton Watch Bands - Shadowing (NB) &. Label Daddy"
//   },
//   {
//     "hop.name": "Customer Service - BAXXE"
//   },
//   {
//     "hop.name": "Customer Service - Bayam Jewelry"
//   },
//   {
//     "hop.name": "Customer Service - Bean Box"
//   },
//   {
//     "hop.name": "Customer Service - Bean Box &. momAgenda"
//   },
//   {
//     "hop.name": "Customer Service - Bear Down Brands​"
//   },
//   {
//     "hop.name": "Customer Service - Bear Down Brands​ &. Spice Tribe"
//   },
//   {
//     "hop.name": "Customer Service - Beauty Affairs"
//   },
//   {
//     "hop.name": "Customer Service - Beauty X Beast / Girls Who Lift"
//   },
//   {
//     "hop.name": "Customer Service - Be Cool Solutions"
//   },
//   {
//     "hop.name": "Customer Service - Be Cool Solutions &. Incrediwear"
//   },
//   {
//     "hop.name": "Customer Service - Be Cool Solutions &. Incrediwear &. Urbanista"
//   },
//   {
//     "hop.name": "Customer Service - Be Cool Solutions &. Urbanista"
//   },
//   {
//     "hop.name": "Customer Service - Beli Baby"
//   },
//   {
//     "hop.name": "Customer Service - Beli Baby &. Kreyol Essence"
//   },
//   {
//     "hop.name": "Customer Service - Best Beard Stuff"
//   },
//   {
//     "hop.name": "Customer Service - Better Nature"
//   },
//   {
//     "hop.name": "Customer Service - Bevilles"
//   },
//   {
//     "hop.name": "Customer Service - Be Well By Kelly"
//   },
//   {
//     "hop.name": "Customer Service - Beyond Meat"
//   },
//   {
//     "hop.name": "Customer Service - Beyond Paint"
//   },
//   {
//     "hop.name": "Customer Service -  Bicycle Glass Co."
//   },
//   {
//     "hop.name": "Customer Service - Bicycle Glass Co. &. Chip Cookies"
//   },
//   {
//     "hop.name": "Customer Service - Blackstock and Weber"
//   },
//   {
//     "hop.name": "Customer Service - Blackstock and Weber &. TalentPop Workforce Team"
//   },
//   {
//     "hop.name": "Customer Service - Blaze Pod"
//   },
//   {
//     "hop.name": "Customer Service - Blazy Susan"
//   },
//   {
//     "hop.name": "Customer Service - Blessed Be Magick"
//   },
//   {
//     "hop.name": "Customer Service - Bliss Energetics"
//   },
//   {
//     "hop.name": "Customer Service - BlueWater"
//   },
//   {
//     "hop.name": "Customer Service - Blunt Power"
//   },
//   {
//     "hop.name": "Customer Service - Bobo's"
//   },
//   {
//     "hop.name": "Customer Service - Boho Gal Jewelry"
//   },
//   {
//     "hop.name": "Customer Service - Boisson"
//   },
//   {
//     "hop.name": "Customer Service - Boy Smells"
//   },
//   {
//     "hop.name": "Customer Service - BrandBaassador"
//   },
//   {
//     "hop.name": "Customer Service - Brand Labs"
//   },
//   {
//     "hop.name": "Customer Service - Branwyn"
//   },
//   {
//     "hop.name": "Customer Service - Branwyn &. Matta NY"
//   },
//   {
//     "hop.name": "Customer Service - BrilliantPad"
//   },
//   {
//     "hop.name": "Customer Service - Brow Code"
//   },
//   {
//     "hop.name": "Customer Service - BROWN GIRL Jane"
//   },
//   {
//     "hop.name": "Customer Service - Buffbunny Collection"
//   },
//   {
//     "hop.name": "Customer Service - BYLT Basics"
//   },
//   {
//     "hop.name": "Customer Service - Calego"
//   },]

const ClientsNameFilter = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["client-names-for-filter"],
    queryFn: () => getCientNames(),
  });
  const getCientNames = async () => {
    try {
      let accessToken: CookieValueTypes = "";
      if (hasCookie("talentPOP_token")) {
        accessToken = getCookie("talentPOP_token");
      }
      // const accessToken = getCookie("talentPOP_token");
      const res = await fetch(
        "http://18.237.25.116:8000/get-client-names-for-filter",
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const clientNames = await res.json();

      if (res.status === 401) {
        return { message: "Not authenticated" };
      }
      return clientNames;
    } catch (error: any) {
      return { message: "Internal Server Error" };
    }
  };
  const searchRef = useRef<HTMLInputElement>(null);
  const [selectedNames, setSelectedNames] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedAlphabet, setSelectedAlphabet] = useState("A");
  const [showModal, setshowModal] = useState(false);
  const { addClientNames } = useFiltersStore();
  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleAlphabetClick = (alphabet: any) => {
    setSelectedAlphabet(alphabet);

    const filteredNames = data.filter((item: any) => {
      const name =
        item["hop.name"] === null ? "No Name" : item["hop.name"].toLowerCase();
      const firstChar = name?.charAt(name.indexOf("-") + 2);
      return firstChar.toLowerCase() === alphabet.toLowerCase();
    });
    setFilteredData(filteredNames);
  };

  const handleSearchChange = () => {
    const searchText = searchRef.current?.value || "";
    // setSearchText(searchText);

    const filteredNames = data.filter((item: any) =>
      item["hop.name"]?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredNames);
  };

  const handleNameCheckboxChange = (event: any, name: any) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      //@ts-ignore
      setSelectedNames([...selectedNames, name]);
    } else {
      setSelectedNames(
        selectedNames.filter((selectedName) => selectedName !== name)
      );
    }
  };
  const handleNameRemove = (name: string) => {
    setSelectedNames(
      selectedNames.filter((selectedName) => selectedName !== name)
    );
  };

  const renderNameList = () => {
    let currentAlphabet: any = null;

    return filteredData.map((item: any, index: any) => {
      const name = item["hop.name"] === null ? "No Name" : item["hop.name"];
      // console.log("NAME",name);
      let firstChar;
      firstChar = name.charAt(name.indexOf("-") + 2).toUpperCase();

      if (firstChar === " ") {
        firstChar = name.charAt(name.indexOf("-") + 3).toUpperCase();
      }

      // Check if the first character is different from the current alphabet
      if (firstChar !== currentAlphabet) {
        currentAlphabet = firstChar;
        if (!currentAlphabet.match(/^[A-Za-z]+$/)) {
          currentAlphabet = "#";
        }
        return (
          <Fragment key={`divider-${index}`}>
            <li className=" relative col-span-3 text-[#163143]">
              {currentAlphabet}
              <div className="absolute inset-0 top-1/2 mx-auto  h-[2px] max-w-lg bg-[#ECECEC]" />
            </li>
            <div>
              <li key={`name-${index}`} className=" flex gap-x-2 text-sm">
                <div className=" pt-[2px]">
                  <input
                    type="checkbox"
                    className="pt-3"
                    checked={selectedNames.includes(
                      //@ts-ignore
                      `${name.split("-")[1]?.trim()}`
                    )}
                    onChange={(event) =>
                      handleNameCheckboxChange(
                        event,
                        name.replace(
                          "Customer Service - " ||
                            "TalentPop - " ||
                            "TalentPop - Agent Internal Meetings - ",
                          ""
                        )
                      )
                    }
                  />
                </div>

                <span>
                  {name.replace(
                    "Customer Service - " ||
                      "TalentPop - " ||
                      "TalentPop - Agent Internal Meetings - ",
                    ""
                  )}
                </span>
              </li>
            </div>
          </Fragment>
        );
      }

      return (
        <li key={`name-${index}`} className=" flex gap-x-2 text-sm">
          <div className=" pt-[2px]">
            <input
              type="checkbox"
              //@ts-ignore
              checked={selectedNames.includes(
                //@ts-ignore
                `${name.split("-")[1]?.trim()}`
              )}
              className="pt-3"
              onChange={(event) =>
                handleNameCheckboxChange(
                  event,
                  name.replace(
                    "Customer Service - " ||
                      "TalentPop - " ||
                      "TalentPop - Agent Internal Meetings - ",
                    ""
                  )
                )
              }
            />
          </div>

          <span>
            {name.replace(
              "Customer Service - " ||
                "TalentPop - " ||
                "TalentPop - Agent Internal Meetings - ",
              ""
            )}
          </span>
        </li>
      );
    });
  };

  if (isLoading) return <p className=" text-base text-[#69C920]">Loading...</p>;

  if (error) return <p className=" text-base text-[#69C920]">Error</p>;
  if (data.message) {
    if (data.message === "Not authenticated")
      return (
        <p className=" text-base text-[#69C920]">Login Credentials Invalid</p>
      );
    return <p className=" text-base text-[#69C920]">{data.message}</p>;
  }
  return (
    <div style={{ zIndex: 10000 }}>
      <button
        onClick={() => setshowModal(!showModal)}
        className=" relative flex items-center rounded-full border py-1 pl-3 text-sm font-bold text-[#163143]"
      >
        Clients{" "}
        {selectedNames.length > 0 && (
          <span className="flex h-[15px] w-[15px] items-center rounded-full bg-[#EBEBEB] px-1">
            {selectedNames.length}
          </span>
        )}
        {showModal ? <ChevronUp /> : <ChevronDown />}
      </button>
      {showModal && (
        <div className=" absolute mx-auto max-w-xl  rounded-3xl  bg-white shadow-2xl">
          <div className="  p-2 ">
            <div>
              <div className="mt-1 flex h-7 gap-x-2  rounded-full">
                <div className="relative flex flex-grow items-stretch focus-within:z-10 ">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="search"
                    ref={searchRef}
                    // value={searchText}

                    placeholder="Search for clients"
                    className="block w-full rounded-full border-gray-300 bg-[#F8F9FA] pl-10  focus-visible:outline-none  focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:ring-offset-1 sm:text-sm "
                  />
                  <button
                    type="button"
                    onClick={() => handleSearchChange()}
                    className=" absolute inset-y-0 right-0 -ml-px flex items-center space-x-2 rounded-r-full  border bg-[#69C920] px-4   py-2 pl-3 text-sm font-medium  text-white  focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                  >
                    Search
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => addClientNames(selectedNames)}
                  className=" relative inset-y-0 right-0 -ml-px flex items-center space-x-2 rounded-full  border bg-[#69C920] px-4   py-2 pl-3 text-sm font-medium  text-white  focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  Apply Filter
                </button>
              </div>

              <div className="mt-2 flex justify-around bg-[#ECECEC]/30">
                {Array.from({ length: 26 }, (_, index) => (
                  <button
                    className={`${
                      selectedAlphabet === String.fromCharCode(65 + index)
                        ? "text-[#163143]"
                        : "text-[#90A8B4]"
                    }`}
                    key={index}
                    onClick={() =>
                      handleAlphabetClick(String.fromCharCode(65 + index))
                    }
                  >
                    {String.fromCharCode(65 + index)}
                  </button>
                ))}
              </div>
              {selectedNames.length === 0 ? (
                ""
              ) : (
                <div className=" flex items-center py-4 text-sm text-[#163143]">
                  <ul className="flex flex-wrap gap-x-5 gap-y-2 pl-2">
                    <p>Selected Clients:</p>
                    {selectedNames.map((name, index) => (
                      <li
                        className=" flex items-center gap-[10px] rounded-full bg-[#69C920] py-1 pl-2 pr-2 text-white "
                        key={index}
                      >
                        {name}
                        <X
                          onClick={() => handleNameRemove(name)}
                          className="h-[14px] w-[14px] cursor-pointer rounded-full bg-white text-[#163143] "
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className=" max-h-72 overflow-y-scroll">
              <ul className="mt-4 grid grid-cols-3 gap-4">
                {renderNameList()}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientsNameFilter;
