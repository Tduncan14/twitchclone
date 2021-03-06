import React from 'react';
import Image from 'next/image';

function LiveChannelItem({img,profile_img,title = 'null',user ='null',game ='null'}) {
  return (
    <div className="p-2">
        <Image src={img} />
        <div className='flex pt-2'>
            <div className="pr-2">
                <Image src={profile_img}  width="60"  height="60" className="rounded-full"/>
            </div>

            <div>
                <p className="text-sm font-bold">{title}</p>
                <p className="text-sm text-gray-500">{user}</p>
                <p className="text-sm text-gray-500">{game}</p>
            </div>
        </div>
    
    </div>
  )
}

export default LiveChannelItem
