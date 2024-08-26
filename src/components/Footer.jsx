import React from "react";

const Footer = () => {
  const list1 = [
    "Creative Cloud",
    "Photoshop",
    "Adobe Express",
    "Photography",
    "Premiere Pro",
    "Adobe Stock",
  ];

  const list2 = [
    "Creative Cloud for business",
    "Creative Cloud for enterprise",
    "Acrobat for Business",
  ];

  const list3 = [
    "Discounts for students and teachers",
    "Schools and universities",
    "Digital Learning Solutions",
  ];

  const list4 = ["Apps for iOS", "Apps for Android"];

  const list5 = [
    "What is Experience Cloud?",
    "Analytics",
    "Experience Manager",
    "Commerce",
    "Marketo Engage",
    "Workfront",
    "Terms of Use",
  ];

  const list6 = [
    "Download and install",
    "Help Centre",
    "Adobe Support Community",
    "Enterprise Support",
    "Genuine software",
  ];

  const list7 = ["Adobe Blog", "Adobe Developer"];

  const list8 = ["Log in to your account"];

  const list9 = [
    "About",
    "AI Overview",
    "Careers",
    "Newsroom",
    "Corporate responsibility",
    "Investor Relations",
    "Supply chain",
    "Trust Centre",
    "Events",
    "Diversity and inclusion",
    "Integrity",
  ];

  const FooterList = ({ heading, list }) => {
    return (
      <>
        <h1 className="font-semibold mb-4">{heading}</h1>
        <ul className="mb-6">
          {list.map((listElement) => (
            <li className="text-xs font-semibold mb-2">{listElement}</li>
          ))}
        </ul>
      </>
    );
  };
  return (
    <div style={{ background: "#fafafa" }}>
      <div className="flex justify-center">
        <div className="flex flex-row gap-28 pt-10 pb-8 mb-2">
          <div>
            <FooterList heading="Shop for" list={list1} />
          </div>
          <div>
            <FooterList heading="For business" list={list2} />
            <FooterList heading="For education" list={list3} />
            <FooterList heading="For mobile" list={list4} />
          </div>
          <div>
            <FooterList heading="Experience Cloud" list={list5} />
          </div>
          <div>
            <FooterList heading="Support" list={list6} />
            <FooterList heading="Resources" list={list7} />
            <FooterList heading="Adobe Account" list={list8} />
          </div>
          <div>
            <FooterList heading="Adobe" list={list9} />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center flex-row gap-4 items-center min-w-[1190px] border-b border-t border-black-300 py-2 mb-7">
          <h1 className="font-semibold">Featured Products</h1>
          <ul className="flex flex-row gap-5">
            <li className="text-sm">Adobe Acrobat Reader</li>
            <li className="text-sm">Adobe Express</li>
            <li className="text-sm">Photoshop</li>
            <li className="text-sm">Illustrator</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-sm text-center mb-3">
          Copyright © 2024 All rights reserved. / Privacy / Terms of Use /
          Cookie preferences / Do not sell my personal information
        </p>
      </div>
    </div>
  );
};

export default Footer;
