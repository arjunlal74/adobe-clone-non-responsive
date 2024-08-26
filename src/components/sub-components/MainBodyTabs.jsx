import React from "react";

const MainBodyTabs = () => {
  const buttonArray = [
    "Everyone",
    "Students",
    "Photographers",
    "Business",
    "Adobe Stock",
    "Special offers",
  ];

  return (
    <>
      <div className="flex flex-row gap-4 items-center justify-center mt-7">
        <p className="text-xl font-bold">Creative Cloud for :</p>
        {buttonArray.map((name) => (
          <button className="border-2 border-black rounded-full p-1 px-2 text-sm font-bold">
            {name}
          </button>
        ))}
      </div>
    </>
  );
};

export default MainBodyTabs;
