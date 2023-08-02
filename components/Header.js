import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 text-white bg-green-500">
      <h1 className="text-5xl" style={{ fontFamily: 'Arial' }}>Cookie Stand Admin</h1>
      <Link href="/overview">Overview</Link>
    </header>
  );
}