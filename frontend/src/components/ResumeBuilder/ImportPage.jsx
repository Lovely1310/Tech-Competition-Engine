import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, File, ArrowLeft } from 'lucide-react';
import PropTypes from 'prop-types';

const ImportPage = ({ onBack, onContinue }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setUploadedFile(file);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);
    }
  };

  const handleContinue = () => {
    if (uploadedFile) {
      onContinue();
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

        .importPage {
          min-height: 100vh;
          width: 100vw;
          background: linear-gradient(120deg, #232946 0%, #7f53ac 60%, #f797e6 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 0;
          margin: 0;
        }

        .importContainer {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(24px) saturate(1.2);
          border-radius: 28px;
          padding: 32px 24px 24px 24px;
          width: 95%;
          max-width: 420px;
          position: relative;
          box-shadow: 0 8px 32px 0 rgba(127, 83, 172, 0.18), 0 2px 8px 0 rgba(175, 67, 152, 0.10);
          border: 1.5px solid #e5e7eb;
          margin: 64px auto 32px auto;
          font-family: 'Montserrat', Arial, sans-serif;
        }

        .back-btn {
          margin: 24px 0 0 0;
          width: 48px;
          height: 48px;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.7rem;
          cursor: pointer;
          transition: color 0.2s, transform 0.15s;
          z-index: 10;
        }
        .back-btn:hover, .back-btn:focus {
          color: #af4398;
          transform: scale(1.15);
        }

        .importTitle {
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 24px;
          color: #232946;
        }

        .uploadZone {
          border: 2px dashed #d1d5db;
          border-radius: 18px;
          padding: 32px 12px;
          text-align: center;
          background: rgba(127, 83, 172, 0.04);
          margin-bottom: 18px;
        }

        .uploadIcon {
          color: #7f53ac;
          margin-bottom: 12px;
        }

        .uploadText {
          font-size: 1rem;
          color: #232946;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 18px 0;
          color: #9ca3af;
          font-size: 13px;
        }

        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e5e7eb;
        }

        .filePreview {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .fileIcon {
          color: #43cea2;
          margin-bottom: 6px;
        }

        .fileName {
          font-weight: 600;
          color: #1a202c;
          font-size: 15px;
        }

        .fileSize {
          color: #6b7280;
          font-size: 13px;
        }

        .uploadInfo {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #6b7280;
          font-size: 13px;
          margin-bottom: 18px;
        }

        .continueBtn {
          width: 70%;
          min-width: 120px;
          max-width: 220px;
          margin: 0 auto;
          display: block;
          font-size: 1.1rem;
          padding: 10px 0;
          border-radius: 999px;
          background: linear-gradient(90deg, #43cea2 0%, #185a9d 100%);
          color: #fff;
          font-weight: 700;
          border: none;
          box-shadow: 0 2px 8px rgba(67,206,162,0.10);
          transition: background 0.3s, box-shadow 0.3s, transform 0.15s;
        }

        .continueBtn:hover {
          background: linear-gradient(90deg, #f7971e 0%, #7f53ac 100%);
          box-shadow: 0 4px 16px #7f53ac40;
          transform: scale(1.04);
        }

        @media (max-width: 600px) {
          .importContainer {
            padding: 18px 4vw 18px 4vw;
            max-width: 98vw;
          }
          .continueBtn {
            width: 90%;
            font-size: 1rem;
          }
        }
      `}</style>
      <div className="importPage">
        <motion.button
          className="back-btn"
          onClick={onBack}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={24} />
        </motion.button>
        <motion.div 
          className="importContainer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <motion.h1 
            className="importTitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Import your Resume
          </motion.h1>

          <motion.div 
            className={`uploadZone ${dragActive ? 'drag-active' : ''} ${uploadedFile ? 'file-uploaded' : ''}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {uploadedFile ? (
              <motion.div 
                className="filePreview"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <File size={48} className="fileIcon" />
                <p className="fileName">{uploadedFile.name}</p>
                <p className="fileSize">{(uploadedFile.size / 1024).toFixed(1)} KB</p>
              </motion.div>
            ) : (
              <>
                <motion.div 
                  className="uploadIcon"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Upload size={64} />
                </motion.div>
                <p className="uploadText">Drag and drop your resume here</p>
                <div className="divider">OR</div>
                <motion.label 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileSelect}
                    style={{ display: 'none' }}
                  />
                  Choose a file
                </motion.label>
              </>
            )}
          </motion.div>

          <motion.div 
            className="uploadInfo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Removed upload credits info */}
          </motion.div>

          <motion.button
            className="continueBtn btn-primary btn-large continue-btn"
            onClick={handleContinue}
            disabled={!uploadedFile}
            whileHover={uploadedFile ? { scale: 1.05 } : {}}
            whileTap={uploadedFile ? { scale: 0.95 } : {}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Continue
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

ImportPage.propTypes = {
  onBack: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
};

export default ImportPage;