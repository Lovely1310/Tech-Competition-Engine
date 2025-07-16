import { Plus, FileText } from 'lucide-react';
import PropTypes from 'prop-types';

const WelcomePage = ({ onImportResume, onCreateNew }) => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Russo+One&family=Zilla+Slab:wght@400;700&family=Abril+Fatface&display=swap');
        .wavy-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
          overflow: hidden;
        }
        .welcome-hd-bg {
          min-height: 100vh;
          width: 100vw;
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: none;
          padding-top: 48px;
        }
        .welcome-content, .welcome-illustration {
          z-index: 2;
        }
        .welcome-content {
          flex: 1 1 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-left: 6vw;
        }
        .heading {
          font-family: 'Abril Fatface', cursive;
          font-weight: 800;
          font-size: 2.8rem;
          color: #001f54;
          margin: 0 0 12px 0;
          text-align: left;
          letter-spacing: 1px;
          text-transform: uppercase;
          background: linear-gradient(90deg, #001f54 0%, #003366 40%, #4f6d7a 60%, #001f54 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          animation: sparkleNavy 2.5s linear infinite;
        }
        @keyframes sparkleNavy {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .subheading {
          font-family: 'Zilla Slab', serif;
          font-weight: 700;
          font-size: 2rem;
          color: #6a0572;
          margin-bottom: 36px;
          text-align: left;
          letter-spacing: 0.2px;
          background: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          animation: none;
        }
        @keyframes floatSubheading {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .hero-actions {
          display: flex;
          gap: 22px;
          justify-content: center;
        }
        .hero-btn {
          border: none;
          border-radius: 24px;
          padding: 14px 38px;
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 1px;
          cursor: pointer;
          outline: none;
          box-shadow: 0 4px 24px 0 rgba(80, 0, 80, 0.13), 0 1.5px 8px 0 rgba(67, 206, 162, 0.10);
          transition: background 0.22s, color 0.22s, transform 0.18s, box-shadow 0.22s;
          display: flex;
          align-items: center;
          font-family: 'Montserrat', Arial, sans-serif;
          margin: 0 8px;
          background: linear-gradient(90deg, #ffb6ea 0%, #e87cff 100%);
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .hero-btn:before {
          content: '';
          position: absolute;
          left: 0; top: 0; right: 0; bottom: 0;
          background: linear-gradient(120deg, #fff 0%, #e87cff 100%);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 0;
        }
        .hero-btn:hover {
          background: linear-gradient(90deg, #e87cff 0%, #a4508b 100%);
          color: #fff;
          transform: scale(1.07);
          box-shadow: 0 8px 32px 0 rgba(164, 80, 139, 0.22), 0 2px 12px 0 rgba(67, 206, 162, 0.13);
        }
        .hero-btn:active {
          transform: scale(0.97);
        }
        .btn-dark {
          background: linear-gradient(90deg, #a4508b 0%, #6a0572 100%);
        }
        .btn-dark:hover {
          background: linear-gradient(90deg, #6a0572 0%, #2d0636 100%);
          color: #fff;
          transform: scale(1.07);
          box-shadow: 0 8px 32px 0 rgba(42, 6, 54, 0.22), 0 2px 12px 0 rgba(67, 206, 162, 0.13);
        }
        .welcome-illustration {
          flex: 1 1 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          min-width: 340px;
          margin-left: 30vw;
        }
        /* Paper and pen animation */
        .paper-pen-svg {
          width: 340px;
          height: 320px;
          display: block;
        }
        .pen-anim {
          transform-origin: 260px 180px;
          animation: penWrite 2.5s ease-in-out infinite alternate;
        }
        @keyframes penWrite {
          0% { transform: rotate(-10deg) translateY(0); }
          50% { transform: rotate(0deg) translateY(8px); }
          100% { transform: rotate(-10deg) translateY(0); }
        }
        .line-anim {
          stroke-dasharray: 80;
          stroke-dashoffset: 80;
          animation: lineDraw 2.5s linear infinite alternate;
        }
        @keyframes lineDraw {
          0% { stroke-dashoffset: 80; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 80; }
        }
        @media (max-width: 900px) {
          .welcome-hd-bg {
            flex-direction: column;
            padding: 64px 0 0 0;
          }
          .welcome-illustration {
            justify-content: center;
            margin-bottom: 32px;
            margin-left: 0;
          }
          .welcome-content {
            align-items: center;
            padding-left: 0;
            text-align: center;
          }
          .hero-actions {
            justify-content: center;
          }
          .heading, .subheading {
            text-align: center;
          }
          .subheading {
            font-size: 1.15rem;
            white-space: normal;
            max-width: 90vw;
            margin-left: auto;
            margin-right: auto;
          }
          /* Hide the last wave (blue) on mobile */
          .wavy-bg .wave5 {
            display: none;
          }
          .wavy-bg svg {
            height: 80vh;
            min-height: 400px;
          }
        }
        /* Wavy SVG animation */
        .wave1 {
          animation: waveMove1 14s ease-in-out infinite alternate;
        }
        .wave2 {
          animation: waveMove2 16s ease-in-out infinite alternate;
        }
        .wave3 {
          animation: waveMove3 18s ease-in-out infinite alternate;
        }
        .wave4 {
          animation: waveMove4 20s ease-in-out infinite alternate;
        }
        .wave5 {
          animation: waveMove5 22s ease-in-out infinite alternate;
        }
        @keyframes waveMove1 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-40px); }
        }
        @keyframes waveMove2 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(30px); }
        }
        @keyframes waveMove3 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-25px); }
        }
        @keyframes waveMove4 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(35px); }
        }
        @keyframes waveMove5 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-20px); }
        }
      `}</style>
      {/* Enhanced Animated Wavy SVG Background */}
      <div className="wavy-bg" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffe0f7" />
              <stop offset="100%" stopColor="#ffd1ff" />
            </linearGradient>
            <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fad0c4" />
              <stop offset="100%" stopColor="#ffd6e0" />
            </linearGradient>
            <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffe5d9" />
              <stop offset="100%" stopColor="#fff1e6" />
            </linearGradient>
            <linearGradient id="grad4" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff1e6" />
              <stop offset="100%" stopColor="#ffd6e0" />
            </linearGradient>
            <linearGradient id="grad5" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffe5d9" />
              <stop offset="100%" stopColor="#ffd6e0" />
            </linearGradient>
          </defs>
          <path className="wave1" d="M0,200 Q360,100 720,200 T1440,200 V900 H0 Z" fill="url(#grad1)" opacity="0.7" />
          <path className="wave2" d="M0,350 Q360,250 720,350 T1440,350 V900 H0 Z" fill="url(#grad2)" opacity="0.6" />
          <path className="wave3" d="M0,500 Q360,600 720,500 T1440,500 V900 H0 Z" fill="url(#grad3)" opacity="0.5" />
          <path className="wave4" d="M0,650 Q360,750 720,650 T1440,650 V900 H0 Z" fill="url(#grad4)" opacity="0.4" />
          <path className="wave5" d="M0,800 Q360,700 720,800 T1440,800 V900 H0 Z" fill="url(#grad5)" opacity="0.3" />
        </svg>
        </div>
      <div className="welcome-hd-bg">
        {/* Left: Content */}
        <div className="welcome-content">
          <h1 className="heading">RESUME BUILDER</h1>
          <div className="subheading">
            Create your perfect resume in minutes
          </div>
          <div className="hero-actions">
            <button className="hero-btn btn-light" onClick={onCreateNew}>
              <Plus size={20} style={{ marginRight: 10, verticalAlign: 'middle' }} />
              Create New
            </button>
            <button className="hero-btn btn-dark" onClick={onImportResume}>
              <FileText size={20} style={{ marginRight: 10, verticalAlign: 'middle' }} />
              Import
            </button>
          </div>
        </div>
        {/* Right: Paper and Pen Illustration with animation */}
        <div className="welcome-illustration">
          <svg className="paper-pen-svg" viewBox="0 0 340 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Paper */}
            <rect x="80" y="60" width="180" height="220" rx="18" fill="#fff" stroke="#a1c4fd" strokeWidth="3" />
            {/* Paper lines */}
            <line x1="100" y1="100" x2="240" y2="100" stroke="#c2e9fb" strokeWidth="3" className="line-anim" />
            <line x1="100" y1="130" x2="240" y2="130" stroke="#c2e9fb" strokeWidth="3" className="line-anim" style={{animationDelay: '0.3s'}} />
            <line x1="100" y1="160" x2="220" y2="160" stroke="#c2e9fb" strokeWidth="3" className="line-anim" style={{animationDelay: '0.6s'}} />
            <line x1="100" y1="190" x2="210" y2="190" stroke="#c2e9fb" strokeWidth="3" className="line-anim" style={{animationDelay: '0.9s'}} />
            {/* Pen (animated) */}
            <g className="pen-anim">
              <rect x="250" y="170" width="48" height="10" rx="5" fill="#232946" />
              <rect x="290" y="170" width="8" height="24" rx="4" fill="#f797e6" />
              <polygon points="298,194 294,194 296,210" fill="#a4508b" />
              <rect x="252" y="172" width="36" height="6" rx="3" fill="#fbc2eb" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

WelcomePage.propTypes = {
  onImportResume: PropTypes.func.isRequired,
  onCreateNew: PropTypes.func.isRequired,
};

export default WelcomePage;