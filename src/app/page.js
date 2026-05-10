"use client";

import menuData from "../../menus.json";
import { FaCoins, FaKey, FaGem, FaBox, FaCrown, FaFlask } from "react-icons/fa";

export default function Home() {

  // 상담중 인원 (자연스러운 확률)
  const getConsultingCount = () => {
    const rand = Math.random();

    if (rand < 0.20) return 0;
    if (rand < 0.65) return 1;
    if (rand < 0.90) return 2;
    return 3;
  };

  const online = getConsultingCount();

  const notice =
    "저보다 저렴한 곳 있으면 편하게 말씀해주세요.";

  // 아이콘 매핑
  const getIcon = (icon) => {
    switch (icon) {
      case "coin":
        return <FaCoins className="text-yellow-500 mr-2" />;

      case "key":
        return <FaKey className="text-yellow-600 mr-2" />;

      case "gem":
        return <FaGem className="text-blue-500 mr-2" />;

      case "box":
        return <FaBox className="text-gray-500 mr-2" />;

      case "crown":
        return <FaCrown className="text-purple-500 mr-2" />;

      case "flask":
        return <FaFlask className="text-green-500 mr-2" />;

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-neutral-100 flex flex-col items-center p-4 text-gray-900">

      {/* 상단 타이틀 */}
      <div className="w-full max-w-md md:max-w-2xl text-center py-4">

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          ☕ 홍홍 카페 ☕
        </h1>

        {/* 신뢰 배지 */}
        <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs md:text-sm font-medium">

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

      {/* 날짜 */}
      <div className="w-full max-w-md md:max-w-2xl text-center mb-3">

        <p className="text-lg md:text-xl font-bold">
          2026년 5월 10일 일요일 시세표
        </p>

        <p className="text-xs text-gray-500 mt-1">
          마지막 업데이트 시각: 14:00
        </p>

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
              className="border rounded-xl p-4 md:p-5 hover:shadow-lg hover:-translate-y-1 transition"
            >

              {/* 메뉴 이름 + 아이콘 */}
              <p className="font-bold text-sm md:text-lg flex items-center text-gray-900">

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

      {/* 영업시간 */}
      <div className="w-full max-w-md md:max-w-2xl flex justify-start mt-4 text-xs text-gray-500">

        🕒 영업시간: 10:00 - 익일 02:00

      </div>

      {/* 플로팅 버튼 */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">

        <a
          href="https://open.kakao.com/o/sZXnG56f"
          target="_blank"
          className="bg-yellow-400 px-4 py-3 rounded-full font-bold shadow-lg"
        >
          💬 개인 상담
        </a>

        <a
          href="https://open.kakao.com/o/g8JqBqLg"
          target="_blank"
          className="bg-blue-500 text-white px-4 py-3 rounded-full font-bold shadow-lg"
        >
          👥 단체 오픈톡
        </a>

      </div>

    </main>
  );
}