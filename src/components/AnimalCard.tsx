type AnimalCardProps = {
  name: string;
  isViewed: boolean;
  imageSrc?: string;
  isMobile: boolean;
  onClick: () => void;
  gameStarted: boolean;
  getBlockStyle: (name: string) => string;
};

const AnimalCard = ({
  name,
  isViewed,
  imageSrc,
  isMobile,
  onClick,
  gameStarted,
  getBlockStyle,
}: AnimalCardProps) => {
  const isClickable = gameStarted;

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={`
        aspect-square rounded-lg border-2 shadow-md overflow-hidden relative
        flex items-center justify-center text-center
        transform transition-all duration-300
        ${getBlockStyle(name)}
        ${
          isClickable
            ? "cursor-pointer hover:scale-105 hover:z-20 active:scale-95"
            : "cursor-not-allowed opacity-60"
        }
        group
      `}
    >
      {isViewed && imageSrc ? (
        <>
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span
              className={`text-white ${
                isMobile ? "text-xs" : "text-sm"
              } font-bold leading-tight`}
            >
              {name}
            </span>
          </div>
        </>
      ) : (
        <div className="text-center p-1 w-full">
          <div
            className={`${
              isMobile ? "w-10 h-10" : "w-8 h-8 md:w-12 md:h-12"
            } bg-emerald-100 rounded-full flex items-center justify-center mb-1 mx-auto`}
          >
            <span className={"text-base md:text-lg"}>🐾</span>
          </div>
          <span
            className={`${
              isMobile ? "text-xs" : "text-xs md:text-sm"
            } font-semibold text-slate-800 leading-tight${
              isMobile
                ? " whitespace-normal"
                : " whitespace-nowrap overflow-hidden text-ellipsis"
            }`}
          >
            {name}
          </span>
        </div>
      )}
    </div>
  );
};

export default AnimalCard;
