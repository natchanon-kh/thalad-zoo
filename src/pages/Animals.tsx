import { useState, useEffect } from "react";
import { X, Volume2 } from "lucide-react";
import DuskyLeafMonkeyImage from "../assets/DuskyLeafMonkey.jpg";

const AnimalGamePage = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);
  const [animalData, setAnimalData] = useState<Record<string, any>>({});
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

  const generateBoardGrid = () => {
    const items = ["Start", ...animalNames, "Finish"];
    const rows = isMobile ? 7 : 5;
    const cols = isMobile ? 6 : 8;
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

  const { grid: boardGrid, cols } = generateBoardGrid();

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
    } catch {
      setAnimalData((prev) => ({
        ...prev,
        [name]: { title: name, extract: "เกิดข้อผิดพลาด", thumbnail: null },
      }));
    }
    setLoading(false);
  };

  const handleAnimalClick = (name: string) => {
    setSelectedAnimal(name);
    if (!viewedAnimals.includes(name)) {
      setViewedAnimals([...viewedAnimals, name]);
    }
    fetchAnimalData(name);
  };

  const getImageSrc = (name: string) => {
    if (name === "ค่างแว่นถิ่นใต้") return DuskyLeafMonkeyImage;
    return animalData[name]?.thumbnail?.source;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 p-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-2">
          🌿 สารานุกรมสัตว์ 🌿
        </h1>
        <p className="text-emerald-700 text-lg md:text-xl">
          ผจญภัยไปกับเส้นทางบันไดงูแห่งการเรียนรู้กับสัตว์นานาชนิด!
        </p>
        {!gameStarted && (
          <div className="mt-4 p-3 bg-emerald-100 rounded-lg border border-emerald-300 max-w-md mx-auto">
            <p className="text-emerald-800 font-semibold">
              👆 คลิก START เพื่อเริ่มการผจญภัย!
            </p>
          </div>
        )}
      </div>

      {/* Game Board */}
      <div
        className="grid mx-auto gap-2 max-w-[90vw]"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {boardGrid.map((item, idx) => (
          <div
            key={idx}
            className={`aspect-square rounded-lg border-2 shadow-md overflow-hidden relative cursor-pointer flex items-center justify-center text-center text-xs md:text-sm font-semibold ${
              item === "Start"
                ? "bg-green-500 text-white"
                : item === "Finish"
                ? "bg-yellow-400 text-white"
                : animalNames.includes(item || "")
                ? "bg-white hover:bg-emerald-100"
                : "bg-transparent border-none shadow-none"
            }`}
            onClick={() => {
              if (item === "Start") setGameStarted(true);
              else if (animalNames.includes(item || ""))
                handleAnimalClick(item!);
            }}
          >
            {animalNames.includes(item || "") &&
            viewedAnimals.includes(item!) &&
            getImageSrc(item!) ? (
              <img
                src={getImageSrc(item!) || ""}
                alt={item!}
                className="w-full h-full object-cover"
              />
            ) : (
              <span
                className={`${
                  isMobile
                    ? "whitespace-normal"
                    : "whitespace-nowrap overflow-hidden text-ellipsis"
                } px-1 leading-tight`}
              >
                {item}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="text-center mt-6">
        <div className="inline-flex items-center gap-4 bg-white/90 rounded-full px-6 py-3 shadow border">
          <span className="text-emerald-800 font-semibold">
            🐾 ค้นพบแล้ว: {viewedAnimals.length} จาก {animalNames.length} ชนิด
          </span>
        </div>
      </div>

      {/* Modal */}
      {selectedAnimal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center p-4 bg-emerald-500 text-white rounded-t-2xl">
              <h2 className="text-lg md:text-2xl font-bold">
                🐾 {selectedAnimal}
              </h2>
              <button onClick={() => setSelectedAnimal(null)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin border-4 border-emerald-500 border-t-transparent rounded-full w-12 h-12 mx-auto mb-4"></div>
                  <p>กำลังโหลดข้อมูล...</p>
                </div>
              ) : (
                <>
                  {getImageSrc(selectedAnimal) && (
                    <img
                      src={getImageSrc(selectedAnimal)}
                      alt={selectedAnimal}
                      className="rounded-xl w-full max-h-80 object-cover"
                    />
                  )}
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-bold text-emerald-700 mb-2">
                      <Volume2 className="w-5 h-5" />
                      ข้อมูลเกี่ยวกับ {selectedAnimal}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {animalData[selectedAnimal]?.extract ||
                        "ไม่พบข้อมูลเพิ่มเติม"}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalGamePage;
