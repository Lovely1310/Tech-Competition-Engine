// Python icon from https://www.flaticon.com/free-icons/python by Freepik
// C++ icon from https://www.flaticon.com/free-icons/code by Freepik
// Artificial Intelligence icon from https://www.flaticon.com/free-icons/artificial-intelligence by Freepik
// C icon from user provided image
// Java icon from user provided image
// Databases icon from user provided image
// Data Structures icon from user provided image
// Algorithms icon from user provided image
import React from 'react';

const topics = [
  {
    name: 'Algorithms',
    icon: (
      <span className="flex justify-center items-center mb-2" style={{height: '2.25rem'}}>
        <svg className="w-8 h-8" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <g>
            <circle cx="256" cy="256" r="256" fill="#545454"/>
            <circle cx="256" cy="256" r="160" fill="#fff"/>
            <g>
              <circle cx="256" cy="256" r="20" fill="#e53935"/>
              <circle cx="376" cy="200" r="20" fill="#8e24aa"/>
              <circle cx="320" cy="376" r="20" fill="#ffb300"/>
              <circle cx="192" cy="376" r="20" fill="#43a047"/>
              <circle cx="136" cy="200" r="20" fill="#1e88e5"/>
              <circle cx="256" cy="136" r="20" fill="#fb8c00"/>
            </g>
            <g stroke="#444" strokeWidth="8">
              <line x1="256" y1="256" x2="376" y2="200" />
              <line x1="256" y1="256" x2="320" y2="376" />
              <line x1="256" y1="256" x2="192" y2="376" />
              <line x1="256" y1="256" x2="136" y2="200" />
              <line x1="256" y1="256" x2="256" y2="136" />
              <line x1="136" y1="200" x2="256" y2="136" />
              <line x1="136" y1="200" x2="192" y2="376" />
              <line x1="376" y1="200" x2="320" y2="376" />
              <line x1="376" y1="200" x2="256" y2="136" />
              <line x1="320" y1="376" x2="192" y2="376" />
            </g>
          </g>
        </svg>
      </span>
    ),
    color: '',
  },
  {
    name: 'Data Structures',
    icon: (
      <span className="flex justify-center items-center mb-2" style={{height: '2.25rem'}}>
        <svg className="w-8 h-8" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <circle cx="256" cy="256" r="256" fill="#7986e8"/>
          <rect x="236" y="140" width="40" height="120" fill="#fff"/>
          <rect x="110" y="220" width="292" height="40" fill="#fff"/>
          <circle cx="256" cy="140" r="60" fill="#ffd600"/>
          <circle cx="110" cy="340" r="50" fill="#a3d4f7"/>
          <circle cx="256" cy="340" r="50" fill="#ff6a00"/>
          <circle cx="402" cy="340" r="50" fill="#69b1f4"/>
        </svg>
      </span>
    ),
    color: '',
  },
  { name: 'Mathematics', icon: '√', color: 'text-blue-800 font-bold' },
  {
    name: 'Artificial Intelligence',
    icon: (
      <span className="flex justify-center items-center mb-2" style={{height: '2.25rem'}}>
        <svg className="w-8 h-8" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M512 256c0 141.385-114.615 256-256 256S0 397.385 0 256 114.615 0 256 0s256 114.615 256 256z" fill="#eaf6ff"/>
            <path d="M256 0v512c141.385 0 256-114.615 256-256S397.385 0 256 0z" fill="#d8ecfe"/>
            <path d="M256 60c-107.523 0-195 87.477-195 195s87.477 195 195 195 195-87.477 195-195-87.477-195-195-195zm0 360c-90.981 0-165-74.019-165-165S165.019 90 256 90s165 74.019 165 165-74.019 165-165 165z" fill="#fff"/>
            <path d="M256 60v30c90.981 0 165 74.019 165 165s-74.019 165-165 165v30c107.523 0 195-87.477 195-195S363.523 60 256 60z" fill="#eaf6ff"/>
            <path d="M256 120c-74.443 0-135 60.557-135 135s60.557 135 135 135 135-60.557 135-135-60.557-135-135-135zm0 240c-57.897 0-105-47.103-105-105s47.103-105 105-105 105 47.103 105 105-47.103 105-105 105z" fill="#3a556a"/>
            <path d="M256 120v30c57.897 0 105 47.103 105 105s-47.103 105-105 105v30c74.443 0 135-60.557 135-135s-60.557-135-135-135z" fill="#243444"/>
            <path d="M256 180c-41.421 0-75 33.579-75 75s33.579 75 75 75 75-33.579 75-75-33.579-75-75-75zm0 120c-24.814 0-45-20.186-45-45s20.186-45 45-45 45 20.186 45 45-20.186 45-45 45z" fill="#3a556a"/>
            <path d="M256 180v30c24.814 0 45 20.186 45 45s-20.186 45-45 45v30c41.421 0 75-33.579 75-75s-33.579-75-75-75z" fill="#243444"/>
            <g>
              <rect x="60" y="120" width="60" height="30" rx="8" fill="#a4e869"/>
              <rect x="392" y="120" width="60" height="30" rx="8" fill="#a4e869"/>
              <rect x="60" y="362" width="60" height="30" rx="8" fill="#ffd580"/>
              <rect x="392" y="362" width="60" height="30" rx="8" fill="#ffd580"/>
            </g>
            <g>
              <rect x="90" y="150" width="30" height="60" rx="8" fill="#fff"/>
              <rect x="392" y="150" width="30" height="60" rx="8" fill="#fff"/>
              <rect x="90" y="302" width="30" height="60" rx="8" fill="#fff"/>
              <rect x="392" y="302" width="30" height="60" rx="8" fill="#fff"/>
            </g>
          </g>
        </svg>
      </span>
    ),
    color: '',
  },
 
  {
    name: 'C',
    icon: (
      <span className="flex justify-center items-center mb-2" style={{height: '2.25rem'}}>
        <svg className="w-8 h-8" viewBox="0 0 512 533" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 32C132.288 32 32 132.288 32 256s100.288 224 224 224 224-100.288 224-224S379.712 32 256 32zm0 416c-105.872 0-192-86.128-192-192S150.128 64 256 64s192 86.128 192 192-86.128 192-192 192zm0-320c-70.688 0-128 57.312-128 128s57.312 128 128 128c29.44 0 56.576-10.016 78.016-26.752l-22.624-27.52C295.36 334.016 276.352 336 256 336c-44.096 0-80-35.904-80-80s35.904-80 80-80c20.352 0 39.36 1.984 55.392 5.28l22.624-27.52C312.576 122.016 285.44 112 256 112z" fill="#000"/>
        </svg>
      </span>
    ),
    color: '',
  },
  {
    name: 'C++',
    icon: (
      <span className="flex justify-center items-center mb-2" style={{height: '2.25rem'}}>
        <svg className="w-8 h-8" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <rect width="512" height="512" rx="32" fill="#00599C"/>
          <text x="50%" y="57%" textAnchor="middle" fill="white" fontSize="180" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" dy=".3em">C++</text>
        </svg>
      </span>
    ),
    color: '',
  },
  {
    name: 'Java',
    icon: (
      <span className="flex justify-center items-center mb-2" style={{height: '2.25rem'}}>
        <svg className="w-8 h-8" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M316.1 41.7c0 44.2-36.2 71.2-80.7 108.2-44.5 37-53.2 61.7-53.2 85.1 0 32.2 25.2 62.2 66.2 90.7-27.2-27.2-39.2-54.2-39.2-77.2 0-23.2 8.7-47.7 53.2-84.7 44.5-37 80.7-64 80.7-108.2 0-18.2-6.2-34.2-16.2-48.2 6.2 12.2 9.2 25.2 9.2 38.3z" fill="#e76f00"/>
          <path d="M352.2 104.7c-44.5 18.2-66.2 38.2-77.2 56.2-11 18.2-11 36.2-2.2 54.2 8.7 18.2 25.2 36.2 32.2 54.2 7 18.2 2.2 36.2-11 54.2 27.2-18.2 44.5-36.2 44.5-56.2 0-18.2-8.7-34.2-18.2-50.2-9.2-16.2-18.2-32.2-9.2-50.2 8.7-18.2 32.2-36.2 41.7-44.2z" fill="#e76f00"/>
          <path d="M370.4 312.2c-18.2 7-44.5 14.2-80.7 14.2-36.2 0-62.2-7-80.7-14.2-44.5 7-80.7 16.2-80.7 25.2 0 12.2 62.2 25.2 161.4 25.2 99.2 0 161.4-13 161.4-25.2 0-9-36.2-18.2-80.7-25.2zM370.4 368.4c-18.2 7-44.5 14.2-80.7 14.2-36.2 0-62.2-7-80.7-14.2-44.5 7-80.7 16.2-80.7 25.2 0 12.2 62.2 25.2 161.4 25.2 99.2 0 161.4-13 161.4-25.2 0-9-36.2-18.2-80.7-25.2zM370.4 424.6c-18.2 7-44.5 14.2-80.7 14.2-36.2 0-62.2-7-80.7-14.2-44.5 7-80.7 16.2-80.7 25.2 0 12.2 62.2 25.2 161.4 25.2 99.2 0 161.4-13 161.4-25.2 0-9-36.2-18.2-80.7-25.2z" fill="#4b6e8e"/>
        </svg>
      </span>
    ),
    color: '',
  },
  {
    name: 'Python',
    icon: (
      <span className="flex justify-center items-center mb-2" style={{height: '2.25rem'}}>
        <svg className="w-8 h-8" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <linearGradient id="pythonYellow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffd43b"/>
            <stop offset="100%" stopColor="#ffe873"/>
          </linearGradient>
          <linearGradient id="pythonBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#306998"/>
            <stop offset="100%" stopColor="#4B8BBE"/>
          </linearGradient>
          <path d="M254.1 0c-19.7.1-38.7 1.8-55.2 4.8-48.8 8.6-57.7 26.7-57.7 60.1v44.1h115.4v14.7H97.2c-33.5 0-62.7 20.2-71.9 58.6-10.6 44.1-11.1 71.7 0 117.7 8.2 34.1 27.8 58.6 61.3 58.6h39.7v-52.8c0-38.2 33.1-71.7 71.9-71.7h115.4c32.1 0 57.7-26.4 57.7-58.6V64.9c0-31.3-26.4-54.2-57.7-60.1C292.8 1.8 273.8-.1 254.1 0zm-63.2 37.2c10.1 0 18.3 8.2 18.3 18.3 0 10.1-8.2 18.3-18.3 18.3-10.1 0-18.3-8.2-18.3-18.3.1-10.1 8.2-18.3 18.3-18.3z" fill="url(#pythonBlue)"/>
          <path d="M257.9 512c19.7-.1 38.7-1.8 55.2-4.8 48.8-8.6 57.7-26.7 57.7-60.1v-44.1H255.4v-14.7h159.4c33.5 0 62.7-20.2 71.9-58.6 10.6-44.1 11.1-71.7 0-117.7-8.2-34.1-27.8-58.6-61.3-58.6h-39.7v52.8c0 38.2-33.1 71.7-71.9 71.7H198.4c-32.1 0-57.7 26.4-57.7 58.6v117.7c0 31.3 26.4 54.2 57.7 60.1 16.5 3 35.5 4.9 55.2 4.8zm63.2-37.2c-10.1 0-18.3-8.2-18.3-18.3 0-10.1 8.2-18.3 18.3-18.3 10.1 0 18.3 8.2 18.3 18.3-.1 10.1-8.2 18.3-18.3 18.3z" fill="url(#pythonYellow)"/>
        </svg>
      </span>
    ),
    color: '',
  },
  { name: 'Ruby', icon: '💎', color: 'text-red-500' },
  { name: 'SQL', icon: '🗄️', color: 'text-indigo-500' },
  {
    name: 'Databases',
    icon: (
      <span className="flex justify-center items-center mb-2" style={{height: '2.25rem'}}>
        <svg className="w-8 h-8" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="256" cy="104" rx="216" ry="88" fill="#6c7eb7"/>
          <ellipse cx="256" cy="104" rx="184" ry="72" fill="#8a9edb"/>
          <ellipse cx="256" cy="104" rx="152" ry="56" fill="#b0baf2"/>
          <rect x="40" y="104" width="432" height="96" rx="88" fill="#6c7eb7"/>
          <ellipse cx="256" cy="200" rx="216" ry="88" fill="#6c7eb7"/>
          <ellipse cx="256" cy="200" rx="184" ry="72" fill="#8a9edb"/>
          <ellipse cx="256" cy="200" rx="152" ry="56" fill="#b0baf2"/>
          <rect x="40" y="200" width="432" height="96" rx="88" fill="#6c7eb7"/>
          <ellipse cx="256" cy="296" rx="216" ry="88" fill="#6c7eb7"/>
          <ellipse cx="256" cy="296" rx="184" ry="72" fill="#8a9edb"/>
          <ellipse cx="256" cy="296" rx="152" ry="56" fill="#b0baf2"/>
          <g>
            <circle cx="416" cy="144" r="12" fill="#ff5e5b"/>
            <circle cx="448" cy="160" r="12" fill="#ffb340"/>
            <circle cx="416" cy="176" r="12" fill="#43d675"/>
            <circle cx="448" cy="192" r="12" fill="#43d675"/>
            <circle cx="416" cy="208" r="12" fill="#ffb340"/>
            <circle cx="448" cy="224" r="12" fill="#ff5e5b"/>
          </g>
          <g>
            <circle cx="96" cy="144" r="12" fill="#ff5e5b"/>
            <circle cx="64" cy="160" r="12" fill="#ffb340"/>
            <circle cx="96" cy="176" r="12" fill="#43d675"/>
            <circle cx="64" cy="192" r="12" fill="#43d675"/>
            <circle cx="96" cy="208" r="12" fill="#ffb340"/>
            <circle cx="64" cy="224" r="12" fill="#ff5e5b"/>
          </g>
          <g>
            <circle cx="416" cy="320" r="12" fill="#ff5e5b"/>
            <circle cx="448" cy="336" r="12" fill="#ffb340"/>
            <circle cx="416" cy="352" r="12" fill="#43d675"/>
            <circle cx="448" cy="368" r="12" fill="#43d675"/>
            <circle cx="416" cy="384" r="12" fill="#ffb340"/>
            <circle cx="448" cy="400" r="12" fill="#ff5e5b"/>
          </g>
          <g>
            <circle cx="96" cy="320" r="12" fill="#ff5e5b"/>
            <circle cx="64" cy="336" r="12" fill="#ffb340"/>
            <circle cx="96" cy="352" r="12" fill="#43d675"/>
            <circle cx="64" cy="368" r="12" fill="#43d675"/>
            <circle cx="96" cy="384" r="12" fill="#ffb340"/>
            <circle cx="64" cy="400" r="12" fill="#ff5e5b"/>
          </g>
          <g>
            <circle cx="416" cy="464" r="12" fill="#ff5e5b"/>
            <circle cx="448" cy="480" r="12" fill="#ffb340"/>
            <circle cx="416" cy="496" r="12" fill="#43d675"/>
            <circle cx="448" cy="512" r="12" fill="#43d675"/>
            <circle cx="416" cy="528" r="12" fill="#ffb340"/>
            <circle cx="448" cy="544" r="12" fill="#ff5e5b"/>
          </g>
          <g>
            <circle cx="96" cy="464" r="12" fill="#ff5e5b"/>
            <circle cx="64" cy="480" r="12" fill="#ffb340"/>
            <circle cx="96" cy="496" r="12" fill="#43d675"/>
            <circle cx="64" cy="512" r="12" fill="#43d675"/>
            <circle cx="96" cy="528" r="12" fill="#ffb340"/>
            <circle cx="64" cy="544" r="12" fill="#ff5e5b"/>
          </g>
          <g>
            <circle cx="416" cy="464" r="12" fill="#ff5e5b"/>
            <circle cx="448" cy="480" r="12" fill="#ffb340"/>
            <circle cx="416" cy="496" r="12" fill="#43d675"/>
            <circle cx="448" cy="512" r="12" fill="#43d675"/>
            <circle cx="416" cy="528" r="12" fill="#ffb340"/>
            <circle cx="448" cy="544" r="12" fill="#ff5e5b"/>
          </g>
          <g>
            <circle cx="96" cy="464" r="12" fill="#ff5e5b"/>
            <circle cx="64" cy="480" r="12" fill="#ffb340"/>
            <circle cx="96" cy="496" r="12" fill="#43d675"/>
            <circle cx="64" cy="512" r="12" fill="#43d675"/>
            <circle cx="96" cy="528" r="12" fill="#ffb340"/>
            <circle cx="64" cy="544" r="12" fill="#ff5e5b"/>
          </g>
          <g>
            <circle cx="416" cy="464" r="12" fill="#ff5e5b"/>
            <circle cx="448" cy="480" r="12" fill="#ffb340"/>
            <circle cx="416" cy="496" r="12" fill="#43d675"/>
            <circle cx="448" cy="512" r="12" fill="#43d675"/>
            <circle cx="416" cy="528" r="12" fill="#ffb340"/>
            <circle cx="448" cy="544" r="12" fill="#ff5e5b"/>
          </g>
          <g>
            <circle cx="96" cy="464" r="12" fill="#ff5e5b"/>
            <circle cx="64" cy="480" r="12" fill="#ffb340"/>
            <circle cx="96" cy="496" r="12" fill="#43d675"/>
            <circle cx="64" cy="512" r="12" fill="#43d675"/>
            <circle cx="96" cy="528" r="12" fill="#ffb340"/>
            <circle cx="64" cy="544" r="12" fill="#ff5e5b"/>
          </g>
        </svg>
      </span>
    ),
    color: '',
  },
  { name: 'Linux Shell', icon: '🐧', color: 'text-black' },
  { name: 'Functional Programming', icon: 'λ', color: 'text-fuchsia-600 font-bold' },
  { name: 'Regex', icon: '.*', color: 'text-red-600 font-bold' },
  { name: 'React', icon: '⚛️', color: 'text-sky-400' },
];

const TopicsSection = () => {
  return (
    <>
      <section>
        <h2 className="text-xl font-extrabold italic font-serif text-black mb-6 text-center">Prepare By Topics</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 shadow-lg rounded-xl p-6 transition-transform transition-shadow transition-filter duration-200 animated-topic-card hover:scale-105 hover:shadow-2xl hover:brightness-150"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-center">
                {typeof topic.icon === 'string' ? (
                  <div className={`text-2xl flex justify-center items-center mb-2 group-hover:scale-110 transition-transform ${topic.color}`} style={{height: '2.25rem'}}>
                    {topic.icon}
                  </div>
                ) : (
                  topic.icon
                )}
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600">
                  {topic.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <style>{`
        .animated-card-bg {
          background: linear-gradient(120deg, #f3e7fa 0%, #e0eafc 50%, #f9f9f9 100%);
          background-size: 200% 200%;
          animation: cardGradientMove 8s ease-in-out infinite;
        }
        @keyframes cardGradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animated-topic-card {
          opacity: 0;
          animation: fadeInUp 0.7s forwards;
        }
      `}</style>
    </>
  );
};

export default TopicsSection;
