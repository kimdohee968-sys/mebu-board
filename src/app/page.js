"use client";

import menuData from "../../menus.json";

export default function Home() {

  // 상담중 인원 (자연스러운 확률)
  const getConsultingCount = () => {
    const rand = Math.random();

    // 0명 → 20%
    if (rand < 0.20) return 0;

    // 1명 → 45%
    if (rand < 0.65) return 1;

    // 2명 → 25%
    if (rand < 0.90) return 2;

    // 3명 → 10%
    return 3;
  };

  const online = getConsultingCount();

  const notice =
    "저보다 저렴한 곳 있으면 편하게 말씀해주세요.";

  return (
    <main className="min-h-screen bg-neutral-100 flex flex-col items-center p-4 text-gray-900">

      {/* 상단 타이틀 */}
      <div className="w-full max-w-md md:max-w-2xl text-center py-4">

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          ☕ 홍홍 카페 ☕
        </h1>

        {/* 신뢰 배지 */}
        <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs md:text-sm font-medium">

          <span className="bg-yellow-300 text-gray-900 px-3 py-1 rounded-full shadow-sm">
            단골 많음
          </span>

          <span className="bg-green-300 text-gray-900 px-3 py-1 rounded-full shadow-sm">
            매일 갱신
          </span>

          <span className="bg-blue-300 text-gray-900 px-3 py-1 rounded-full shadow-sm">
            안전 거래
          </span>

          <span className="bg-gray-300 text-gray-900 px-3 py-1 rounded-full shadow-sm">
            친절 상담
          </span>

        </div>
      </div>

      {/* 상담중 */}
      <div className="w-full max-w-md md:max-w-2xl flex justify-end mb-3">

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 px-3 py-2 text-center w-fit">

          <p className="text-red-400 text-[9px]">
            현재 상담중
          </p>

          <p className="font-semibold text-lg text-gray-800 animate-pulse">
            {online}명
          </p>

        </div>
      </div>

      {/* 날짜 */}
      <div className="w-full max-w-md md:max-w-2xl text-center mb-3">

        <p className="text-lg md:text-xl font-bold text-gray-900">
          2026년 5월 11일 월요일 시세표
        </p>

        <p className="text-xs md:text-sm text-gray-500 mt-1">
          마지막 업데이트 11:00
        </p>

      </div>

      {/* 공지사항 */}
      <div className="w-full max-w-md md:max-w-2xl mb-4 bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-sm text-gray-700 shadow-sm">

        <span className="font-semibold text-gray-900">
          📢 공지:
        </span>{" "}

        {notice}

      </div>

      {/* 메뉴 */}
      <div className="w-full max-w-md md:max-w-2xl bg-white rounded-2xl shadow p-4 md:p-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {menuData.map((item, i) => (

            <div
              key={i}
              className="border border-gray-200 rounded-xl p-4 md:p-5 hover:shadow-lg hover:-translate-y-1 transition duration-200 bg-white"
            >

              {/* 메뉴 이름 */}
              <p className="font-bold text-sm md:text-lg text-gray-900">

                {item.name}

              </p>

              {/* 설명 */}
              <p className="text-xs md:text-sm text-gray-600 mt-1">

                {item.desc}

              </p>

              {/* 가격 */}
              <div className="mt-3 space-y-1.5">

                {item.prices.map((p, idx) => (

                  <div
                    key={idx}
                    className="flex justify-between items-center text-xs md:text-sm"
                  >

                    <span className="text-gray-700">

                      {p.qty}

                    </span>

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
      <div className="w-full max-w-md md:max-w-2xl flex justify-start mt-4 text-xs md:text-sm text-gray-500 px-1">

        🕒 영업시간: 10:00 - 익일 02:00

      </div>

      {/* 플로팅 버튼 */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">

        {/* 개인 상담 */}
        <a
          href="https://open.kakao.com/o/sZXnG56f"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 md:px-4 py-2.5 md:py-3 rounded-full shadow-lg text-xs md:text-sm font-bold transition"
        >
          💬 카톡 오픈톡 문의
        </a>

        {/* 단체 오픈톡 */}
        <a
          href="https://open.kakao.com/o/g8JqBqLg"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 md:px-4 py-2.5 md:py-3 rounded-full shadow-lg text-xs md:text-sm font-bold transition"
        >
          👥 단체 오픈톡 입장
        </a>

      </div>

    </main>
  );
}