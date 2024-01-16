import "./globals.css";

export const metadata = {
  title: "::고려대학교 수강신청 연습 시스템::",
  description: "고려대학교 수강신청 연습 사이트 by 빵코코",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
