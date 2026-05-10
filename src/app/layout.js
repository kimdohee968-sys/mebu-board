import './globals.css'

export const metadata = {
  title: "홍홍카페 디4 시세표",
  description: "실시간 시세 확인",
  openGraph: {
    title: "☕ 홍홍카페 디4 시세표",
    description: "실시간 시세 확인",
    url: "https://mebu-board.vercel.app",
    siteName: "홍홍카페",
    images: [
      {
        url: "https://mebu-board.vercel.app/hong.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "홍홍파케 디4 시세표",
    description: "실시간 시세 확인",
    images: ["https://mebu-board.vercel.app/hongcafe.png"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}