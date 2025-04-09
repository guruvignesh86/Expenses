import { useState } from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import { Menu } from "lucide-react";

const Sidebar = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Burger Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-gray-200 rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar with smooth transition */}
      <div
        className={`fixed left-0 top-0 h-full w-1/5 border-r-2 border-gray-200 bg-white shadow-md flex flex-col items-center p-4 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="mb-8">
      
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        {/* <Colors handleChange={handleChange} /> */}
      </div>
    </>
  );
};

export default Sidebar;


// import { useState } from "react";
// import Category from "./Category/Category";
// import Price from "./Price/Price";
// import Colors from "./Colors/Colors";
// import { Menu } from "lucide-react";

// const Sidebar = ({ handleChange }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Burger Button */}
//       <button
//         className="fixed top-4 left-4 z-50 p-2 bg-gray-200 rounded-md shadow-md"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <Menu size={24} />
//       </button>

//       {/* Sidebar */}
//       {isOpen && (
//         <div className="fixed left-0 top-0 h-full w-1/5 border-r-2 border-gray-200 bg-white shadow-md flex flex-col items-center p-4">
//           <div className="mb-8">
     
//           </div>
//           <Category handleChange={handleChange} />
//           <Price handleChange={handleChange} />
//           {/* <Colors handleChange={handleChange} /> */}
//         </div>
//       )}
//     </>
//   );
// };

// export default Sidebar;


// import Category from "./Category/Category";
// import Price from "./Price/Price";
// import Colors from "./Colors/Colors";
// import "./Sidebar.css";

// const Sidebar = ({ handleChange }) => {
//   return (
//     <>
//       <section className="sidebar">
//         <div className="logo-container">
//           <h1>🛒</h1>
//         </div>
//         <Category handleChange={handleChange} />
//         <Price handleChange={handleChange} />
//         {/* <Colors handleChange={handleChange} /> */}
//       </section>
//     </>
//   );
// };

// export default Sidebar;
