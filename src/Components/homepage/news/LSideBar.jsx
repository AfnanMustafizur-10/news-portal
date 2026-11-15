import Link from 'next/link';
import React from 'react';

const LSideBar = ({categories , activeId}) => {
    return (
        <div>
            <h2 className="font-bold text-lg"> All category</h2>
            <ul className="flex flex-col gap-3 mt-6">

                {categories.map(category => {
                    return <li
                     className={`${activeId == category.category_id &&  "bg-purple-500 text-white"   } rounded-md font-bold text-center text-lg`}
                     key={category.category_id}
                     >
                        <Link href={`/category/${category.category_id}`} className='block py-2.5 '>{category.category_name}</Link>
                     </li>
                })}
            </ul>
        </div>
    );
};

export default LSideBar;