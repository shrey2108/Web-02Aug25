import Searchbox from "./Searchbox";
import Logo from "./Logo";
import Avatar from "./Avatar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { LogOut, User } from "lucide-react";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="p-4 flex items-center justify-between">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-1"><Searchbox /></div>
      <div className="flex-1 flex justify-end relative">
        {/* Avatar */}
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="cursor-pointer rounded-full"
        >
          <Avatar name={user.fullName} />
        </div>

        {/* Dropdown */}
        {open && (
          <div
            className="
                absolute top-full mt-2 w-60
                rounded-2xl bg-white
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                ring-1 ring-black/5
                overflow-hidden
            "
          >
            {/* User info */}
            <div className="px-5 py-4">
              <p className="text-sm font-semibold text-gray-900">
                {user.fullName}
              </p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>

            <div className="h-px bg-gray-100" />

            {/* Actions */}
            <button className="flex w-full items-center gap-3 px-5 py-3 text-sm hover:bg-gray-100">
              <User size={16} />
              Profile
            </button>

            <button
              onClick={() => dispatch(logout())}
              className="flex w-full items-center gap-3 px-5 py-3 text-sm text-red-600 hover:bg-red-50"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
