import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../api";
import Avatar from "./Avatar";
import { useDispatch } from "react-redux";
import { getOrStartConversations } from "../features/conversations/conversationThunk";


const Searchbox = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const handleUserClick = async (userId) => {
    try {
      await dispatch(getOrStartConversations(userId)).unwrap();
      setUsers([]);
      setSearch("");
    } catch (error) {
      alert("Api Error:", error)
    }
  }

  useEffect(() => {
    async function getUsers() {
      if(!search.trim()) return;

      const res = await api.get(`/users?q=${search}`);
      setUsers(res.data.data);
    }
    getUsers();
  }, [search])


  return (
    <div className="px-4">

      {/* Sidebar: Search box */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4" />
        <input
          onChange={changeHandler}
          type="text"
          placeholder="Search people"
          value={search}
          className="ps-8 pe-4 w-full rounded-2xl py-2 border border-zinc-200 outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* SEARCH RESULTS */}
        {search && users.length > 0 && (
          <div className="absolute z-50 mt-2 w-full bg-white border border-zinc-200 rounded-2xl shadow-lg max-h-64 overflow-y-auto">
            {users.map((user) => (
              <div
                key={user._id}
                onClick={() => handleUserClick(user._id)}
                className="flex items-center gap-3 p-3 hover:bg-zinc-50 cursor-pointer"
              >
                <Avatar name={user.fullName} />

                <div className="flex-1">
                  <div className="font-medium text-sm">{user.fullName}</div>
                  <div className="text-xs text-zinc-500">Start new chat</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {search && users.length === 0 && (
          <div className="absolute z-50 mt-2 w-full bg-white border border-zinc-200 rounded-2xl shadow-lg p-4 text-sm text-zinc-500">
            No users found
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbox;
