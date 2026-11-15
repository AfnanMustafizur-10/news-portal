import AllNews from '@/Components/homepage/news/AllNews';
import LSideBar from '@/Components/homepage/news/LSideBar';
import RSideBar from '@/Components/homepage/news/RSideBar';
import { getCategory, getNewsByCategoryId } from '@/lib/data';
import React from 'react';


export const metadata = {
  title: "News Portal- category ",
  description: "best news portal in bangladesh",
};


const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);

    const categories = await getCategory();
    const allNews = await getNewsByCategoryId(id)
    console.log(allNews);
    

    return (
        <div>
            <div className=" container mx-auto grid grid-cols-12 gap-5 mt-10 my-[60px]">
                <div className="font-bold text-3xl col-span-3">

                    <ul className="flex flex-col gap-3 mt-6">

                        <LSideBar categories={categories} activeId={id}></LSideBar>
                    </ul>
                </div>
                <div className=" col-span-6">

                    {
                       allNews.length>0?  allNews.map(news => <AllNews key={news._id} news={news}></AllNews>):<p>No  news found</p>
                    }
                </div>
                <div className="font-bold text-3xl col-span-3"><RSideBar></RSideBar></div>
            </div>
        </div>

    );
};

export default NewsCategoryPage;