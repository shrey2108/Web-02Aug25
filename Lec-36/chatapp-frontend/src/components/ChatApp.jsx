import { useEffect } from "react";
import Avatar from "./Avatar";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllConversations } from "../features/conversations/conversationThunk";
import { changeConversation } from "../features/conversations/conversationSlice";
import { cn, formatTime } from "../utils/helpers";

const ChatApp = () => {
  const dispatch = useDispatch();
  const { conversationList, activeConversationId } = useSelector(
    (state) => state.conversations
  );
  const ac =
    conversationList.find((c) => c._id === activeConversationId) || null;

  useEffect(() => {
    dispatch(getAllConversations());
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 border-t border-zinc-200">
        {/* SIDEBAR */}
        <aside className="w-90 border-r border-zinc-200 flex flex-col h-full bg-white">
          {/* Sidebar: Conversation heading */}
          <div className="mt-2 mb-2 px-4 text-xs uppercase tracking-wide text-zinc-500">
            Conversations
          </div>

          {/* Sidebar: List of Conversations */}
          <div className="px-4 pb-4 flex-1 overflow-y-auto">
            {conversationList.map((c) => (
              <div
                key={c._id}
                onClick={() => {
                  dispatch(changeConversation(c._id));
                }}
                className={cn(
                  "select-none border border-zinc-200 hover:bg-zinc-100/80 rounded-2xl flex items-center p-3 gap-3 mb-2",
                  c._id === activeConversationId && "bg-zinc-100/80",
                )}
              >
                <div>
                  <Avatar name={c.participants[0].fullName} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span>{c.participants[0].fullName}</span>
                    <span className="text-xs text-zinc-500">
                      {formatTime(c.updatedAt)}
                    </span>
                  </div>
                  <div className="text-sm text-zinc-600">
                    {c.lastMessage?.content || "No messages yet"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {ac ? (
          <main className="flex flex-col">
            {/* Chat Header */}
            <div className="p-3 bg-white/70">
              <div className="flex items-center gap-3">
                <Avatar name={ac.participants[0].fullName} />
                <div>
                  <div className="font-semibold">
                    {ac.participants[0].fullName}
                  </div>
                  <div className="text-green-500 text-xs">Online</div>
                </div>
              </div>
            </div>
          </main>
        ) : (
          <main className="flex items-center justify-center flex-1">
            <div className="text-2xl">No chat selected</div>
          </main>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
