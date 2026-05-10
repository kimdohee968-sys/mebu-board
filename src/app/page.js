"use client";

import {
  FaCoins,
  FaKey,
  FaGem,
  FaBox,
  FaCrown,
  FaFlask,
  FaBone
} from "react-icons/fa";

// ✅ JSON 대신 직접 데이터 (에러 #418 방지)
const menuData = [
  {
    "name": "골드",
    "icon": "coin",
    "desc": "소지한도 999억",
    "prices": [
      { "qty": "100억", "price": "4500원" },
      { "qty": "300억", "price": "12000원" },
      { "qty": "500억", "price": "20000원" },
      { "qty": "900억", "price": "32000원" }
    ]
  },
  {
    "name": "벨리알 껍데기",
    "icon": "bone",
    "desc": "",
    "prices": [
      { "qty": "100개", "price": "8000원" },
      { "qty": "300개", "price": "21000원" },
      { "qty": "500개", "price": "34000원" }
    ]
  },
  {
    "name": "상급 소굴열쇠",
    "icon": "key",
    "desc": "",
    "prices": [
      { "qty": "100개", "price": "4500원" },
      { "qty": "300개", "price": "8500원" },
      { "qty": "500개", "price": "13000원" }
    ]
  },
  {
    "name": "하급 소굴열쇠",
    "icon": "key",
    "desc": "",
    "prices": [
      { "qty": "100개", "price": "4500원" },
      { "qty": "300개", "price": "8500원" },
      { "qty": "500개", "price": "13000원" }
    ]
  },
  {
    "name": "신화 꾸러미",
    "icon": "box",
    "desc": "대기있음(5~15분), 고행1 해금 필수",
    "prices": [
      { "qty": "1회", "price": "5500원" },
      { "qty": "5회", "price": "19000원" },
      { "qty": "10회", "price": "33000원" }
    ]
  },
  {
    "name": "웅장한 보석",
    "icon": "gem",
    "desc": "종류 섞어서 선택 가능",
    "prices": [
      { "qty": "10개", "price": "4500원" },
      { "qty": "25개", "price": "7500원" },
      { "qty": "50개", "price": "14500원" },
      { "qty": "100개", "price": "27500원" }
    ]
  },
  {
    "name": "우버 룬세트",
    "icon": "crown",
    "desc": "각 필요룬 6+6+6=18개",
    "prices": [
      { "qty": "영벌", "price": "4500원" },
      { "qty": "수의", "price": "2500원" },
      { "qty": "샤코", "price": "2500원" },
      { "qty": "별반", "price": "4500원" },
      { "qty": "샐리그", "price": "4500원" },
      { "qty": "한아비", "price": "3000원" },
      { "qty": "티리엘", "price": "4500원" }
    ]
  },
  {
    "name": "잊힌 영혼",
    "icon": "flask",
    "desc": "고유템 다수 바닥전달(개별분해 필요)",
    "prices": [
      { "qty": "1000개", "price": "11000원" },
      { "qty": "5000개", "price": "50000원" },
      { "qty": "10000개", "price": "90000원" }
    ]
  }
];

export default function Home() {

  const getConsultingCount = () => {
    const rand = Math.random();
    if (rand < 0.12) return 0;
    if (rand < 0.52) return 1;
    if (rand < 0.83) return 2;
    return 3;
  };

  const online = getConsultingCount();

  const notice = "저보다 저렴한 곳 있으면 편하게 말씀해주세요.";

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
      case "bone":
        return <FaBone className="text-gray-600 mr-2" />;
      default:
        return null;
    }
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
            <div key={i} className="border rounded-xl p-4 hover:shadow-lg transition">

              <p className="font-bold flex items-center">
                {getIcon(item.icon)}
                {item.name}
              </p>

              <p className="text-xs text-gray-600 mt-1">
                {item.desc}
              </p>

              <div className="mt-3 space-y-1.5">
                {item.prices.map((p, idx) => (
                  <div key={idx} className="flex justify-between text-xs">
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

      {/* 플로팅 */}
      <div className="fixed bottom-6 right-4 flex flex-col gap-3">
        <a href="https://open.kakao.com/o/sZXnG56f"
          className="bg-yellow-400 px-4 py-3 rounded-full font-bold shadow-lg">
          💬 개인 상담
        </a>

        <a href="https://open.kakao.com/o/g8JqBqLg"
          className="bg-blue-500 text-white px-4 py-3 rounded-full font-bold shadow-lg">
          👥 단체 오픈톡
        </a>
      </div>

    </main>
  );
}