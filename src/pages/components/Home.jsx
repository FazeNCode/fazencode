import React from 'react';
import Card from '../components/Card';

const topics = [
  {
    title: 'Linux',
    description: 'Learn about Linux, the open-source operating system.',
    link: '/topics/linux',
    image: '/images/linux.jpg',
  },
  {
    title: 'Web Development',
    description: 'Explore web development with the latest technologies.',
    link: '/topics/web-dev',
    image: '/images/web-dev.jpg',
  },
  {
    title: 'VMware',
    description: 'Discover virtualization with VMware.',
    link: '/topics/vmware',
    image: '/images/vmware.jpg',
  },
  // Add more topics as needed
];

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {topics.map((topic, index) => (
        <Card key={index} {...topic} />
      ))}
    </div>
  );
};

export default Home;
