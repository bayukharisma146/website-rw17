    import Link from "next/link";

    export default function RTPage() {
    const rtList = [
        {
        name: "RT 61",
        href: "/rt/rt61",
        },
        {
        name: "RT 62",
        href: "/rt/rt62",
        },
        {
        name: "RT 63",
        href: "/rt/rt63",
        },
        {
        name: "RT 83",
        href: "/rt/rt83",
        },
    ];

    return (
        <main className="min-h-screen bg-[#f5f5f5] p-10">
        <div className="mx-auto max-w-5xl">
            <h1 className="mb-12 text-center text-5xl font-bold text-gray-800">
            Daftar RT RW 17
            </h1>

            <div className="grid gap-8 md:grid-cols-2">
            {rtList.map((rt, index) => (
                <Link
                key={index}
                href={rt.href}
                className="rounded-3xl bg-white p-10 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                <h2 className="text-3xl font-semibold text-gray-800">
                    {rt.name}
                </h2>
                </Link>
            ))}
            </div>
        </div>
        </main>
    );
    }
