import "./globals.css";
import { ReduxProvider } from "./_redux/ReduxProvider";
import Header from "./_components/Header";
import MobileNav from "./_components/MobileNav";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl">
      <body className="antialiased min-h-screen flex flex-col">
        <ReduxProvider>
          <div className="flex-grow">
            <header className="w-full">
              <Header />
            </header>
            <main className="flex-grow container mx-auto p-4">{children}</main>
          </div>
          <footer className="w-full">
            <MobileNav />
          </footer>
        </ReduxProvider>
      </body>
    </html>
  );
}
