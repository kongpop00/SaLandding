import { ArrowLeft, Download } from 'lucide-react';

export default function Profile() {
  const profileImages = [
    '/images/proifile/1.png',
    '/images/proifile/2.png',
    '/images/proifile/3.png',
    '/images/proifile/4.png',
    '/images/proifile/5.png',
    '/images/proifile/6.png',
    '/images/proifile/7.png',
    '/images/proifile/8.png'
  ];

  const goBack = () => {
    window.history.back();
  };

  const downloadProfile = () => {
    const link = document.createElement('a');
    link.href = '/SAPROFILE1.pdf';
    link.download = 'SAPROFILE1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={goBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-[#f57d21] transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>กลับ</span>
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Profile</h1>
            <button
              onClick={downloadProfile}
              className="flex items-center space-x-2 px-4 py-2 bg-[#f57d21] text-white rounded-lg hover:bg-[#f15a29] transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>ดาวน์โหลด Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {profileImages.map((imageSrc, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={imageSrc}
                alt={`โปรไฟล์บริษัท S.A. Accounting หน้า ${index + 1} - แสดงข้อมูลบริการบัญชีและภาษี ประสบการณ์ และผลงาน`}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}