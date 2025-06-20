import React from 'react';

const ProfilePopups = () => {
  const profiles = [
    {
      id: 'gp1',
      name: 'Isabella Torres',
      achievement: 'Won the Campus hackathon',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
      delay: '2s'
    },
    {
      id: 'gp2',
      name: 'Karan Mehta',
      achievement: 'Solved the R challenge',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
      delay: '8s'
    },
    {
      id: 'gp3',
      name: 'Priya Kapoor',
      achievement: 'Accepted your interview',
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
      delay: '14s'
    },
    {
      id: 'gp4',
      name: 'Anika Verma',
      achievement: 'Passed all test cases',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
      delay: '20s'
    },
    {
      id: 'gp5',
      name: 'Diego Morales',
      achievement: 'Solved the System Design challenge',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
      delay: '26s'
    },
    {
      id: 'gp6',
      name: 'Emma Wilson',
      achievement: 'Passed the SDE II interview',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
      delay: '32s'
    }
  ];

  const getPopupStyle = (index) => {
    const positions = [
      { top: '20%', right: '15%' },
      { top: '45%', right: '8%' },
      { top: '65%', right: '25%' },
      { top: '35%', right: '35%' },
      { top: '15%', right: '40%' },
      { top: '55%', right: '45%' }
    ];

    return positions[index] || { top: '30%', right: '30%' };
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {profiles.map((profile, index) => (
        <div
          key={profile.id}
          className="globe-popup"
          style={{
            ...getPopupStyle(index),
            animationDelay: profile.delay
          }}
        >
          <img 
            src={profile.image} 
            alt={profile.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="globe-popup-name">{profile.name}</p>
            <p className="globe-popup-achievement">{profile.achievement}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfilePopups;