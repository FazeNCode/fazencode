import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Home = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('https://your-api-endpoint.amazonaws.com/dev/topics')
      .then(response => response.json())
      .then(data => setTopics(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {topics.map((topic, index) => (
        <Card
          key={index}
          title={topic.title}
          description={topic.description}
          link={topic.link}
          image={topic.image}
        />
      ))}
    </div>
  );
};

export default Home;