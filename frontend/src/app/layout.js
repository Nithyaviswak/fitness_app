import "./globals.css";
import Link from "next/link";
import { AppProvider } from "./providers";
import PageTransition from "./page-transition";
import DateTimeDisplay from "../components/DateTimeDisplay";

export const metadata = {
  title: "Fitness Planner",
  description: "Personalized workouts and Indian diet plans"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <div className="min-h-screen">
            <header className="px-6 py-6 md:px-12">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Fitness App</p>
                  <h1 className="text-2xl font-semibold">Pulse Forge</h1>
                </div>
                <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-600">
                  <Link className="nav-link" href="/">Home</Link>
                  <Link className="nav-link" href="/planner">Planner</Link>
                  <Link className="nav-link" href="/dashboard">Today</Link>
                  <Link className="nav-link" href="/plans">Weekly</Link>
                </nav>
                <div className="flex items-center gap-4">
                  <DateTimeDisplay />
                  <div className="badge">Beginner friendly</div>
                </div>
              </div>
            </header>
            <main className="px-6 pb-16 md:px-12">
              <PageTransition>{children}</PageTransition>
            </main>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
