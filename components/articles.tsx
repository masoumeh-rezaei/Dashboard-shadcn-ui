'use client';

import React, { useState, useCallback } from "react";

type Post = {
    id: number;
    title: string;
    likes: number;
};

const initialPosts: Post[] = [
    { id: 1, title: "نشست های اجرایی شده", likes: 0 },
    { id: 2, title: "پروژه منطقه ۱۳", likes: 0 },
    { id: 3, title: "اجرای زیرسازی ری", likes: 0 },
];

const PostsList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>(initialPosts);

    // useCallBack to prevent rerendering
    const handleLike = useCallback((id: number, increment: number = 1) => {
        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === id ? { ...post, likes: post.likes + increment } : post
            )
        );
    }, []);

    return (
        <div className="text-right max-w-2xl mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">لیست مقالات</h2>
            <ul className="space-y-4">
                {posts.map(post => (
                    <li
                        key={post.id}
                        className="bg-gray-900 shadow-md rounded-lg p-4 flex flex-col gap-3"
                    >
                        <h3 className="text-xl font-semibold">{post.title}</h3>
                        <p className="text-gray-600">تعداد لایک‌ها: <span className="font-bold">{post.likes}</span></p>

                        <div className="flex gap-3 justify-start">
                            {/* فراخوانی مستقیم تابع بدون پارامتر */}
                            <button
                                onClick={() => handleLike(post.id)}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                            >
                                لایک
                            </button>

                            {/* استفاده از Arrow Function برای ارسال پارامتر اضافی */}
                            <button
                                onClick={() => handleLike(post.id, 5)}
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                            >
                                لایک +5
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default PostsList;
