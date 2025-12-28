const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-9 w-9 rounded-xl bg-linear-to-br from-indigo-500 to-violet-500 grid place-items-center text-white font-bold shadow">
        C
      </div>
      <div>
        <div className="font-semibold">Chats</div>
        <div className="text-xs text-zinc-500">Text More</div>
      </div>
    </div>
  );
};

export default Logo;