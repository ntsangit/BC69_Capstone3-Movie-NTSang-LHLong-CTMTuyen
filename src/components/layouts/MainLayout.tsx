// rafc
import { Header } from "../ui";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="mt-24">
        <Outlet />
      </main>

      {/* Footer */}
    </div>
  );
};
