import "./globals.css";

export const metadata = {
  title: "Login Page",
  description: "Login and Dashboard Pages",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className=" flex flex-col min-h-screen">
        <header className="p-3 bg-blue-300 shadow-md">
          <h1 className="text-2xl font-bold text-center">Login Page</h1>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="p-6 bg-blue-400 text-center text-sm">
          © {new Date().getFullYear()} Philemon KOMVUGA NDAYISHIMIYE
        </footer>
      </body>
    </html>
  );
}
