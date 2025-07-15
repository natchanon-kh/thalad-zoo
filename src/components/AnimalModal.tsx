import { X, Volume2 } from "lucide-react";

type WikiAnimalData = {
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
  } | null;
};

type AnimalModalProps = {
  selectedAnimal: string;
  onClose: () => void;
  loading: boolean;
  data: WikiAnimalData | null;
  imageSrc?: string;
};

const AnimalModal = ({
  selectedAnimal,
  onClose,
  loading,
  data,
  imageSrc,
}: AnimalModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 sm:p-6 rounded-t-2xl sm:rounded-t-3xl">
          <div className="flex justify-between items-start">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-start flex-1 pr-2">
              <span className="mr-2 sm:mr-3 text-xl sm:text-2xl md:text-3xl">
                🐾
              </span>
              <span className="leading-tight">{selectedAnimal}</span>
            </h2>
            <button
              onClick={onClose}
              className="p-1 sm:p-2 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>

        {/* Content */}
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
              {imageSrc && (
                <div className="text-center">
                  <img
                    src={imageSrc}
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
                  {data?.extract || "ไม่พบข้อมูลเพิ่มเติม"}
                </p>
              </div>

              <div className="text-center">
                <button
                  onClick={onClose}
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
  );
};

export default AnimalModal;
