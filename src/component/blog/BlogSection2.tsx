import React from 'react'
import { Link } from 'react-router-dom'
import blogData from "@/data/blog1Data.json";

interface Blog {
    id: number;
    date: string;
    title: string;
    description: string;
    image: string;
    link: string;
    category: string;
}

const BlogSection2: React.FC = () => {
    return (
        <>
            {(blogData as Blog[]).map((blog, index) => (
                <div key={blog.id} className={`blog_home_v2 fade-up ${index === 0 ? "pt-0" : ""} ${index === blogData.length - 1 ? "pb-0 border-0" : ""}`}>
                    <div className="home2_blog_img-main blur-in">
                        <img src={blog.image} alt={blog.title} />
                    </div>
                    <div className="home_blog_info_v2">
                        <div className="home_blog_info_upper_v2">
                            <p className="blog_highlite_box">{blog.category}</p>
                            <p className="blog-date">{blog.date}</p>
                        </div>
                        <Link to={blog.link} className="blog-title anim anim--3">
                            {blog.title}
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default BlogSection2;