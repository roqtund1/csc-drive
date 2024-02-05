/* eslint-disable react/prop-types */
import React from 'react';

export const Card = ({
  name,
  tags,
  desc,
  fileUrl
}) => {

  const handleDownload = () => {
    // You can choose to open the file in a new tab or trigger a download
    window.open(fileUrl, '_blank');
  };

  return (
    <div className='flex bg-slate-200 gap-4 rounded-sm p-4'>
      <div className='py-4'>
        <h1 className='font-bold mb-3'>{name}</h1>
        <p>{desc}</p>
        <div className="flex gap-2 mt-2">
          {tags?.map((val, index) => (
            <span key={index} className="bg-gray-500 text-white px-2 py-1 rounded-md text-sm">{val}</span>
          ))}
        </div>
        <button onClick={handleDownload} className='bg-[#01df226d] text-white font-medium px-5 py-2 mt-3'>Download</button>
      </div>
    </div>
  );
};
