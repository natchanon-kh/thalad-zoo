import React, { useState, useEffect } from "react";
import { X, Volume2, Star, Trophy, MapPin } from "lucide-react";
import DuskyLeafMonkeyImage from "../assets/DuskyLeafMonkey.jpg";

const AnimalGamePage = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [animalData, setAnimalData] = useState({});
  const [loading, setLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [viewedAnimals, setViewedAnimals] = useState([]);

  const animalNames = [
    "กวางม้า",
    "กวางรูซ่า",
    "กระจงหนู",
    "กระรอก",
    "ไก่ต๊อก",
    "ไก่ฟ้าสีทอง",
    "ค่างแว่นถิ่นใต้",
    "จระเข้น้ำจืด",
    "ชะนีมือขาว",
    "ชะมดแผงหางปล้อง",
    "ตะกวด",
    "ตัวนิ่ม",
    "เต่าบก",
    "เต่านา",
    "นกกก",
    "นกคาสโซวารี่",
    "นกเงือก",
    "นกเงือกดำ",
    "นกปรอดหัวโขน",
    "นกเป็ดน้ำ",
    "นกยูงอินเดีย",
    "นกเลิฟเบิร์ด",
    "นกหงส์หยก",
    "นากเล็กเล็บสั้น",
    "งูเหลือม",
    "แพะ",
    "แมวดาว",
    "แรคคูน",
    "เม่นใหญ่",
    "เหยี่ยวแดง",
    "วัวแดง",
    "ลิงกัง",
    "ลิงแสม",
    "ลิงเสน",
    "ลิงลม",
    "หมีขอ",
    "หมีหมา",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const generateBoardGrid = () => {
    const items = ["Start", ...animalNames, "Finish"];
    const rows = isMobile ? 13 : 5;
    const cols = isMobile ? 3 : 8;
    const grid = Array(rows * cols).fill(null);
    let i = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (i < items.length) {
          const index = r * cols + (r % 2 === 0 ? c : cols - 1 - c);
          grid[index] = items[i];
          i++;
        }
      }
    }
    return { grid, rows, cols };
  };

  const { grid: boardGrid, rows, cols } = generateBoardGrid();

  const fetchAnimalData = async (name) => {
    if (animalData[name]) return;
    setLoading(true);
    try {
      const encoded = encodeURIComponent(name);
      const res = await fetch(
        `https://th.wikipedia.org/api/rest_v1/page/summary/${encoded}`
      );
      const data = await res.json();
      setAnimalData((prev) => ({
        ...prev,
        [name]: res.ok
          ? data
          : { title: name, extract: "ไม่พบข้อมูล", thumbnail: null },
      }));
    } catch {
      setAnimalData((prev) => ({
        ...prev,
        [name]: { title: name, extract: "เกิดข้อผิดพลาด", thumbnail: null },
      }));
    }
    setLoading(false);
  };

  const handleAnimalClick = (name) => {
    // ป้องกันการคลิกถ้ายังไม่เริ่มเกม
    if (!gameStarted) return;

    setSelectedAnimal(name);
    if (!viewedAnimals.includes(name)) {
      setViewedAnimals([...viewedAnimals, name]);
    }
    fetchAnimalData(name);
  };

  const handleFinishClick = () => {
    // Reset การ์ดทั้งหมดกลับเป็นชื่อสัตว์
    setViewedAnimals([]);
    setGameStarted(false);
  };

  const getImageSrc = (name) => {
    if (name === "ค่างแว่นถิ่นใต้") return DuskyLeafMonkeyImage;
    return animalData[name]?.thumbnail?.source;
  };

  const closeModal = () => {
    setSelectedAnimal(null);
  };

  const getBlockStyle = (item) => {
    if (item === "Start")
      return "bg-gradient-to-br from-green-400 to-green-600 text-white border-green-500";
    if (item === "Finish")
      return "bg-gradient-to-br from-yellow-400 to-orange-500 text-white border-yellow-500";
    if (animalNames.includes(item))
      return "bg-white/80 backdrop-blur-sm text-slate-700 border-white/50 hover:bg-white/90";
    return "bg-transparent border-none shadow-none";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-2 sm:p-4">
      {/* Header */}
      <div className="text-center mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-2">
          🌿 สารานุกรมสัตว์ 🌿
        </h1>
        <p className="text-emerald-700 text-base sm:text-lg md:text-xl font-medium px-4">
          ผจญภัยไปกับเส้นทางบันไดงูแห่งการเรียนรู้ข้อมูลสัตว์นานาชนิด!
        </p>
        {!gameStarted && (
          <div className="mt-3 sm:mt-4 p-3 md:p-4 bg-emerald-100 rounded-lg border-2 border-emerald-300 max-w-sm sm:max-w-md mx-auto">
            <p className="text-emerald-800 font-semibold text-sm sm:text-base md:text-lg">
              👆 คลิก START เพื่อเริ่มการผจญภัย!
            </p>
          </div>
        )}
      </div>

      {/* Game Board - แบบเต็มหน้า */}
      <div
        className="grid mx-auto gap-2 max-w-[90vw] mb-4 sm:mb-6"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {boardGrid.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (item === "Start") setGameStarted(true);
              else if (item === "Finish") handleFinishClick();
              else if (animalNames.includes(item)) handleAnimalClick(item);
            }}
            className={`
              aspect-square rounded-lg border-2 shadow-md overflow-hidden relative
              flex items-center justify-center text-center
              transform transition-all duration-300
              ${getBlockStyle(item)}
              ${
                item && (item === "Start" || item === "Finish" || gameStarted)
                  ? "cursor-pointer hover:scale-105 hover:z-20 active:scale-95"
                  : item && !gameStarted
                  ? "cursor-not-allowed opacity-60"
                  : ""
              }
              ${item === "Start" || item === "Finish" ? "hover:shadow-xl" : ""}
              group
            `}
          >
            {item === "Start" && (
              <div className="text-center p-1">
                <MapPin
                  className={`${
                    isMobile ? "w-4 h-4" : "w-6 h-6 md:w-8 md:h-8"
                  } text-white mx-auto mb-0.5`}
                />
                <span
                  className={`${
                    isMobile ? "text-xs" : "text-sm md:text-base"
                  } font-bold text-white`}
                >
                  START
                </span>
              </div>
            )}

            {item === "Finish" && (
              <div className="text-center p-1">
                <Trophy
                  className={`${
                    isMobile ? "w-4 h-4" : "w-6 h-6 md:w-8 md:h-8"
                  } text-white mx-auto mb-0.5`}
                />
                <span
                  className={`${
                    isMobile ? "text-xs" : "text-sm md:text-base"
                  } font-bold text-white`}
                >
                  FINISH
                </span>
              </div>
            )}

            {animalNames.includes(item) && (
              <>
                {viewedAnimals.includes(item) && getImageSrc(item) ? (
                  <>
                    <img
                      src={getImageSrc(item)}
                      alt={item}
                      className="w-full h-full object-cover"
                    />
                    {/* แสดงชื่อสัตว์เมื่อ hover เฉพาะตอนที่เป็นรูปภาพแล้ว */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span
                        className={`text-white ${
                          isMobile ? "text-xs" : "text-sm"
                        } font-bold leading-tight`}
                      >
                        {item}
                      </span>
                    </div>
                  </>
                ) : (
                  <span
                    className={`${
                      isMobile ? "text-xs" : "text-xs md:text-sm"
                    } font-semibold text-slate-800 leading-tight px-1 ${
                      isMobile
                        ? "whitespace-normal"
                        : "whitespace-nowrap overflow-hidden text-ellipsis"
                    }`}
                  >
                    {item}
                  </span>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="text-center px-2">
        <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/90 backdrop-blur-sm rounded-2xl px-3 sm:px-4 md:px-6 py-2 md:py-3 shadow-lg border border-emerald-200">
          <div className="flex items-center space-x-2">
            <span className="text-lg sm:text-xl md:text-2xl">🐾</span>
            <span className="font-semibold text-emerald-800 text-sm sm:text-base md:text-lg">
              สัตว์ทั้งหมด: {animalNames.length} ชนิด
            </span>
          </div>
          <div className="w-full h-px sm:w-px sm:h-4 md:h-6 bg-emerald-300 sm:block"></div>
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
            <span className="font-semibold text-emerald-800 text-sm sm:text-base md:text-lg">
              ค้นพบแล้ว: {viewedAnimals.length} ชนิด
            </span>
          </div>
        </div>
      </div>

      {/* Animal Info Modal */}
      {selectedAnimal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 sm:p-6 rounded-t-2xl sm:rounded-t-3xl">
              <div className="flex justify-between items-start">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-start flex-1 pr-2">
                  <span className="mr-2 sm:mr-3 text-xl sm:text-2xl md:text-3xl">
                    🐾
                  </span>
                  <span className="leading-tight">{selectedAnimal}</span>
                </h2>
                <button
                  onClick={closeModal}
                  className="p-1 sm:p-2 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
                >
                  <X className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              {loading ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="animate-spin w-8 h-8 sm:w-12 sm:h-12 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    กำลังโหลดข้อมูล...
                  </p>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  {getImageSrc(selectedAnimal) && (
                    <div className="text-center">
                      <img
                        src={getImageSrc(selectedAnimal)}
                        alt={selectedAnimal}
                        className="max-w-full h-auto max-h-64 sm:max-h-80 md:max-h-96 object-contain rounded-xl sm:rounded-2xl shadow-lg mx-auto"
                      />
                    </div>
                  )}

                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                      <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2 sm:mr-3 text-emerald-500 flex-shrink-0" />
                      <span className="leading-tight">
                        ข้อมูลเกี่ยวกับ {selectedAnimal}
                      </span>
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                      {(animalData[selectedAnimal] &&
                        animalData[selectedAnimal].extract) ||
                        "ไม่พบข้อมูลเพิ่มเติม"}
                    </p>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={closeModal}
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                    >
                      เรียนรู้ต่อไป! 🚀
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalGamePage;
