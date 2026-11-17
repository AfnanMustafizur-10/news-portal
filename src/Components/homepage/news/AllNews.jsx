import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FaEye, FaRegStar, FaShareAlt } from 'react-icons/fa';

const AllNews = ({ news }) => {
    // console.log("news nai", news);
    const { title, rating, others_info, total_view, thumbnail_url, details, author,image_url } = news;

    return (
        <div className='space-y-4 p-6 rounded-md'>
            <div className="card bg-base-100  shadow-sm">
                <div className="card-body">
                    {/* author info */}
                    <div className='flex justify-between items-center bg-gray-100 px-3 py-1'>

                    <div className='flex gap-3 items-center '>
                        <div>
                            <Image src={author?.img} alt={author.name} width={40} height={40} className='rounded-full'></Image>
                        </div>
                        <div>
                            <h2 className='text-gray-500 font-bold'>{author.name}</h2>
                            <h2 className='text-gray-500 text-xs'>{author.published_date}</h2>
                        </div>
                    </div>
                    <div className='flex gap-1 text-xl'>
                        <FaShareAlt />
                        <CiBookmark />

                    </div>

                    </div>
                    <h2 className="card-title font-bold">{title}</h2>
                     <figure>
                
                  <Image  src={image_url} width={300} height={300} alt='image'
                  className='w-full' ></Image>
                </figure>
                <p className=' mt- line-clamp-3'>{details}</p>
                <hr />
                <div className='flex justify-between items-center'>
                    <div >

                    <div className='flex items-center gap-1.5 font-bold '><FaRegStar /> {rating.number}</div>
                    <div className='flex items-center gap-1.5 font-bold text-blue-600'> <FaEye />{total_view}</div>
                    </div>

                    <Link href={`/news/${news._id}`}>
                    <button className='btn'>See more</button>
                    </Link>
                </div>
                  
                </div>
                
               
            </div>
        </div>
    );
};

export default AllNews;