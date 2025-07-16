import { motion } from 'framer-motion';
import { ArrowLeft, Crown, Zap, Star } from 'lucide-react';
import PropTypes from 'prop-types';

const TemplateSelection = ({ onBack }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600&display=swap');

        .templateSelection {
          min-height: 100vh;
          width: 100vw;
          background: linear-gradient(120deg, #e0e0e0 0%, #232526 100%);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 0;
          margin: 0;
        }

        .templateContainer {
          width: 90vw;
          max-width: 1400px;
          margin: 0 auto;
          background: transparent;
          border-radius: 0;
          padding: 80px 60px 48px 60px;
          position: relative;
          min-height: 100vh;
          box-sizing: border-box;
        }

        .templateTitle {
          font-family: 'Montserrat', Arial, sans-serif;
          font-size: 42px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 16px;
          color: #333333;
          text-shadow: none;
          line-height: 1.2;
        }

        .templateSubtitle {
          font-family: 'Montserrat', Arial, sans-serif;
          font-size: 18px;
          color: #4A4A4A;
          text-align: center;
          margin-top: 18px;
          margin-bottom: 48px;
          font-style: normal;
          font-weight: 400;
          line-height: 1.5;
        }

        .templateGrid {
          display: flex;
          flex-wrap: wrap;
          gap: 32px 32px;
          justify-content: center;
        }

        .templateCard {
          flex: 1 1 300px;
          max-width: 340px;
          background: #fff;
        }

        /* Center the last row if it has fewer than the full number of columns */
        @media (min-width: 900px) {
          .templateGrid {
            justify-content: center;
            align-items: flex-start;
          }
        }

        .templateCard {
          border-radius: 15px;
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .templateCard:hover {
          border-color: transparent;
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
        }

        .premiumBadge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: #f59e0b;
          color: white;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .templatePreview {
          height: 200px;
          border-radius: 12px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .templateIcon {
          font-size: 48px;
        }

        .templateInfo {
          text-align: center;
        }

        .templateName {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1a202c;
        }

        .templateDescription {
          color: #6b7280;
          margin-bottom: 16px;
        }

        .btnOutline {
          border-radius: 8px;
          font-family: 'Inter', 'Poppins', Arial, sans-serif;
          font-size: 16px;
          font-weight: 600;
          background: transparent;
          border: 2px solid #A0AEC0;
          color: #4A5568;
          padding: 10px 20px;
          box-shadow: none;
          transition: all 0.3s ease-in-out;
        }

        .btnOutline:hover {
          background: #4299E1;
          color: #fff;
          border: none;
          transform: translateY(-2px);
        }

        .disabledCard:hover {
          /* removed green border for disabledCard */
        }

        @media (max-width: 900px) {
          .templateContainer {
            padding: 40px 2vw 32px 2vw;
          }
        }
      `}</style>
      <div className="templateSelection">
        <motion.div 
          className="templateContainer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="back-btn"
            onClick={onBack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} />
          </motion.button>

          <motion.h1 
            className="templateTitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose Your Template
          </motion.h1>

          <motion.p 
            className="templateSubtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Select a professional template that matches your style
          </motion.p>

          <motion.div 
            className="templateGridContainer"
            style={{ background: 'rgba(30, 41, 59, 0.85)', padding: '40px 24px', borderRadius: '32px', boxShadow: '0 8px 32px #23294640', margin: '0 auto', maxWidth: '1200px' }}
          >
            <div className="templateGrid">
              {['Classic', 'Modern', 'Professional', 'Elegant', 'Creative', 'Minimal'].map((type) => {
                let icon;
                let cardColor;
                let buttonColor;
                let buttonHoverColor;
                switch (type) {
                  case 'Classic':
                    icon = <Star size={32} />;
                    cardColor = '#F5D650';
                    buttonColor = '#B8860B';
                    buttonHoverColor = '#7B5E00';
                    break;
                  case 'Modern':
                    icon = <Zap size={32} />;
                    cardColor = '#56B9AE';
                    buttonColor = '#008080';
                    buttonHoverColor = '#004D4D';
                    break;
                  case 'Creative':
                    icon = <Crown size={32} />;
                    cardColor = '#F98866';
                    buttonColor = '#C0392B';
                    buttonHoverColor = '#7B241C';
                    break;
                  case 'Minimal':
                    icon = <ArrowLeft size={32} />;
                    cardColor = '#D3D3D3';
                    buttonColor = '#757575';
                    buttonHoverColor = '#424242';
                    break;
                  case 'Professional':
                    icon = <Star size={32} style={{ color: '#6366F1' }} />;
                    cardColor = '#5C6BC0';
                    buttonColor = '#283593';
                    buttonHoverColor = '#1A237E';
                    break;
                  case 'Elegant':
                    icon = <Crown size={32} style={{ color: '#3B82F6' }} />;
                    cardColor = '#C46D9B';
                    buttonColor = '#8B005D';
                    buttonHoverColor = '#4A0033';
                    break;
                  default:
                    icon = <Star size={32} />;
                    cardColor = '#F5D650';
                    buttonColor = '#B8860B';
                    buttonHoverColor = '#7B5E00';
                }
                return (
                  <motion.div
                    key={type}
                    className="templateCard"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.03,
                      borderColor: 'transparent',
                      boxShadow: '0 8px 32px #7f53ac30',
                      y: -5
                    }}
                    style={{ opacity: 0.8, cursor: 'not-allowed', background: cardColor }}
                  >
                    <div className="templatePreview" style={{ backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120px' }}>
                      {icon}
                    </div>
                    <div className="templateInfo">
                      <h3 className="templateName">{type}</h3>
                      <motion.button
                        className="btnOutline"
                        disabled
                        style={{
                          opacity: 0.5,
                          cursor: 'not-allowed',
                          background: buttonColor,
                          color: '#fff',
                          border: 'none',
                          transition: 'all 0.3s ease-in-out'
                        }}
                        onMouseOver={e => e.currentTarget.style.background = buttonHoverColor}
                        onMouseOut={e => e.currentTarget.style.background = buttonColor}
                      >
                        Use Template
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

TemplateSelection.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default TemplateSelection;