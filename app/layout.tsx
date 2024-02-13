import "./globals.css";

export const metadata = {
  title: "::고려대학교 모의 수강신청 시스템::",
  description: "고려대학교 모의 수강신청 사이트 by 빵코코",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta
          property="og:url"
          content="https://kusugangpractice.vercel.app/"
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:image"
          content="/thumnnail.png"
        ></meta>
      </head>
      <body>{children}</body>
    </html>
  );
}
