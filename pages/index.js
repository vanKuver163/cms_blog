import Head from "next/head";
import { PostCard, Categories, PostWidget } from "@/components";
import '../styles/globals.css';

const posts = [
    { title: 'React Testing', excerpt: 'Learn React Testing' },
    { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' }
]

export default function Home() {
    return (
        <div className="container mx-auto px-10 mb-8">
            <Head>
                <title>CMS Blog</title>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {posts.map((post, index) => (
                    <PostCard key={post.title} post={post} />
                ))}
                <div className="lg:col-span-4 col-span-1">
                    <div className="lg:sticky relative top-8">
                        <PostWidget />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    )
}