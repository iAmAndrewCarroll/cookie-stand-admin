import Link from "next/link";
export default function Overview() {
    return (
        <div className="flex items-center justify-center mx-auto my-8 bg-gray-500 w-72 h-72 text-gray-50">
            <section className="space-y-4">
                <h1 className="text-4xl">Overview</h1>
                <Link href="/">
                    Return Home
                </Link>
            </section>
        </div>
    );
}