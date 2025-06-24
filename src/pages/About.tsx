import React from "react";
import { Users, Award, Heart, MapPin, Calendar, Star } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "XX+", label: "สัตว์ป่า", icon: "🦁" },
    { number: "XX+", label: "สายพันธุ์", icon: "🐘" },
    { number: "XX+", label: "ปีของประสบการณ์", icon: "📅" },
    { number: "XX+", label: "ผู้เยือนต่อปี", icon: "👥" },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: "การอนุรักษ์",
      description: "เราทุ่มเทเพื่อการอนุรักษ์สัตว์ป่าและการปกป้องระบบนิเวศ",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "การศึกษา",
      description: "สร้างความตระหนักและให้ความรู้แก่ประชาชนเกี่ยวกับธรรมชาติ",
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "มาตรฐานสูง",
      description: "ดูแลสัตว์ด้วยมาตรฐานระดับสากลและความเป็นมืออาชีพ",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-500 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">เกี่ยวกับเรา</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            เรื่องราวของความมุ่งมั่นในการอนุรักษ์สัตว์ป่าและการสร้างสรรค์ประสบการณ์ที่น่าประทับใจ
            เพื่อการเรียนรู้และความเข้าใจธรรมชาติอันงดงาม
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50 transform -skew-y-1 origin-bottom-left"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                ประวัติความเป็นมา
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  สวนสัตว์เปิดท่าลาด นครศรีธรรมราช
                  พื้นที่แห่งนี้เคยเป็นส่วนหนึ่งของ “สวนราชฤดี” ในสมัย รัชกาลที่
                  5 ภายในสวนมีสวนสัตว์เปิด สวนนกนานาชนิด สวนสุขภาพให้
                  ผู้คนได้ออกกำลังกาย สวนสมเด็จพระศรีนครินทร์ 84 (ทุ่งท่าลาด)
                  อยู่ที่ถนนราชดำเนิน เป็นสวนสาธารณะขนาดใหญ่มีเนื้อที่ประมาณ
                  1,257 ไร่ ภายในสวนมีสวนสัตว์เปิด สวนนกนานาชนิด สวนสุขภาพ
                  รวมทั้งทะเลสาบซึ่งเป็นที่อาศัยของนกเป็ดน้ำที่อพยพมาจากถิ่นอื่น
                  บรรยากาศภายในสวนสัตว์เปิดมีความร่มรื่น มีศาลาพักผ่อนริมน้ำ
                  รอบทะเลสาบ นักท่องเที่ยวได้พักยามเหนื่อยล้า
                </p>
                <p>
                  ตลอดระยะเวลาที่ผ่านมา
                  เราได้พัฒนาและขยายพื้นที่เพื่อให้สัตว์ต่างๆ มีสภาพแวดล้อม
                  ที่เหมาะสมและใกล้เคียงกับธรรมชาติมากที่สุด
                </p>
                <p>
                  วันนี้
                  เราภูมิใจที่เป็นหนึ่งในสวนสัตว์ชั้นนำที่ได้รับการยอมรับในระดับสากล
                  ด้วยมาตรฐานการดูแลสัตว์และโปรแกรมการอนุรักษ์ที่โดดเด่น
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-100 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🌿</div>
                <h4 className="text-xl font-semibold text-green-800 mb-2">
                  วิสัยทัศน์
                </h4>
                <p className="text-green-700">
                  "เป็นสวนสัตว์ที่เป็นแหล่งเรียนรู้และสร้างแรงบันดาลใจ
                  ในการอนุรักษ์ธรรมชาติและสัตว์ป่าของโลก"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ค่านิยมหลัก
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              หลักการสำคัญที่ขับเคลื่อนการทำงานของเราในทุกวัน
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors group"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-8">พันธกิจของเรา</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white opacity-25 rounded-xl p-6 backdrop-blur-sm">
              <Calendar className="w-8 h-8 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-3">อนุรักษ์และปกป้อง</h4>
              <p className="text-sm opacity-90">
                ดำเนินโครงการอนุรักษ์สัตว์ป่าที่ใกล้สูญพันธุ์และปกป้องความหลากหลายทางชีวภาพ
              </p>
            </div>
            <div className="bg-white opacity-25 rounded-xl p-6 backdrop-blur-sm">
              <Star className="w-8 h-8 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-3">ให้ความรู้</h4>
              <p className="text-sm opacity-100">
                จัดกิจกรรมและโปรแกรมการศึกษาเพื่อสร้างความตระหนักในการอนุรักษ์ธรรมชาติ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              รางวัลและความสำเร็จ
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                รางวัลสวนสัตว์ดีเด่น
              </h4>
              <p className="text-sm text-gray-600">ประจำปี 2023</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-3">🌟</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                มาตรฐานการดูแลสัตว์
              </h4>
              <p className="text-sm text-gray-600">ระดับสากล ISO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-3">🎖️</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                โครงการอนุรักษ์ดีเด่น
              </h4>
              <p className="text-sm text-gray-600">จากกรมอุทยานฯ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
