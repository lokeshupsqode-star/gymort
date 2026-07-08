import React from 'react'
import { Link } from 'react-router-dom';
import { IconArrowUpRight } from '@tabler/icons-react';
import blogData from '@/data/blog1Data.json'

interface Blog {
    id: number;
    image: string;
    date: string;
    title: string;
    description: string;
    link: string;
}

const BlogSection1: React.FC = () => {
    const blogs = blogData as Blog[];
    return (
        <>
            {blogs.map((blog) => (
                <div className="blog_home_v1" key={blog.id}>
                    <div className="home_blog_img blur-in">
                        <img className='home-blog-img-thum' src={blog.image} alt={blog.title} />
                    </div>
                    <Link to={blog.link} className="home_blog_info">
                        <div className="home_blog_detail">
                            <p className="blog-date">{blog.date}</p>
                            <h2 className="blog-title">{blog.title}</h2>
                            <p className="blog-discri">{blog.description}</p>
                        </div>
                        <button type="button" className="home_blog_btn">
                            <IconArrowUpRight size={30} color="#FFF" />
                        </button>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default BlogSection1