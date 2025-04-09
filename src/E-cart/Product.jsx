import { useState } from "react";
import Button from "./Button";
import { Card,CardHeader, CardContent, CardFooter } from "./Card";
import { Menu } from "lucide-react";
import SidebarMenu from "./Menu";
const products = [
  { id: 1, name: "Product 1", price: 20, image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D" },
  { id: 2, name: "Product 2", price: 50, image: "https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D" },
  { id: 3, name: "Product 3", price: 10, image: "https://plus.unsplash.com/premium_photo-1684445034959-b3faeb4597d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D" },
  { id: 4, name: "Product 4", price: 80, image: "https://images.unsplash.com/photo-1617850687361-a07b256ff259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpbmluZyUyMHRhYmxlfGVufDB8fDB8fHww" },
  { id: 5, name: "Product 5", price: 30, image: "https://images.unsplash.com/photo-1657524398377-567034729507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpbmluZyUyMHRhYmxlfGVufDB8fDB8fHww" },
  { id: 6, name: "Product 6", price: 60, image: "https://plus.unsplash.com/premium_photo-1681487772142-e97e8c90a6c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRpbmluZyUyMHRhYmxlfGVufDB8fDB8fHww" },
  { id: 7, name: "Product 7", price: 90, image: "https://images.unsplash.com/photo-1554295405-abb8fd54f153?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpbmluZyUyMHRhYmxlfGVufDB8fDB8fHww" },
  { id: 8, name: "Product 8", price: 40, image: "https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpbmluZyUyMHRhYmxlfGVufDB8fDB8fHww" },
  { id: 9, name: "Product 9", price: 70, image: "https://plus.unsplash.com/premium_photo-1676321688723-72ddb32096cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRpbmluZyUyMHRhYmxlfGVufDB8fDB8fHww" },
];
export default function ProductGrid() {
    const [sortOrder, setSortOrder] = useState("none");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  
    const sortedProducts = [...products].sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });
    
  
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
   <button
  className="p-2 bg-gray-200 rounded-md fixed top-4 left-4 z-50"
  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
>
  <Menu size={24} />
</button>

  
<div className={`fixed top-0 left-0 h-full w-56 bg-white shadow-xl transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-56"} transition-transform duration-300`}>
  <h2 className="text-lg font-semibold mb-2 mt-20 ml-5">Sort by Price</h2>
  <div className="flex flex-col gap-2">
    <label className="flex items-center gap-2 ml-5">
      <input
        type="radio"
        name="sortOrder"
        value="lowToHigh"
        checked={sortOrder === "lowToHigh"}
        onChange={() => setSortOrder("lowToHigh")}
      />
      Low to High
    </label>
    <label className="flex items-center gap-2 ml-5">
      <input
        type="radio"
        name="sortOrder"
        value="highToLow"
        checked={sortOrder === "highToLow"}
        onChange={() => setSortOrder("highToLow")}
      />
      High to Low
    </label>
  </div>
</div>

  
  <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 transition-all duration-300 ${isSidebarOpen ? "ml-56" : "ml-0"} `}>

          {sortedProducts.map((product) => (
            <Card key={product.id} className="shadow-lg rounded-lg bg-white mb-2">
              <CardHeader className="flex justify-center p-4">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              </CardHeader>
              <CardContent className="text-center p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
              </CardContent>
              <CardFooter className="p-4 flex justify-center">
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  