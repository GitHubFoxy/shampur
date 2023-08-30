import Link from "next/link";

export default function Navbar() {
    return (
            <div>
                <nav className="text-white flex justify-between py-4 px-2  container mx-auto md:px-24">
                    <Link href="/"  className="hover:bg-zinc-700 rounded p-2">SHAMPUR</Link>
                    <ul className="flex gap-5 items-center">
                        <li><Link href="/delivery" className="hover:bg-zinc-700 rounded p-2">Доставка</Link></li>
                        <li><Link href="/reviews" className="hover:bg-zinc-700 rounded p-2">Отзывы</Link></li>
                    </ul>
                </nav>
                <div className="border-b border-white border-opacity-25"></div>
            </div>
        
    )
}