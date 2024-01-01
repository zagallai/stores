import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { FaSearch } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My Matjir",
  description: "An e-commerce platform to build your Online Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <nav className="bg-sky-500 shadow-md">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="text-white">
                Matjir
              </a>
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  className="py-1 px-2 border border-gray-300 rounded-full w-80 text-black"
                />
              </div>
              <a href="/cart" className="text-white mr-4">
                Cart
              </a>
              <a href="/login" className="text-white mr-4">
                Login
              </a>
            </div>
          </div>
        </nav>
        <div className="flex justify-center text-center bg-gray-200 py-1">
          <SubNavigation />
        </div>
        <div className="bg-gray-50">
          <Stores />
        </div>
        {children}
      </body>
    </html>
  );
}

function SubNavigation() {
  return (
    <nav className="">
      <div className="container mx-auto flex space-x-4">
        <a
          href="/products"
          className="text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 bg-white"
        >
          All Products
        </a>
        <a
          href="/products/popular"
          className="text-gray-800 hover:text-gray-600 rounded-md px-4 py-2 bg-white"
        >
          Popular
        </a>
        <a
          href="/products/trending"
          className="text-gray-800 hover:text-gray-600 rounded-2xl px-4 py-2 bg-white"
        >
          Trending
        </a>
        <a
          href="/products/home"
          className="text-gray-800 hover:text-gray-600 rounded-2xl px-4 py-2 bg-white"
        >
          Home Decor
        </a>
        <a
          href="/products/home"
          className="text-gray-800 hover:text-gray-600 rounded-2xl px-4 py-2 bg-white"
        >
          Women
        </a>
        <a
          href="/products/home"
          className="text-gray-800 hover:text-gray-600 rounded-2xl px-4 py-2 bg-white"
        >
          Men
        </a>
        <a
          href="/products/home"
          className="text-gray-800 hover:text-gray-600 rounded-2xl px-4 py-2 bg-white"
        >
          Kids
        </a>
      </div>
    </nav>
  );
}

function Stores() {
  const stores = [
    { id: "1", name: "Store one", products: ["Women", "Men", "Kids"] },
    { id: "2", name: "Store two", products: ["Women", "Home Decor", "Kids"] },
    { id: "3", name: "Store three", products: ["Women", "Men", "Kids"] },
    { id: "4", name: "Store four", products: ["Home Decor", "Men", "Kids"] },
    { id: "5", name: "Store five", products: ["Women", "Men", "Kids"] },
    { id: "6", name: "Store six", products: ["Women", "Men", "home Decor"] },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 m-4">
      {stores.map((store) => (
        <Store key={store.id} {...store} />
      ))}
    </div>
  );
}

function Store({ id, name, products }) {
  return (
    <Card key={id} className="p-30">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{products.join(",")}</p>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <div className="text-right">
            view
            <a
              href="/products/home"
              className="text-gray-800 hover:text-gray-600 rounded-2xl px-4 py-2 bg-white"
            ></a>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
