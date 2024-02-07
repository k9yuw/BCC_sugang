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
      <body>{children}</body>
    </html>
  );
}