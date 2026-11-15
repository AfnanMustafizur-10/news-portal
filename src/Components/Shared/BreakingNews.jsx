import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 container mx-auto px-3'>
            <button className='btn bg-red-500 text-amber-50'>Latest news</button>
            <Marquee delay={2} pauseOnHover={true} speed={30}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reiciendis provident dignissimos hic minus aut quidem ratione, molestias amet architecto laboriosam est, soluta nemo eveniet sunt impedit, explicabo autem ipsum voluptatibus tempora consequatur eos adipisci. Distinctio quia dolorum quisquam fuga quidem, nulla expedita doloribus eligendi sapiente eveniet, molestias ipsa? Commodi nobis eveniet eius quo voluptatibus harum neque. Officia aperiam tenetur facere. Harum voluptas amet necessitatibus adipisci enim laudantium nobis totam alias nam, sint porro nulla sequi et? Quisquam veritatis cumque consectetur ex nostrum facere tempora dolore! Aliquid sunt similique blanditiis voluptate, in minus, corrupti praesentium ipsa obcaecati doloremque eius necessitatibus laborum quidem. Quas reiciendis enim aliquam illum assumenda dolorem facere architecto minus voluptatum ducimus quam similique, repellendus, porro neque ea distinctio expedita! Nobis laudantium, magnam voluptate perspiciatis quo ut laboriosam rerum. Cum magnam quaerat deserunt placeat? Accusantium, officia animi dicta deleniti rem sunt perferendis esse quasi corporis laudantium recusandae eaque sapiente consequatur, assumenda consequuntur vero. Deleniti adipisci provident repellendus iusto error quidem nobis reiciendis consequuntur. Repellendus minus fugit vitae voluptas doloremque tenetur excepturi quisquam corporis quidem est quae commodi odit quas dolorum deleniti veniam error, nesciunt, enim impedit voluptatum. Praesentium nemo voluptate blanditiis exercitationem quasi itaque magnam unde, alias provident recusandae autem possimus aspernatur ea molestiae assumenda quas natus accusantium at. Molestias ut tempore ad saepe accusantium, tempora enim recusandae, ipsam nisi voluptate iusto sed cum pariatur nulla. Amet officia dignissimos, expedita est error totam magni consequatur dolore inventore odit. Est reiciendis sequi veritatis hic voluptas impedit aliquam accusamus reprehenderit.
            </Marquee>
        </div>
    );
};

export default BreakingNews;