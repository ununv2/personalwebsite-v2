import Image from "next/image";
import Header from "./sections/Header";
import Profile from "./sections/Profile";
import Project from "./sections/Project";
export default function Home() {
  return (
    <div className="">
      <Header/>
      <div className="min-h-screen h-full">
        <Profile/>
      </div>
      <div className="min-h-screen h-full bg-orange-500/20">
        <Project/>
      </div>
    </div>
  );
}
