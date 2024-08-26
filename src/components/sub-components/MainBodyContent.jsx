import React from "react";

const MainBodyContent = () => {
  return (
    <>
      {/*********************************************************************** FIRST GRID **************************************************************************/}
      <div className="grid grid-cols-9 w-full gap-8 px-16 mt-7 mb-10 h-[490px]">
        <div
          className="col-span-3 rounded-2xl relative border-2 border-white"
          style={{
            background: "#a4f7fb",
          }}
        >
          <img className="absolute" src="/images/gridImage1.webp" alt="" />
          <div className="px-4 py-6 flex flex-col gap-1">
            <p className="text-left font-bold">ADOBE PHOTOSHOP</p>
            <p className="text-left text-2xl font-bold">
              Inspiration to creation. Faster.
            </p>
            <p className="text-left max-w-[795px] font-medium text-lg">
              Explore new innovations to help you to keep up with what you dream
              up.
            </p>
          </div>
        </div>
        <div
          className="col-span-3 rounded-2xl relative border-2 border-white"
          style={{
            backgroundImage: "url('/images/gridImage2.webp')",
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundSize: "contain",
          }}
        >
          <div className="px-4 py-6 flex flex-col gap-1">
            <p className="text-left font-bold">BUSINESS</p>
            <p className="text-left text-2xl font-bold">
              34% off the first year on Creative Cloud All Apps
            </p>
            <p className="text-left max-w-[795px] font-medium text-lg">
              Get up to 9 licences for your team at a lower price. See terms *
            </p>
          </div>
        </div>
        <div
          className="col-span-3 rounded-2xl relative border-2 border-white"
          style={{
            background: "#ededed",
          }}
        >
          <div className="px-4 py-6 flex flex-col gap-1">
            <p className="text-left font-bold">ADOBE CREATIVE CLOUD</p>
            <p className="text-left text-2xl font-bold">
              Save 58% on Creative Cloud All Apps.
            </p>
            <p className="text-left max-w-[795px] font-medium text-lg">
              Get 20+ apps and generative AI features for less than the price of
              Photoshop and Acrobat Pro sold separately. ₹4,630.32/mo, now
              ₹1,915.14/mo incl. GST.
            </p>
          </div>
        </div>
      </div>
      {/********************************************************************** SECOND GRID **************************************************************************/}
      <div className="grid grid-cols-6 w-full gap-8 px-16 mt-7 mb-10 h-[490px]">
        <div
          className="col-span-4 rounded-2xl relative"
          style={{
            backgroundImage: "url('/images/astroCat.webp')",
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundSize: "cover",
          }}
        >
          <div className="px-4 py-6 flex flex-col gap-1">
            <p className="text-left font-bold">Creative Cloud All Apps</p>
            <p className="text-left text-2xl font-bold">
              The ultimate toolkit for unlimited creativity.
            </p>
            <p className="text-left max-w-[795px] font-medium text-lg">
              Get 20+ apps, tutorials, templates, and more, plus generative AI
              tools powered by Adobe Firefly.
            </p>
          </div>
        </div>
        <div
          className="col-span-2 rounded-2xl relative border-2 border-white"
          style={{
            background: "#ff9b09",
          }}
        >
          <div className="px-4 py-6 flex flex-col gap-1">
            <p className="text-left font-bold">NEW IN ILLUSTRATOR</p>
            <p className="text-left text-2xl font-bold">
              Create at the speed of now.
            </p>
            <p className="text-left max-w-[795px] font-medium text-lg">
              Go from idea to illustration faster with powerful new features.
            </p>
            <img
              className="absolute bottom-0"
              src="/images/butterfly.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      {/********************************************************************** SECOND GRID **************************************************************************/}
      <div className="grid grid-cols-9 w-full gap-8 px-16 mt-7 mb-10 h-[490px]">
        <div
          className="col-span-3 rounded-2xl relative border-2 border-white"
          style={{
            backgroundImage: "url('/images/dog.webp')",
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundSize: "contain",
          }}
        >
          <div className="px-4 py-6 flex flex-col gap-1">
            <p className="text-left font-bold">BUSINESS</p>
            <p className="text-left text-2xl font-bold">
              34% off the first year on Creative Cloud All Apps
            </p>
            <p className="text-left max-w-[795px] font-medium text-lg">
              Get up to 9 licences for your team at a lower price. See terms *
            </p>
          </div>
        </div>
        <div
          className="col-span-3 rounded-2xl relative border-2 border-white"
          style={{
            background: "#5e53dd",
          }}
        >
          <div className="px-4 py-6 flex flex-col gap-1">
            <p className="text-left font-bold">NEW IN ILLUSTRATOR</p>
            <p className="text-left text-2xl font-bold">
              Create at the speed of now.
            </p>
            <p className="text-left max-w-[795px] font-medium text-lg">
              Go from idea to illustration faster with powerful new features.
            </p>
            <img
              className="absolute bottom-0"
              src="/images/working.webp"
              alt=""
            />
          </div>
        </div>
        <div
          className="col-span-3 rounded-2xl relative border-2 border-white"
          style={{
            backgroundImage: "url('/images/phoneLooking.webp')",
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div className="px-4 py-6 flex flex-col gap-1">
            <p className="text-left font-bold">BUSINESS</p>
            <p className="text-left text-2xl font-bold">
              34% off the first year on Creative Cloud All Apps
            </p>
            <p className="text-left max-w-[795px] font-medium text-lg">
              Get up to 9 licences for your team at a lower price. See terms *
            </p>
            {/* <img src="/images/phoneLooking.webp" className="absolute" alt="" srcset="" /> */}
          </div>
        </div>
      </div>
      <p className="text-center text-lg font-medium pb-5">
        *Available to new subscribers of Adobe Creative Cloud All Apps for
        teams. Requires a 12-month commitment. See terms.
      </p>
    </>
  );
};

export default MainBodyContent;
