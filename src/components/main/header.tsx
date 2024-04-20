import { Avatar } from "../ui/avatar";
import { Bell } from "lucide-react";
export default function Header() {
  return (
    <>
      <div className="header  flex items-center justify-between">
        <div className="left flex items-center">
          <div className="avtr">
            <Avatar className=" size-12 border-2 border-black" />
          </div>
          <div className="texts pl-2">
            <p className=" font-thin">Welcome back</p>
            <p className="text-xl font-extrabold">Ashik Kabeer</p>
          </div>
        </div>
        <div className="bell">
          <Bell />
        </div>
      </div>
    </>
  );
}
