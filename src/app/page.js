import menuData from "../../menus.json";

export default function Home() {

  const online = 1 + Math.floor(Math.random() * 3);

  const notice = "저보다 저렴한 곳 있으면 부담없이 말씀해주세요. ";

  return (
    <main className="min-h-screen bg-neutral-100 flex flex-col items-center p-4 text-gray-900">

      {/* 상단 타이틀 */}
      <div className="w-full max-w-md md:max-w-2xl text-center py-4">
        <h1 className="text-3xl md:text-5xl font-extrabold">
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
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 px-3 py-2 text-center w-fit">
          <p className="text-gray-400 text-[10px]">상담중</p>
          <p className="font-semibold text-lg text-gray-800">{online}명</p>
        </div>
      </div>

      {/* 날짜 */}
      <div className="w-full max-w-md md:max-w-2xl text-center mb-2">
        <p className="text-base md:text-lg font-semibold text-gray-800">
          2026년 5월 10일 일요일 시세표(11시 30분 기준)
        </p>
      </div>

      {/* 공지사항 */}
      <div className="w-full max-w-md md:max-w-2xl mb-3 bg-white border border-gray-200 rounded-xl p-3 text-sm text-gray-700 shadow-sm">
        <span className="font-semibold text-gray-900">📢 공지:</span>{" "}
        {notice}
      </div>

      {/* 메뉴 */}
      <div className="w-full max-w-md md:max-w-2xl bg-white rounded-2xl shadow p-4 md:p-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {menuData.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-4 md:p-5 hover:shadow-md transition"
            >

              <p className="font-semibold text-sm md:text-lg text-gray-900">
                {item.name}
              </p>

              <p className="text-xs md:text-sm text-gray-600 mt-1">
                {item.desc}
              </p>

              <div className="mt-2 space-y-1">
                {item.prices.map((p, idx) => (
                  <div key={idx} className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-700">{p.qty}</span>
                    <span className="font-semibold text-blue-600">
                      {p.price}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* 🔥 하단 영역 (영업시간 좌측 하단으로 이동) */}
      <div className="w-full max-w-md md:max-w-2xl flex justify-start mt-4 text-xs text-gray-500 px-1">
        🕒 영업시간: 금일 09:00 - 익일 02:00
      </div>

      {/* 카톡 버튼 */}
      <a
        href="https://open.kakao.com/o/sZXnG56f"
        target="_blank"
        className="fixed bottom-5 right-5 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-5 py-4 rounded-full shadow-lg"
      >
        💬 카톡 오픈톡 주문
      </a>

    </main>
  );
}