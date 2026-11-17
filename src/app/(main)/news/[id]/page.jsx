
import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FaEye, FaRegStar, FaShareAlt } from 'react-icons/fa';

export const metadata = {
  title: "News Portal -newsDetails",
  description: "best news portal in bangladesh",
};


const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    const news = await getNewsDetailsById(id);

    const { title, rating, others_info, total_view, thumbnail_url, details, author, image_url } = news;



    return (
        <div className='max-w-5xl mx-auto'>
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
                            <div className='flex gap-3 text-xl'>
                                <FaShareAlt />
                                <CiBookmark />

                            </div>

                        </div>
                        <h2 className="card-title font-bold mt-7">{title}</h2>
                        <figure>

                            <Image src={image_url} width={300} height={300} alt='image'
                                className='w-10/12 mt-5' ></Image>
                        </figure>
                        <p className='mt-5'>{details}</p>
                        <hr />
                        <div className='flex justify-between items-center'>
                            <div >

                                <div className='flex items-center gap-1.5 font-bold '><FaRegStar /> {rating.number}</div>
                               
                            </div>

                            <Link href={"/"}><button className='btn btn-primary'>Back to home</button></Link>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default NewsDetailsPage;