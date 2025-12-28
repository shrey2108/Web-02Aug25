import { GRADS, cn, initials, hashColor } from "../utils/helpers";

const Avatar = ({ name = "?", size = 40 }) => {
  const grad = GRADS[hashColor(name)];
  const style = { width: size, height: size };
  return (
    <div
      className={cn(
        "flex justify-center items-center rounded-full bg-linear-to-br text-white font-semibold shadow",
        size >= 48 ? "text-base" : "text-sm",
        `from-50% ${grad}`
      )}
      style={style}
    >
      {initials(name)}
    </div>
  );
};

export default Avatar;
