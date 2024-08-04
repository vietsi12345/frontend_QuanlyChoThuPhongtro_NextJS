"use client"
import Image from "next/image";
import { Header } from "./homepage/Header";
import { Search } from "./homepage/Search";
import Provice from "./homepage/Provice";
import ListHome from "./homepage/ListHome";
import Contact from "./homepage/Contact";
import Info from "./homepage/Info";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByJwt } from "@/redux/auth/Action";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const jwt = typeof window !== 'undefined' ? localStorage.getItem("jwt") : null;
  // console.log(jwt)
  useEffect(() => {
    dispatch(getUserByJwt(jwt))
  }, [jwt])
  console.log(user)
  return (
    <main className="bg-[#F5F5F5] flex flex-col items-center h-full w-full">
      <Header />
      <div className='w-full flex flex-col items-center gap-3'>
        <div className='w-full flex flex-col items-center justify-center'>
          <Search />
          <Provice />
          <ListHome />
        </div>
      </div>
      <Contact />
      <Info />
    </main>
  );
}
