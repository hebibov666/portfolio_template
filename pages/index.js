import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(()=>{
    AOS.init()
  })
  return (
    <main  className="w-full flex p-2 flex-col gap-[20px]">
      <Navbar/>
    <Sidebar/>
    <HomePage/>
    <Footer/>
    </main>
  );
}
