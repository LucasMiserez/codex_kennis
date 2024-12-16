export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          Met folkloristische groeten{" "}
          <a href="https://github.com/LucasMiserez" className="hover:underline">
            Lucas Miserez
          </a>
          . Alle rechten voorbehouden.
        </span>
      </div>
    </footer>
  );
}
