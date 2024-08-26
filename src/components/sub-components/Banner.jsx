import React from "react";

const Banner = () => {
  return (
    <div
      className="min-h-[74vh]"
      style={{
        backgroundImage: "url('/images/banner.webp')",
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <div className="flex  flex-col text-center gap-4 pt-16 pb-11">
        <p className="text-4xl font-semibold">Which superpower will it be?</p>
        <p className="text-lg font-medium">
          Free creative fun or premium possibilities?
        </p>
        <div className="grid grid-cols-6 w-full gap-8 px-16 mt-14 h-[490px]">
          <div
            className="col-span-4 rounded-2xl relative border-2 border-white"
            style={{
              background: "rgba(255, 255, 255, 0.3)",
            }}
          >
            <img className="absolute" src="/images/bannerImage1.webp" alt="" />
            <div className="px-4 py-6 flex flex-col gap-1">
              <p className="text-left font-bold">ABOBE EXPRESS</p>
              <p className="text-left text-2xl font-bold">
                Looking for a solution that’s simple, fun and free?
              </p>
              <p className="text-left max-w-[795px] font-medium text-lg">
                Design flyers, logos, Instagram posts and reels and more using
                all-in-one Adobe Express templates. Fast, easy and free. No
                credit card required.
              </p>
            </div>
          </div>
          <div
            className="col-span-2 rounded-2xl relative border-2 border-white"
            style={{
              background: "rgba(255, 255, 255, 0.3)",
            }}
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              <p className="text-left font-bold">ADOBE CREATIVE CLOUD</p>
              <p className="text-left text-2xl font-bold">
                Save 58% on Creative Cloud All Apps.
              </p>
              <p className="text-left max-w-[795px] font-medium text-lg">
                Get 20+ apps and generative AI features for less than the price
                of Photoshop and Acrobat Pro sold separately. ₹4,630.32/mo, now
                ₹1,915.14/mo incl. GST.
              </p>
            </div>

            <img
              className="absolute bottom-0"
              src="/images/bannerImage2.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
