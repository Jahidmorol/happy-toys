import React, { useEffect } from "react";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCategory from "./ToyCategory";
import AOS from 'aos';
import 'aos/dist/aos.css';



const ToysTabs = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("hors-toy");
  // const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetch(`https://happy-toys-server.vercel.app/toycategory/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [category]);

  const handleActibTab = (subCategory) => {
    setCategory(subCategory);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 data-aos="flip-down" className="text-4xl font-bold my-10">Shop by Category</h1> */}
      <div data-aos="flip-down" className="relative md:w-[35%] mx-auto mt-10">
          <div className="h-16 absolute right-4 top-2/3 md:top-1/4 mask mask-hexagon-2 text-[#80BD9E] bg-[#80BD9E]">jahid</div>
          <div className="h-16 absolute left-4 bottom-1/2 md:bottom-1/4 mask mask-hexagon-2 text-[#80BD9E] bg-[#80BD9E]">jahid</div>

          <h1 className=" text-3xl font-bold mb-10 text-center">
          Shop by Category
          </h1>
        </div>
      <Tabs >
        <TabList>
          <Tab onClick={() => handleActibTab("hors-toy")}>Hors Toy</Tab>
          <Tab onClick={() => handleActibTab("cow-toy")}>Cow Toy</Tab>
          <Tab onClick={() => handleActibTab("cat-toy")}>Cat Toy</Tab>
        </TabList>

        
          <div className="w-[85%] mx-auto mt-10 grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {toys.map((toy) => (
              <ToyCategory key={toy._id} toy={toy}></ToyCategory>
            ))}
          </div>
        
      </Tabs>
    </div>
  );
};

export default ToysTabs;
