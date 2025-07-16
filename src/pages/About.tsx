import { Users, Award, Heart } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "365", label: "สัตว์ป่า", icon: "🦁" },
    { number: "37", label: "สายพันธุ์", icon: "🐘" },
    { number: "40+", label: "ปีของประสบการณ์", icon: "📅" },
    { number: "100K+", label: "ผู้เยือนต่อปี", icon: "👥" },
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
                  สมัยเรือตรี สุกรี รักษ์ศรีทอง
                  รับราชการเป็นนายอำเภอเมืองนครศรีธรรมราช
                  ได้สั่งให้เจ้าหน้าที่สำรวจพื้นที่ดังกล่าว พบว่าเป็นทุ่งกว้าง
                  เนื้อที่ประมาณ 3,000 ไร่
                  จึงได้ดำเนินขึ้นทะเบียนสาธารณะสมบัติของแผ่นดิน
                  ได้เฉพาะทุ่งสวนหัวทะเล และบ้านตอนสระเท่านั้น
                </p>
                <p>
                  • ปี พ.ศ.2526
                  ได้เข้าพัฒนาทุ่งท่าลาดเป็นครั้งแรกเนื่องในวโรกาสวันเฉลิมพระชนพรรษา
                  พระบาทสมเด็จพระเจ้าอยู่หัว วันที่ 5 ธันวาคม 2526
                  โดยจังหวัดนครศรีธรรมราช อำเภอเมือง
                  และเทศบาลเมืองนครศรีธรรมราชในขณะนั้นรวมทั้งประชาชนจังหวัดนครศรีธรรมราช
                </p>
                <p>
                  • ปี พ.ศ.2527
                  เริ่มโครงการปรับปรุงทุ่งท่าลาดเป็นสวนสาธารณะครั้งแรก
                  สมัยนายอเนกสิทธิประศาสตร์ดำรงตำแหน่งผู้ว่าราชการจังหวัดนครศรีธรรมราช
                </p>
                <p>
                  • ปี พ.ศ.2528 เทศบาลเมืองนครศรีธรรมราชได้ขอพระราชทานนาม
                  “สวนสาธารณะพระศรีนครินทร์ 84 เป็นชื่อสวน
                  และการใช้พื้นที่สวนสาธารณะพระศรีนครินทร์ 84
                  (ทุ่งท่าลาด)มีพื้นที่ทั้งหมด 1,247 ไร่
                  สถานที่ตั้งและลักษณะพื้นที่เดิม
                </p>
                <p>
                  เป็นความต้องการของชาวเมือง อยากให้พื้นที่พรุนี้เป็นที่พักผ่อน
                  เพราะทัศนียภาพสวยงาม มองไป ทิศตะวันตกไกล เห็นเทือกเขา
                  นครศรีธรรมราชเป็นสีฟ้า ปลายปี 2526 ชาวบ้านได้รวมตัวกัน
                  เริ่มพัฒนาบริเวณพรุต่อกับสันเนินทราย
                  ในโอกาสวันเฉลิมพระชนมพรรษา 5 ธันวาคม และ เทศบาลเมืองนครฯ
                  (ในขณะนั้น) ก็ได้รับภาระพัฒนาต่อทุกเสาร์ อาทิตย์
                  เป็นเวลาปีกว่า พื้นที่จึงเป็นรูปเป็นร่างประมาณ 300 ไร่
                  ในขณะที่ ทำการพัฒนาพื้นที่ได้เกิดความขัดแย้ง
                  อ้างสิทธิ์ทำกินของราษฎรกับเทศบาลจนเรื่องลุกลามเป็นความขัดแย้งทางการเมือง
                  การรุกคืบเพื่อเอาที่ดินมา เป็นสวนจึงต้องหยุดลง
                  เทศบาลพัฒนาเนื้อที่ได้ 1,257 ไร่ เทศบาลได้ขอพระราชทานนาม
                  "สวนสาธารณะสมเด็จพระศรีนครินทร์ 84"
                  เพื่อถวายความจงรักภักดีเนื่องในโอกาสสมเด็จ
                  พระศรีนครินทราบรมราชชนนี มีพระชนมายุ 84 ปี
                  และได้รับพระบรมราชานุญาต เมื่อ 28 สิงหาคม 2528
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
              <p className="text-sm text-gray-600">ประจำปี 2009</p>
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
