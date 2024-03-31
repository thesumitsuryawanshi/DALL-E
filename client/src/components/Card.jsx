// Card.jsx
import React from 'react';

import { download } from "../assets"
import { downloadImage } from "../utils"

const Card = ({ post }) => {
      return (
            <div className="text-center  group relative shadow-card hover:shadow-cardhover card   rounded-2xl bg-black">
                  <img src={post.photo} alt={post.prompt} className='w-full h-auto object-cover rounded-xl' />
                  <div className='group-hover:flex  flex-col max-h-[94.5%] hidden absolute bottom-0 right-0 left-0 bg-[#10131f]/50 m-2 p-4 rounded-md'>
                        <p className='text-white text-smoverflow-y-auto prompt'>  {post.prompt}</p>

                        <div className='mt-5 flex justify-between items-center gap-2 '>
                              <div className='flex gap-2 items-center'>
                                    <div className='bg-red-500 rounded-md p-2 m-2 text-white object-cover '>
                                          {post.name[0]}
                                    </div>
                                    <p className='text-white text-sm'> {post.name}</p>
                              </div>
                              <button type="button" onClick={() => downloadImage(post._id, post.photo)} className="outline-none bg-transparent border-none">
                                    <img src={download} alt='donwload ' className='w-6 h-6 object-contain invert' />
                              </button>
                        </div>
                  </div>

            </div>
      );
};
export default Card;