import { client } from "./lib/contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./pages/menu/menu.css";
import Link from "next/link";

export default async function Home() {
    const fetchFeaturedItems = async () => {
        try {
            const response = await client.getEntries({
                content_type: "menuItem",
                "fields.featured": true,
                limit: 5,
            });
            return response.items;
        } catch (error) {
            console.error("Error fetching featured items", error);
            return [];
        }
    };

    const featuredItems = await fetchFeaturedItems();
    return (
        <main className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-500 sm:text-5xl">
                        Welcome to GAMA ,
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">
                        {" "}
                        Explore our handcrafted meals made with love, and let us take you on a culinary journey like no
                        other. Visit us today and taste the difference!
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {featuredItems.length > 0 ? (
                        featuredItems.map((entry) => {
                            const { name, photo, desc, price } = entry.fields as any;
                            const imageUrl: string = photo?.fields?.file?.url || "";
                            console.log("Image URL:", imageUrl);
                            return (
                                <article
                                    key={entry.sys.id}
                                    className="flex max-w-xl flex-col items-start justify-between"
                                >
                                    <div className="group relative">
                                        <h2 className="flex items-center gap-x-4 text-s relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                            {typeof name === "string" ? name : "untitled"}
                                        </h2>

                                        {imageUrl && (
                                            <Image
                                                src={`https:${imageUrl}`}
                                                alt={typeof name === "string" ? name : "image"}
                                                width={350}
                                                height={300}
                                                className="menu-item"
                                            />
                                        )}
                                        <div className="mt-5 line-clamp-5 text-sm/6 text-gray-600">
                                            {documentToReactComponents(desc)}
                                        </div>
                                        <h2 className="text-gray-600">
                                            $ {typeof price === "number" ? price : "untitled"}
                                        </h2>
                                    </div>
                                    <Link
                                        href="/login"
                                        className="mt-4 inline-block text-center text-white bg-green-700 rounded-lg px-4 py-2"
                                    >
                                        Log In for Full Menu
                                    </Link>
                                </article>
                            );
                        })
                    ) : (
                        <div>No items available</div> // Optional fallback message
                    )}
                </div>
            </div>
        </main>
    );
}
