import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("กรุณากรอกข้อมูลในช่องที่จำเป็น (*)");
      return;
    }

    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("ข้อความของคุณถูกส่งแล้ว เราจะติดต่อกลับไปในเร็วๆ นี้");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "ที่อยู่",
      //
      details: [
        "ถ.มะขามชุม ต.นาเคียน",
        "อ.เมือง จ.นครศรีฯ ประเทศไทย",
        "รหัสไปรษณีย์ 80000",
      ],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "โทรศัพท์",
      details: ["075-342-880"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "อีเมล",
      details: ["saraban_03800102@dla.go.th"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "เวลาทำการ",
      details: ["ทุกวัน: 09:00 - 18:00"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-500 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ติดต่อเรา</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            พร้อมให้บริการและตอบทุกคำถามของคุณ
            มาร่วมเป็นส่วนหนึ่งในการอนุรักษ์ธรรมชาติไปกับเรา
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-50 transform -skew-y-1 origin-bottom-left"></div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4 text-green-600">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Google Map */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  แผนที่และเส้นทาง
                </h2>
                <p className="text-gray-600 mb-6">
                  สวนสัตว์เปิดท่าลาดตั้งอยู่ในใจกลางเมืองนครศรีธรรมราช
                  เดินทางสะดวกด้วยรถยนต์ส่วนตัวหรือขนส่งสาธารณะ
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.443621409104!2d99.94787337501218!3d8.45616679158405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305306d9c4d66eb1%3A0x4c408860e9940ba5!2z4Liq4Lin4LiZ4Liq4Lix4LiV4Lin4LmM4LmA4Lib4Li04LiU4LiX4LmI4Liy4Lil4Liy4LiU!5e0!3m2!1sth!2sth!4v1750780009948!5m2!1sth!2sth"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                ></iframe>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">
                  💡 เคล็ดลับการเดินทาง
                </h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• มีที่จอดรถฟรีสำหรับผู้เยี่ยมชม</li>
                  <li>• รถโดยสารประจำทางผ่านหน้าสวนสัตว์</li>
                  <li>
                    • ใกล้สถานีขนส่งผู้โดยสารนครศรีธรรมราชเพียง 3 กิโลเมตร
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ส่งข้อความหาเรา
              </h2>
              <p className="text-gray-600 mb-6">
                มีคำถามหรือต้องการข้อมูลเพิ่มเติม? กรอกแบบฟอร์มด้านล่าง
                เราจะติดต่อกลับไปในเร็วๆ นี้
              </p>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      ชื่อ-นามสกุล *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="กรอกชื่อของคุณ"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      อีเมล *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      เบอร์โทรศัพท์
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="08X-XXX-XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-1" />
                      หัวข้อ *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    >
                      <option value="">เลือกหัวข้อ</option>
                      <option value="general">สอบถามทั่วไป</option>
                      <option value="visit">ข้อมูลการเยี่ยมชม</option>
                      <option value="group">จองทัวร์กลุ่ม</option>
                      <option value="education">โปรแกรมการศึกษา</option>
                      <option value="volunteer">การเป็นอาสาสมัคร</option>
                      <option value="other">อื่นๆ</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ข้อความ *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                    placeholder="เขียนข้อความของคุณที่นี่..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 font-medium"
                >
                  <Send className="w-5 h-5" />
                  <span>ส่งข้อความ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-1">
                กรณีฉุกเฉิน
              </h3>
              <p className="text-red-700 text-sm">
                หากพบเหตุฉุกเฉินภายในสวนสัตว์ กรุณาติดต่อทันที
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-red-800 font-bold text-lg">
                  075-342-880
                </div>
                <div className="text-red-600 text-sm">24 ชั่วโมง</div>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
