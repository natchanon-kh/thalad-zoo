export default function Home() {
  return (
    <div className="min-h flex flex-col">
      <div className="bg-stone-100">
        {/* Hero Section */}
        <section className="relative min-h-96 bg-gradient-to-br from-green-500 via-green-600 to-green-700 overflow-hidden">
          {/* Forest silhouette background */}
          <div className="absolute inset-0 bg-gradient-to-t from-green-800 via-transparent to-transparent opacity-30"></div>

          {/* Tree silhouettes */}
          <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,120 C200,60 400,80 600,40 C800,80 1000,60 1200,120 Z"
                fill="rgba(0,0,0,0.3)"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              สวนสัตว์เปิดท่าลาด
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w mx-auto leading-relaxed">
              ขอต้อนรับสู่สวนสัตว์จังหวัดนครศรีธรรมราชรวมธรรมชาติและสัตว์นานาชนิดสำหรับครอบครัวและนักท่องเที่ยว
            </p>
          </div>

          {/* Curved bottom */}
          <div className="absolute bottom-0 w-full">
            <svg
              className="w-full h-12 md:h-20"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
                fill="rgb(245 245 244)"
              />
            </svg>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-stone-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
                  ยินดีต้อนรับ
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  สวนสัตว์เปิดท่าลาดตั้งอยู่ในจังหวัดนครศรีธรรมราช
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  เป็นสถานที่ท่องเที่ยวที่ส่งเสริมการเรียนรู้เกี่ยวกับสัตว์และธรรมชาติ
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  พร้อมพื้นที่พักผ่อนร่มรื่น เหมาะสำหรับทุกวัย
                </p>
              </div>

              {/* Right side - Elephant illustration */}
              <div className="flex justify-center">
                <img src="src\assets\elephant_home.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
