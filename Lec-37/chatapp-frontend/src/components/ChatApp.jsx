import { useContext, useEffect, useRef } from "react";
import Avatar from "./Avatar";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllConversations } from "../features/conversations/conversationThunk";
import { changeConversation, updateConversation } from "../features/conversations/conversationSlice";
import { cn, formatTime } from "../utils/helpers";
import { fetchMessages } from "../features/messages/messageThunk";
import Message from "./Message";
import ChatInputs from "./ChatInputs";
import { useSocket } from "../context/socketContext";
import { addMessage } from "../features/messages/messageSlice";
import toast from "react-hot-toast";
import CustomNotification from "./CustomNotification";

const ChatApp = () => {
  const { socket } = useSocket();

  const dispatch = useDispatch();
  const { conversationList, activeConversationId } = useSelector(
    (state) => state.conversations
  );
  const ac =
    conversationList.find((c) => c._id === activeConversationId) || null;

  const convo =
    useSelector((state) => state.messages).byConversationId[
      activeConversationId
    ] || null;
  const messages = convo?.list || [];

  const messageRef = useRef(null);
  const containerRef = useRef(null);
  const pageRef = useRef(1);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el || convo?.loading || !convo.hasMore) return;

    if (el.scrollTop === 0) {
      const prevScrollHeight = el.scrollHeight;

      pageRef.current += 1;

      dispatch(
        fetchMessages({
          conversationId: activeConversationId,
          page: pageRef.current,
        })
      ).then(() => {
        const newScrollHeight = el.scrollHeight;
        el.scrollTop = newScrollHeight - prevScrollHeight;
      });
    }
  };

  const handleNewMessage = ({conversation, message}) => {
    console.log({conversation, message})
    dispatch(addMessage(message));
    dispatch(updateConversation(conversation))

    if (activeConversationId !== message.conversationId) {
      toast.custom((t) => <CustomNotification t={t} message={message} />);
    }
  };

  useEffect(() => {
    if (!socket) return;

    socket.on("message:new", handleNewMessage);

    return () => {
      socket.off("message:new", handleNewMessage);
    };
  }, [socket, activeConversationId]);

  useEffect(() => {
    dispatch(getAllConversations());
  }, []);

  useEffect(() => {
    const el = messageRef.current;
    if (!el) return;
    el.scrollIntoView();
  }, [messages.length]);

  useEffect(() => {
    pageRef.current = 1;

    async function fun() {
      if (activeConversationId) {
        await dispatch(
          fetchMessages({ conversationId: activeConversationId, page: 1 })
        ).unwrap();
      }
    }
    fun();
  }, [activeConversationId]);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 min-h-0 border-t border-zinc-200">
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
                  c._id === activeConversationId && "bg-zinc-100/80"
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
          <main className="flex flex-1 flex-col">
            {/* Chat Header */}
            <div className="p-3 bg-white/70 shadow-xs">
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

            {/* Messages */}
            <div
              ref={containerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto px-3 py-4 md:px-6 md:py-6"
            >
              <div className="max-w-3xl mx-auto space-y-4">
                {messages?.map((m) => (
                  <Message key={m._id} msg={m} />
                ))}
                <div ref={messageRef} />
              </div>
            </div>

            {/* Msg Inputs */}
            <div className="border-t border-zinc-200 p-3">
              <ChatInputs ac={ac} />
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
