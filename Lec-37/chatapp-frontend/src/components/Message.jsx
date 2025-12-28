import { useSelector } from "react-redux";
import { formatTime } from "../utils/helpers";
import Avatar from "./Avatar";

const Message = ({ msg }) => {
  const { user } = useSelector((state) => state.auth);
  const isMine = msg.from._id === user.id;

  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
      <div className="flex items-end gap-2 max-w-[80%]">
        {/* Avatar ONLY for received messages */}
        {!isMine && <Avatar name={msg.from?.fullName?.split(" ")[0]} size={32} />}

        {/* Message bubble */}
        <div
          className={`
              px-3 py-2 text-sm shadow-sm
              rounded-2xl
              ${
                isMine
                  ? "rounded-br-md bg-linear-to-br from-indigo-600 to-violet-600 text-white"
                  : "rounded-bl-md border border-zinc-200/60"
              }
          `}
        >
          <p>{msg.content}</p>

          <p
            className={`
              text-[10px] mt-1
              ${isMine ? "text-white/80" : "text-zinc-500"}
            `}
          >
            {formatTime(msg.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
