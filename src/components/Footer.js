export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 bg-[#0f172a] text-center relative z-10 mt-auto">
      <div className="container mx-auto px-6">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} MD Shohanur Rahman. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
