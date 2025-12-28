import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../features/messages/messageThunk";
import { updateConversation } from "../features/conversations/conversationSlice";

const ChatInputs = ({ ac }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const textareaRef = useRef(null);

  const handleSend = () => {
    if (!text.trim() || !ac) return;

    dispatch(
      sendMessage({
        receiverId: ac.participants[0]._id,
        content: text,
        conversationId: ac._id,
      })
    ).then((action) => {
      dispatch(updateConversation(action.payload.conversation));
    });

    setText("");
  };

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = Math.min(el.scrollHeight, 160) + "px";
  }, [text]);

  return (
    <div className="max-w-3xl mx-auto flex items-end gap-2">
      <textarea
        rows={1}
        ref={textareaRef}
        className="max-h-40 outline-none flex-1 border border-zinc-200 rounded-2xl px-2 py-2 resize-none placeholder:text-zinc-400 text-zinc-900"
        placeholder="Write a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
      />
      <button
        onClick={handleSend}
        className="rounded-2xl bg-indigo-600 px-4 py-2 text-white"
      >
        <div className="flex items-center gap-2">
          <Send className="w-4 h-4" />
          <span>Send</span>
        </div>
      </button>
    </div>
  );
};

export default ChatInputs;
