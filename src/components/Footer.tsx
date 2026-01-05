export default function Footer() {
  return (
    <footer className="bg-[#132f8c] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} AlexCleaning. Всички права запазени.</p>
        <div className="text-blue-200 text-sm">
          Професионално почистване в Пловдив и региона.
        </div>
      </div>
    </footer>
  );
}
