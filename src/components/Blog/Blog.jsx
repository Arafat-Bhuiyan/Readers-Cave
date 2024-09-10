import React from 'react';

const Blog = ({ blog }) => {
    console.log(blog)
    return (
        <div>
            <div className='flex flex-col gap-2 border border-slate-100 shadow p-5 mb-10 rounded-lg'>
                <h1 className='text-2xl font-bold'>{blog.title}</h1>
                <p className='text-base font-medium'>{blog.author}</p>
                <img className='border border-white rounded-lg shadow' src={blog.urlToImage} alt="" />
                <p className='text-lg font-normal'>{blog.description}</p>
                <a className='text-blue-400 font-medium text-sm' href={blog.url}>Full Blog...</a>
            </div>
        </div>
    );
};

export default Blog;