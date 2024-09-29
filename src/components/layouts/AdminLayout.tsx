import { Outlet } from "react-router-dom";
import { SideBar } from "../ui";
import { useState } from "react";
import cn from "classnames";

export const AdminLayOut = () => {
  const [activeSidebar, setActiveSidebar] = useState<boolean>(false);

  return (
    <div className="bg-[#1a191f]">
      <main
        className={cn(
          "flex flex-wrap  min-h-screen md:text-[16px] text-[14px] md:pt-0 adminLayout relative",
          { active: activeSidebar }
        )}>
        <div className="blockSideBar absolute top-0 left-0 h-full bg-[#1a191f] z-10">
          {/* <SideBar
            activeSidebar={activeSidebar}
            setActiveSidebar={setActiveSidebar}
          /> */}
        </div>
        <div className="blockContent w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
