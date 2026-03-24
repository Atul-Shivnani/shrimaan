import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="w-full overflow-x-hidden min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-16 text-center">
        <h1 className="text-8xl font-black text-sky-600 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-md">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full px-8 py-3 font-bold text-base transition-all duration-300 shadow-lg"
          >
            Go to Home
          </Link>
          <Link
            href="/services"
            className="border-2 border-sky-500 text-sky-600 hover:bg-sky-50 rounded-full px-8 py-3 font-bold text-base transition-all duration-300"
          >
            View Services
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
