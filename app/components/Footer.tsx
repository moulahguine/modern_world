export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Modern World. All rights reserved.
      </div>
    </footer>
  );
}
