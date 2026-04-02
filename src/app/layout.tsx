import "./styles/globals.scss";

export const metadata = {
  title: "OXO Security",
  description: "Digital threat protection platform and app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
