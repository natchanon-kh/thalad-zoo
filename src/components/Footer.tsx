import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-700 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-4 py-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Zoo Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">THALAD ZOO</h3>
            <p className="text-green-100 mb-4 leading-relaxed">
              สวนสัตว์เปิดท่าลาดที่จะพาทุกคนเข้าสู่โลกแห่งธรรมชาติ
              พบปะสัตว์นานาชนิดและเรียนรู้เกี่ยวกับการอนุรักษ์สิ่งแวดล้อม
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ลิงก์ด่วน</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  เกี่ยวกับสวนสัตว์
                </Link>
              </li>
              <li>
                <Link
                  to="/animals"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  สารานุกรมสัตว์
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  ติดต่อ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ติดต่อเรา</h4>
            <div className="space-y-2 text-green-100">
              <p className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                ถ.มะขามชุม ต.นาเคียน อ.เมือง นครศรีฯ
              </p>
              <p className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                075-342-880
              </p>
              <p className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                saraban_03800102@dla.go.th
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-600">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-green-100 text-sm">
              © 2024 THALAD ZOO. สงวนลิขสิทธิ์
            </p>
            {/* <div className="flex space-x-4 mt-2 md:mt-0">
              <a
                href="#"
                className="text-green-100 hover:text-white transition-colors text-sm"
              >
                นโยบายความเป็นส่วนตัว
              </a>
              <a
                href="#"
                className="text-green-100 hover:text-white transition-colors text-sm"
              >
                เงื่อนไขการใช้งาน
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
