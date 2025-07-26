import { useState } from 'react'
import cLogo from '../assets/c-logo.png'
import pythonLogo from '../assets/python-logo.webp'
import javaLogo from '../assets/java-logo.jpg'
import DeveloperNavbar from '../components/DeveloperNavbar';
import Footer from '../components/Footer';

// Combined data from both screenshots
const submissionsData = [
  // Page 1 data
  { id: 1, problem: '"Hello World!" in C', language: 'c', time: 'about 1 year', result: 'Wrong Answer', score: '0.0' },
  { id: 2, problem: '"Hello World!" in C', language: 'c', time: 'about 1 year', result: 'Wrong Answer', score: '0.0' },
  { id: 3, problem: '"Hello World!" in C', language: 'c', time: 'about 1 year', result: 'Wrong Answer', score: '0.0' },
  { id: 4, problem: '"Hello World!" in C', language: 'c', time: 'about 1 year', result: 'Wrong Answer', score: '0.0' },
  { id: 5, problem: '"Hello World!" in C', language: 'c', time: 'about 1 year', result: 'Wrong Answer', score: '0.0' },
  { id: 6, problem: '"Hello World!" in C', language: 'c', time: 'about 1 year', result: 'Wrong Answer', score: '0.0' },
  
  // Page 2 data
  { id: 7, problem: 'Java Stdin and Stdout I', language: 'java', time: '10 months', result: 'Wrong Answer', score: '0.0' },
  { id: 8, problem: 'Java Stdin and Stdout I', language: 'java', time: '10 months', result: 'Wrong Answer', score: '0.0' },
  { id: 9, problem: 'Java Stdin and Stdout I', language: 'java', time: '10 months', result: 'Wrong Answer', score: '0.0' },
  { id: 10, problem: 'Welcome to Java!', language: 'java', time: '10 months', result: 'Accepted', score: '3.0' },
  { id: 11, problem: 'Python: Division', language: 'pypy3', time: 'about 1 year', result: 'Accepted', score: '10.0' },
  { id: 12, problem: 'Arithmetic Operators', language: 'pypy3', time: 'about 1 year', result: 'Accepted', score: '10.0' },
  { id: 13, problem: 'Python If-Else', language: 'pypy3', time: 'about 1 year', result: 'Accepted', score: '10.0' },
  { id: 14, problem: 'Say "Hello, World!" With Python', language: 'pypy3', time: 'about 1 year', result: 'Accepted', score: '5.0' },
  { id: 15, problem: '"Hello World!" in C', language: 'c', time: 'about 1 year', result: 'Accepted', score: '5.0' },
  { id: 16, problem: '"Hello World!" in C', language: 'c', time: 'about 1 year', result: 'Wrong Answer', score: '0.0' },
]

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  
  const totalPages = Math.ceil(submissionsData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentData = submissionsData.slice(startIndex, startIndex + itemsPerPage)

  const containerStyle = {
    minHeight: '100vh',
    background: '#1e3a8a',
    fontFamily: '"PT Serif", serif',
    paddingTop: '150px',
    paddingBottom: '40px',
    paddingLeft: '20px',
    paddingRight: '20px'
  }

  const mainContainerStyle = {
    maxWidth: '1400px',
    width: '95%',
    margin: '0 auto',
    background: 'rgba(0, 0, 0, 0.95)',
    borderRadius: '16px',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    overflow: 'hidden'
  }

  const externalTitleStyle = {
    fontSize: '48px',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 8px 0',
    letterSpacing: '-0.025em',
    textAlign: 'left',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    marginBottom: '20px',
    paddingLeft: '20px'
  }

  const externalBreadcrumbStyle = {
    fontSize: '18px',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '30px',
    fontWeight: '500',
    textAlign: 'left',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
    marginTop: '20px',
    paddingLeft: '20px'
  }

  const separatorLineStyle = {
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, rgba(253, 253, 253, 0.8) 0%, rgba(34, 180, 248, 0.3) 100%)',
    margin: '30px 0',
    borderRadius: '1px'
  }

  const tableContainerStyle = {
    padding: '0',
    background: '#000000',
    overflow: 'auto',
    maxHeight: '70vh'
  }

  const tableStyle = {
    width: '100%',
    minWidth: '900px',
    borderCollapse: 'collapse',
    fontSize: '14px',
    tableLayout: 'fixed'
  }

  const headerRowStyle = {
    background: '#1f2937',
    borderBottom: '1px solid #374151'
  }

  const headerCellStyle = {
    padding: '16px 24px',
    textAlign: 'left',
    fontWeight: '600',
    color: '#f3f4f6',
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    whiteSpace: 'nowrap',
    maxWidth: '200px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }

  const rowStyle = {
    borderBottom: '1px solid #374151',
    transition: 'background-color 0.2s ease'
  }

  const cellStyle = {
    padding: '16px 24px',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    maxWidth: '200px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#f3f4f6'
  }

  const problemLinkStyle = {
    color: '#2563eb',
    textDecoration: 'none',
    fontWeight: '500',
    cursor: 'pointer'
  }

  const timeStyle = {
    color: '#f59e0b',
    fontWeight: '500'
  }

  const getResultStyle = (result) => {
    return {
      color: result === 'Accepted' ? '#059669' : '#dc2626',
      fontWeight: '600',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.3px',
      backgroundColor: result === 'Accepted' ? 'rgba(5, 150, 105, 0.1)' : 'rgba(220, 38, 38, 0.1)',
      display: 'inline-block',
      minWidth: '70px',
      maxWidth: '100px',
      textAlign: 'center',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }

  const getScoreStyle = (score) => {
    return {
      color: score === '0.0' ? '#dc2626' : '#059669',
      fontWeight: '700',
      fontSize: '14px',
      padding: '4px 8px',
      borderRadius: '6px',
      backgroundColor: score === '0.0' ? 'rgba(220, 38, 38, 0.1)' : 'rgba(5, 150, 105, 0.1)',
      display: 'inline-block',
      minWidth: '40px',
      textAlign: 'center'
    }
  }

  const buttonStyle = {
    padding: '8px 12px',
    border: '2px solid #3b82f6',
    borderRadius: '6px',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    fontSize: '11px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.3px',
    boxShadow: '0 2px 4px rgba(59, 130, 246, 0.2)',
    whiteSpace: 'nowrap',
    minWidth: '80px',
    maxWidth: '120px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }

  const externalPaginationStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px 0',
    gap: '20px',
    marginTop: '30px'
  }

  const externalPageButtonStyle = {
    padding: '12px 18px',
    background: 'transparent',
    color: 'rgba(255, 255, 255, 0.7)',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    border: 'none',
    outline: 'none'
  }

  const externalActivePageStyle = {
    ...externalPageButtonStyle,
    color: '#ffffff',
    fontWeight: '700'
  }

  const externalPrevNextStyle = {
    ...externalPageButtonStyle,
    padding: '12px 20px',
    fontSize: '18px'
  }

  return (
    <div style={containerStyle}>
      <DeveloperNavbar />
      
      <div style={externalBreadcrumbStyle}>All Submissions</div>
      <h1 style={externalTitleStyle}>Submissions</h1>
      
      <div style={separatorLineStyle}></div>
      
      <div style={mainContainerStyle}>
        <div style={tableContainerStyle}>
          <table style={tableStyle}>
            <thead>
              <tr style={headerRowStyle}>
                <th style={{...headerCellStyle, width: '30%'}}>Problem</th>
                <th style={{...headerCellStyle, width: '12%'}}>Language</th>
                <th style={{...headerCellStyle, width: '15%'}}>Time</th>
                <th style={{...headerCellStyle, width: '18%'}}>Result</th>
                <th style={{...headerCellStyle, width: '10%'}}>Score</th>
                <th style={{...headerCellStyle, width: '15%'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((submission, index) => (
                <tr 
                  key={submission.id} 
                  style={rowStyle}
                  onMouseEnter={(e) => e.target.closest('tr').style.backgroundColor = '#374151'}
                  onMouseLeave={(e) => e.target.closest('tr').style.backgroundColor = 'transparent'}
                >
                  <td style={cellStyle}>
                    <a href="#" style={problemLinkStyle}>
                      {submission.problem}
                    </a>
                  </td>
                  <td style={cellStyle}>
                    {submission.language === 'c' ? (
                      <img 
                        src={cLogo} 
                        alt="C" 
                        style={{ 
                          width: '30px', 
                          height: '30px',
                          borderRadius: '4px'
                        }} 
                      />
                    ) : submission.language === 'pypy3' ? (
                      <img 
                        src={pythonLogo} 
                        alt="Python" 
                        style={{ 
                          width: '30px', 
                          height: '30px',
                          borderRadius: '4px'
                        }} 
                      />
                    ) : submission.language === 'java' ? (
                      <img 
                        src={javaLogo} 
                        alt="Java" 
                        style={{ 
                          width: '35px', 
                          height: '30px',
                          borderRadius: '4px'
                        }} 
                      />
                    ) : null}
                  </td>
                  <td style={cellStyle}>
                    <span style={timeStyle}>{submission.time}</span>
                  </td>
                  <td style={cellStyle}>
                    <span style={getResultStyle(submission.result)}>
                      {submission.result}
                    </span>
                  </td>
                  <td style={cellStyle}>
                    <span style={getScoreStyle(submission.score)}>
                      {submission.score}
                    </span>
                  </td>
                  <td style={cellStyle}>
                    <button 
                      style={buttonStyle}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#2563eb'
                        e.target.style.transform = 'translateY(-2px)'
                        e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#3b82f6'
                        e.target.style.transform = 'translateY(0)'
                        e.target.style.boxShadow = '0 2px 4px rgba(59, 130, 246, 0.2)'
                      }}
                    >
                      View results
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={externalPaginationStyle}>
        <button 
          style={externalPrevNextStyle}
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          onMouseEnter={(e) => !e.target.disabled && (e.target.style.color = '#ffffff')}
          onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.7)')}
        >
          ‹
        </button>
        
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            style={currentPage === i + 1 ? externalActivePageStyle : externalPageButtonStyle}
            onClick={() => setCurrentPage(i + 1)}
            onMouseEnter={(e) => {
              if (currentPage !== i + 1) {
                e.target.style.color = '#ffffff'
                e.target.style.transform = 'scale(1.1)'
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== i + 1) {
                e.target.style.color = 'rgba(255, 255, 255, 0.7)'
                e.target.style.transform = 'scale(1)'
              }
            }}
          >
            {i + 1}
          </button>
        ))}
        
        <button 
          style={externalPrevNextStyle}
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          onMouseEnter={(e) => !e.target.disabled && (e.target.style.color = '#ffffff')}
          onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.7)')}
        >
          ›
        </button>
      </div>
      
      <Footer />
    </div>
  )
}

export default App