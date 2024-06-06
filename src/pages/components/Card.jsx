// components/Card.jsx
import React from 'react';
import Link from 'next/link';

const Card = ({ title, description, link, image }) => {
  return (
    <Link href={link}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
        {image && <img className="w-full" src={image} alt={title} />}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;