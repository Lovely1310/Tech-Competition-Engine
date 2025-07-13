import React, { useState, useEffect } from 'react';
import Navigation from '../LandingPage/Navigation';
import {
  FaAward,
  FaCertificate,
  FaBriefcase,
  FaUserGraduate,
  FaLink,
  FaTools
} from 'react-icons/fa';

const JobBoard = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger zoom-out effect on component mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx>{`
        #jobboard-container {
          background-image: url('/job.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          transform: scale(1.15);
          transition: transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0.7;
          transition: transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1.5s ease-in-out;
          filter: blur(3px);
          transition: transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      opacity 1.5s ease-in-out, 
                      filter 1.8s ease-in-out;
        }

        #jobboard-container.loaded {
          transform: scale(1);
          opacity: 1;
          filter: blur(0px);
        }

        .profile-container {
          transform: translateY(30px);
          opacity: 0;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      opacity 0.8s ease-in-out;
          transition-delay: 0.5s;
        }

        .profile-container.loaded {
          transform: translateY(0);
          opacity: 1;
        }

        .info-card {
          transform: translateX(50px);
          opacity: 0;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      opacity 0.8s ease-in-out;
        }

        .info-card.loaded {
          transform: translateX(0);
          opacity: 1;
        }

        .info-card:nth-child(1) { transition-delay: 0.7s; }
        .info-card:nth-child(2) { transition-delay: 0.8s; }
        .info-card:nth-child(3) { transition-delay: 0.9s; }
        .info-card:nth-child(4) { transition-delay: 1.0s; }
        .info-card:nth-child(5) { transition-delay: 1.1s; }
        .info-card:nth-child(6) { transition-delay: 1.2s; }

        .enhanced-glass-container {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(25px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .enhanced-glass-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          pointer-events: none;
        }

        .enhanced-glass-container:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.18);
          border-color: rgba(255, 255, 255, 0.35);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .avatar-container {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(15px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .avatar-container:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .text-primary {
          color: #1f2937;
          text-shadow: 0 2px 4px rgba(255, 255, 255, 0.8);
        }

        .text-secondary {
          color: #374151;
          text-shadow: 0 1px 3px rgba(255, 255, 255, 0.7);
        }

        .text-accent {
          color: #059669;
          text-shadow: 0 1px 3px rgba(255, 255, 255, 0.6);
        }

        .text-muted {
          color: #6b7280;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
        }

        .button-glass {
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .button-glass:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .icon-container {
          transition: all 0.3s ease;
        }

        .icon-container:hover {
          transform: scale(1.1) rotate(5deg);
        }

        /* Responsive improvements */
        @media (max-width: 768px) {
          #jobboard-container {
            transform: scale(1.1);
            padding-top: 0;
          }
          
          .profile-container {
            transform: translateY(20px);
            position: relative;
            margin-bottom: 2rem;
          }
          
          .profile-container .enhanced-glass-container {
            position: relative;
            top: auto;
            margin-bottom: 1.5rem;
          }
          
          .info-card {
            transform: translateX(30px);
          }
          
          .enhanced-glass-container {
            border-radius: 16px;
          }
        }

        @media (max-width: 640px) {
          #jobboard-container {
            transform: scale(1.08);
            flex-direction: column;
            padding-top: 0;
          }
          
          .profile-container {
            width: 100%;
            margin-bottom: 1.5rem;
          }
          
          .profile-container .enhanced-glass-container {
            position: relative;
            top: auto;
            margin-bottom: 1rem;
          }
          
          .info-cards-container {
            width: 100%;
            margin-top: 1rem;
          }
          
          .enhanced-glass-container {
            border-radius: 12px;
          }
        }
      `}</style>

      <Navigation />
      <div
        id="jobboard-container"
        className={`flex flex-col md:flex-row min-h-screen pt-20 jobboard-background ${isLoaded ? 'loaded' : ''}`}
      >
        {/* Left Section - Profile */}
        <div className="w-full md:w-[35%] p-4 md:p-6 lg:p-8">
          <div className={`profile-container ${isLoaded ? 'loaded' : ''}`}>
            <div className="enhanced-glass-container md:sticky md:top-24 p-6 md:p-8">
              <div className="shiny-border shiny-top"></div>
              <div className="shiny-border shiny-right"></div>
              <div className="shiny-border shiny-bottom"></div>
              <div className="shiny-border shiny-left"></div>

              <div className="flex flex-col items-center">
                {/* Avatar */}
                <div className="avatar-container w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">H</span>
                </div>

                {/* Name + Handle */}
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1 text-center">Rome Moore 🇺🇸</h1>
                <p className="text-secondary mb-6 text-center text-sm md:text-base">@apply</p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
                  <button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`flex-1 button-glass ${isFollowing
                      ? 'bg-red-600/90 hover:bg-red-700/90 text-white'
                      : 'bg-green-600/90 hover:bg-green-700/90 text-white'
                      } py-2 md:py-3 rounded-lg font-medium text-sm md:text-base font-semibold`}
                  >
                    {isFollowing ? 'Unfollow' : 'Follow'}
                  </button>
                  <button className="flex-1 button-glass bg-slate-800/80 text-white py-2 md:py-3 rounded-lg font-medium hover:bg-slate-900/80 text-sm md:text-base font-semibold">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Info Cards */}
        <div className="info-cards-container w-full md:w-[65%] flex flex-col gap-4 md:gap-6 p-4 md:p-6 lg:p-8">
          {[
            { title: 'Badges', icon: FaAward, content: 'Problem Solving ★' },
            { title: 'Certifications', icon: FaCertificate, content: 'apply has not earned any certificates yet.' },
            { title: 'Work Experience', icon: FaBriefcase, content: 'apply has not updated employment details yet.' },
            { title: 'Education', icon: FaUserGraduate, content: 'apply has not updated education details yet.' },
            { title: 'Links', icon: FaLink, content: 'No external links added.' },
            { title: 'Skills', icon: FaTools, content: 'No skills have been added yet.' }
          ].map(({ title, icon: Icon, content }) => (
            <div key={title} className={`info-card enhanced-glass-container p-4 md:p-6 ${isLoaded ? 'loaded' : ''}`}>
              <div className="shiny-border shiny-top"></div>
              <div className="shiny-border shiny-right"></div>
              <div className="shiny-border shiny-bottom"></div>
              <div className="shiny-border shiny-left"></div>

              <div className="flex items-center gap-3 mb-3">
                <div className="icon-container">
                  <Icon className="text-lg md:text-xl lg:text-2xl text-accent" />
                </div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary">{title}</h2>
              </div>
              <p className="text-secondary text-sm md:text-base leading-relaxed">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobBoard;
