import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="flex relative flex-row justify-between px-[150px] py-3 items-center">
      <div>
        <ul className="flex flex-row justify-center items-center gap-5">
          <img className="w-[110px] h-auto" src="/images/logo.png" alt="" />
          <li className="group ">
            <button className="font-semibold py-4 px-2 focus:outline-none">
              Services
            </button>

            {/* Mega Menu Content */}
            <div className="absolute left-0 top-full  w-full bg-white shadow-lg border-t border-gray-200 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition duration-300 ease-in-out z-10">
              <div className="container mx-auto grid grid-cols-4 gap-8 p-8">
                {/* Column 1 */}
                <div>
                  <h3 className="font-bold text-lg mb-4">Design Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Graphic Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Web Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Logo Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        UI/UX Design
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Column 2 */}
                <div>
                  <h3 className="font-bold text-lg mb-4">Marketing Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        SEO Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Content Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Email Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Social Media
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Column 3 */}
                <div>
                  <h3 className="font-bold text-lg mb-4">
                    Development Services
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        App Development
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        E-commerce
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Custom Software
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Column 4 */}
                <div>
                  <h3 className="font-bold text-lg mb-4">Support Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Technical Support
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Consulting
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Training
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Managed Services
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="">
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-row justify-center items-center gap-5">
          <li>
            <Link to="/">Sign in</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
