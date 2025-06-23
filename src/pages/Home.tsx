export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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
              สวนสัตว์จังหวัดนครศรีธรรมราชรวมธรรมชาติและสัตว์ป่านานาชนิดสำหรับครอบครัวและนักท่องเที่ยว
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
                <div className="relative">
                  {/* Elephant SVG */}
                  <svg
                    width="300"
                    height="200"
                    viewBox="0 0 300 200"
                    className="drop-shadow-lg"
                  >
                    {/* Ground */}
                    <ellipse
                      cx="150"
                      cy="180"
                      rx="120"
                      ry="15"
                      fill="#a3d977"
                      opacity="0.7"
                    />

                    {/* Elephant body */}
                    <ellipse cx="150" cy="130" rx="80" ry="45" fill="#8B8B8B" />

                    {/* Elephant head */}
                    <circle cx="150" cy="85" r="35" fill="#8B8B8B" />

                    {/* Elephant trunk */}
                    <path
                      d="M 120 100 Q 100 120 110 140 Q 115 150 125 145"
                      fill="none"
                      stroke="#8B8B8B"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />

                    {/* Elephant legs */}
                    <rect
                      x="120"
                      y="160"
                      width="12"
                      height="25"
                      fill="#8B8B8B"
                      rx="6"
                    />
                    <rect
                      x="140"
                      y="160"
                      width="12"
                      height="25"
                      fill="#8B8B8B"
                      rx="6"
                    />
                    <rect
                      x="160"
                      y="160"
                      width="12"
                      height="25"
                      fill="#8B8B8B"
                      rx="6"
                    />
                    <rect
                      x="180"
                      y="160"
                      width="12"
                      height="25"
                      fill="#8B8B8B"
                      rx="6"
                    />

                    {/* Elephant ears */}
                    <ellipse
                      cx="130"
                      cy="85"
                      rx="20"
                      ry="25"
                      fill="#777"
                      transform="rotate(-15 130 85)"
                    />
                    <ellipse
                      cx="170"
                      cy="85"
                      rx="20"
                      ry="25"
                      fill="#777"
                      transform="rotate(15 170 85)"
                    />

                    {/* Elephant eye */}
                    <circle cx="145" cy="78" r="3" fill="#333" />

                    {/* Elephant tusk */}
                    <path
                      d="M 140 95 L 135 105"
                      stroke="#FFF"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 160 95 L 165 105"
                      stroke="#FFF"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* Elephant tail */}
                    <path
                      d="M 220 130 Q 240 135 235 150"
                      fill="none"
                      stroke="#8B8B8B"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
