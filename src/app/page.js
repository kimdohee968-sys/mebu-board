console.log("render ok");
console.log(menuData);

"use client";

import menuData from "../../menus.json";
import {
  FaCoins,
  FaKey,
  FaGem,
  FaBox,
  FaCrown,
  FaFlask,
  FaSkull
} from "react-icons/fa";

export default function Home() {

  // 상담중 인원 (안정 확률)
  const getConsultingCount = () => {
    const rand = Math.random();

    if (rand < 0.12) return 0;
    if (rand < 0.52) return 1;
    if (rand < 0.83) return 2;
    return 3;
  };

  const online = getConsultingCount();

  const notice = "저보다 저렴한 곳 있으면 편하게 말씀해주세요.";

  // ✅ 안전 아이콘 매핑 (절대 안 터짐)
  const getIcon = (icon) => {
    const iconMap = {
      coin: <FaCoins className="text-yellow-500 mr-2" />,
      key: <FaKey className="text-yellow-600 mr-2" />,
      gem: <FaGem className="text-blue-500 mr-2" />,
      box: <FaBox className="text-gray-500 mr-2" />,
      crown: <FaCrown className="text-purple-500 mr-2" />,
      flask: <FaFlask className="text-green-500 mr-2" />,

      // bone 대체 (FaSkull 사용)
      bone: <FaSkull className="text-gray-600 mr-2" />
    };

    return iconMap[icon] || null;
  };

  return (
    <main className="min-h-screen bg-neutral-100 flex flex-col items-center p-4 text-gray-900">

      {/* 타이틀 */}
      <div className="w-full max-w-md md:max-w-2xl text-center py-4">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          ☕ 홍홍 카페 ☕
        </h1>

        <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs md:text-sm">
          <span className="bg-yellow-300 px-3 py-1 rounded-full">단골 많음</span>
          <span className="bg-green-300 px-3 py-1 rounded-full">매일 갱신</span>
          <span className="bg-blue-300 px-3 py-1 rounded-full">안전 거래</span>
          <span className="bg-gray-300 px-3 py-1 rounded-full">친절 상담</span>
        </div>
      </div>

      {/* 상담중 */}
      <div className="w-full max-w-md md:max-w-2xl flex justify-end mb-3">
        <div className="bg-white rounded-lg shadow-sm border px-3 py-2 text-center">
          <p className="text-red-400 text-[9px]">상담중</p>
          <p className="font-semibold text-lg text-gray-800 animate-pulse">
            {online}명
          </p>
        </div>
      </div>

      {/* 공지 */}
      <div className="w-full max-w-md md:max-w-2xl mb-4 bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-sm">
        <span className="font-semibold">📢 공지:</span> {notice}
      </div>

      {/* 메뉴 */}
      <div className="w-full max-w-md md:max-w-2xl bg-white rounded-2xl shadow p-4 md:p-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {menuData.map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-4 hover:shadow-lg transition bg-white"
            >

              {/* 이름 + 아이콘 */}
              <p className="font-bold flex items-center text-gray-900 text-sm md:text-lg">
                {getIcon(item.icon)}
                {item.name}
              </p>

              {/* 설명 */}
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                {item.desc}
              </p>

              {/* 가격 */}
              <div className="mt-3 space-y-1.5">
                {item.prices.map((p, idx) => (
                  <div key={idx} className="flex justify-between text-xs md:text-sm">
                    <span>{p.qty}</span>
                    <span className="font-bold text-blue-600">
                      {p.price}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* 플로팅 버튼 */}
      <div className="fixed bottom-6 right-4 flex flex-col gap-3">
        <a
          href="https://open.kakao.com/o/sZXnG56f"
          className="bg-yellow-400 px-4 py-3 rounded-full font-bold shadow-lg"
        >
          💬 개인 상담
        </a>

        <a
          href="https://open.kakao.com/o/g8JqBqLg"
          className="bg-blue-500 text-white px-4 py-3 rounded-full font-bold shadow-lg"
        >
          👥 단체 오픈톡
        </a>
      </div>

    </main>
  );
}