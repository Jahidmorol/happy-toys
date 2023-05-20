import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCategory from "./ToyCategory";

const ToysTabs = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("hors-toy");
  // const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/toycategory/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [category]);

  const handleActibTab = (subCategory) => {
    setCategory(subCategory);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
      <Tabs >
        <TabList>
          <Tab onClick={() => handleActibTab("hors-toy")}>Hors Toy</Tab>
          <Tab onClick={() => handleActibTab("cow-toy")}>Cow Toy</Tab>
          <Tab onClick={() => handleActibTab("cat-toy")}>Cat Toy</Tab>
        </TabList>

        
          <div className="grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {toys.map((toy) => (
              <ToyCategory key={toy._id} toy={toy}></ToyCategory>
            ))}
          </div>
        
      </Tabs>
    </div>

    // <div>
    //   <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

    //     <TabPanel>
    //       <div className="grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
    //         {toys.map((toy) => (
    //           <ToyCategory key={toy._id} toy={toy}></ToyCategory>
    //         ))}
    //       </div>
    //     </TabPanel>
    //     <TabPanel>
    //     <div className="grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
    //         {toys.map((toy) => (
    //           <ToyCategory key={toy._id} toy={toy}></ToyCategory>
    //         ))}
    //       </div>
    //     </TabPanel>
    //     <TabPanel>
    //     <div className="grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
    //         {toys.map((toy) => (
    //           <ToyCategory key={toy._id} toy={toy}></ToyCategory>
    //         ))}
    //       </div>
    //     </TabPanel>
    //   </Tabs>
    // </div>
  );
};

export default ToysTabs;
