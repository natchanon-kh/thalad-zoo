import { useState, useEffect } from "react";
import AnimalCard from "../components/AnimalCard";
import AnimalModal from "../components/AnimalModal";
import { X, Volume2, Trophy, MapPin } from "lucide-react";
import DuskyLeafMonkeyImage from "../assets/DuskyLeafMonkey.jpg";

type WikiAnimalData = {
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
  } | null;
};

const AnimalGamePage = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);
  const [animalData, setAnimalData] = useState<Record<string, WikiAnimalData>>(
    {}
  );
  const [loading, setLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [viewedAnimals, setViewedAnimals] = useState<string[]>([]);

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

  // โหลดข้อมูลจาก localStorage เมื่อ component mount
  useEffect(() => {
    // โหลด viewedAnimals
    const storedViewedAnimals = localStorage.getItem("viewedAnimals");
    if (storedViewedAnimals) {
      try {
        const parsed = JSON.parse(storedViewedAnimals);
        if (Array.isArray(parsed)) {
          setViewedAnimals(parsed);
        }
      } catch (error) {
        console.error("❌ Error parsing viewedAnimals:", error);
      }
    }

    // โหลด animalData
    const storedAnimalData = localStorage.getItem("animalData");
    if (storedAnimalData) {
      try {
        const parsed = JSON.parse(storedAnimalData);
        if (parsed && typeof parsed === "object") {
          setAnimalData(parsed);
        }
      } catch (error) {
        console.error("❌ Error parsing animalData:", error);
      }
    }

    // โหลด gameStarted
    const storedGameStarted = localStorage.getItem("gameStarted");
    if (storedGameStarted === "true") {
      setGameStarted(true);
    }
  }, []); // เรียกครั้งเดียวตอน mount

  //บันทึกข้อมูลไป localStorage เมื่อมีการเปลี่ยนแปลง
  useEffect(() => {
    if (viewedAnimals.length > 0) {
      localStorage.setItem("viewedAnimals", JSON.stringify(viewedAnimals));
    }
  }, [viewedAnimals]);

  useEffect(() => {
    if (Object.keys(animalData).length > 0) {
      localStorage.setItem("animalData", JSON.stringify(animalData));
    }
  }, [animalData]);

  useEffect(() => {
    localStorage.setItem("gameStarted", gameStarted.toString());
  }, [gameStarted]);

  const generateBoardGrid = () => {
    const items = ["Start", ...animalNames, "Finish"];
    const cols = isMobile ? 3 : 8;
    const rows = Math.ceil(items.length / cols);
    const grid = Array(rows * cols).fill(null);

    for (let i = 0; i < items.length; i++) {
      grid[i] = items[i];
    }

    return { grid, rows, cols };
  };

  const { grid: boardGrid, rows, cols } = generateBoardGrid();

  const fetchAnimalData = async (name: string) => {
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
    } catch (error) {
      console.error("❌ Error fetching data for:", name, error);
      setAnimalData((prev) => ({
        ...prev,
        [name]: { title: name, extract: "เกิดข้อผิดพลาด", thumbnail: null },
      }));
    }
    setLoading(false);
  };

  const handleAnimalClick = (name: string) => {
    // ป้องกันการคลิกถ้ายังไม่เริ่มเกม
    if (!gameStarted) return;

    setSelectedAnimal(name);

    if (!viewedAnimals.includes(name)) {
      setViewedAnimals((prev) => [...prev, name]);
    }

    fetchAnimalData(name);
  };

  const handleFinishClick = () => {
    // Reset การ์ดทั้งหมดกลับเป็นชื่อสัตว์
    setViewedAnimals([]);
    setGameStarted(false);
    // เคลียร์ localStorage
    localStorage.removeItem("viewedAnimals");
    localStorage.removeItem("gameStarted");
    localStorage.removeItem("animalData");
    setAnimalData({});
  };

  const getImageSrc = (name: string): string | undefined => {
    if (name === "ค่างแว่นถิ่นใต้") return DuskyLeafMonkeyImage;
    const animal = animalData[name];
    const imageSrc = animal?.thumbnail?.source;
    return imageSrc;
  };

  const closeModal = () => {
    setSelectedAnimal(null);
  };

  const getBlockStyle = (item: string) => {
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
      {/* Debug Info
      <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4 text-sm">
        <h3 className="font-bold text-yellow-800 mb-2">🐛 Debug Info:</h3>
        <p>
          <strong>Game Started:</strong> {gameStarted ? "Yes" : "No"}
        </p>
        <p>
          <strong>Viewed Animals:</strong> {viewedAnimals.length} /{" "}
          {animalNames.length}
        </p>
        <p>
          <strong>Animal Data Loaded:</strong> {Object.keys(animalData).length}
        </p>
        <p>
          <strong>Viewed List:</strong> {viewedAnimals.join(", ") || "None"}
        </p>
      </div> */}

      {/* Header */}
      <div className="text-center mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-2">
          🌿 สารานุกรมสัตว์ 🌿
        </h1>
        <p className="text-emerald-700 text-sm sm:text-lg md:text-xl font-medium px-4 text-center leading-snug">
          ผจญภัยไปกับเส้นทางแห่งการเรียนรู้ข้อมูลสัตว์นานาชนิด!
        </p>

        {!gameStarted && (
          <div className="mt-3 sm:mt-4 p-3 md:p-4 bg-emerald-100 rounded-lg border-2 border-emerald-300 max-w-sm sm:max-w-md mx-auto">
            <p className="text-emerald-800 font-semibold text-sm sm:text-base md:text-lg">
              👆 คลิก START เพื่อเริ่มการผจญภัย!
            </p>
          </div>
        )}
      </div>

      {/* Game Board */}
      <div
        className="grid mx-auto gap-2 max-w-[90vw] mb-4 sm:mb-6"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {boardGrid.map((item, index) => (
          <div key={index}>
            {item === "Start" && (
              <div
                onClick={() => setGameStarted(true)}
                className={`
            aspect-square rounded-lg border-2 shadow-md overflow-hidden relative
            flex items-center justify-center text-center
            transform transition-all duration-300
            ${getBlockStyle(item)}
            cursor-pointer hover:scale-105 hover:z-20 active:scale-95
            group
          `}
              >
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
              </div>
            )}

            {item === "Finish" && (
              <div
                onClick={handleFinishClick}
                className={`
            aspect-square rounded-lg border-2 shadow-md overflow-hidden relative
            flex items-center justify-center text-center
            transform transition-all duration-300
            ${getBlockStyle(item)}
            cursor-pointer hover:scale-105 hover:z-20 active:scale-95
            group
          `}
              >
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
              </div>
            )}

            {animalNames.includes(item) && (
              <AnimalCard
                name={item}
                isViewed={viewedAnimals.includes(item)}
                imageSrc={getImageSrc(item)}
                isMobile={isMobile}
                onClick={() => handleAnimalClick(item)}
                gameStarted={gameStarted}
                getBlockStyle={getBlockStyle}
              />
            )}

            {!item && <div></div>}
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
        <AnimalModal
          selectedAnimal={selectedAnimal}
          onClose={closeModal}
          loading={loading}
          data={animalData[selectedAnimal] || null}
          imageSrc={getImageSrc(selectedAnimal)}
        />
      )}
    </div>
  );
};

export default AnimalGamePage;
