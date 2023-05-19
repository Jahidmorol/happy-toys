import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCategory from "./ToyCategory";

const ToysTabs = () => {
  // const [toys, setToys] = useState([]);
  // const [category, setCategory] = useState("");
  // const [tabIndex, setTabIndex] = useState(0);
  // console.log(tabIndex);



  // useEffect(() => {
  //   fetch(`http://localhost:5000/toycategory/${category}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setToys(data);
  //     });
  // }, []);

  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    const fetchTabData = async (category) => {
      try {
        const response = await fetch(`http://localhost:5000/toycategory/${category}`);
        const data = await response.json();

        // Set the fetched data in state
        setTabData((prevTabData) => [...prevTabData, data]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Array of dynamic categories
    const categories = ['hors-toy', 'cat-toy', 'cow-toy'];

    // Fetch data for each category
    categories.forEach((category) => fetchTabData(category));
  }, []);

  return (


    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
    <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
      <TabList>
          <Tab>Cow toy</Tab>
          <Tab>Dogs Toys</Tab>
          <Tab>Hors Toy</Tab>
        </TabList>

      {tabData.map((data, index) => (
        <TabPanel key={index}>
          <div className="grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {activeTab === index &&
              data?.map((toy) => (
                <ToyCategory key={toy._id} toy={toy}></ToyCategory>
              ))}
          </div>
        </TabPanel>
      ))}
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
