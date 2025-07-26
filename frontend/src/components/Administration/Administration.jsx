import { useState } from 'react';
import { Search, Plus, XCircle } from 'lucide-react';
import { Inbox } from 'lucide-react';

const Administration = () => {
  const [activeTab, setActiveTab] = useState('contests');
  const [searchTerm, setSearchTerm] = useState('');

  const styles = {
    container: {
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      background: 'linear-gradient(135deg, #2a1a0e 0%, #3a2c1a 40%, #1a120b 100%)',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      boxShadow: '0 0 120px 0 #2a1a0e inset',
      color: '#ffffff',
      fontFamily: 'Inter, system-ui, sans-serif',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    },
    header: {
      padding: '120px 48px 0',
      // borderBottom: '1px solid #334155' // Removed border to eliminate side outline
    },
    title: {
      fontSize: '54px',
      fontWeight: '800',
      marginBottom: '18px',
      color: '#fff',
      letterSpacing: '-0.035em',
      fontFamily: '"Intel One Mono", monospace',
      lineHeight: 1.1,
    },
    tabContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '0',
      gap: '16px',
      flexWrap: 'nowrap'
    },
    tabList: {
      display: 'flex',
      gap: '0',
      flex: '1'
    },
    tab: {
      padding: '14px 36px',
      fontSize: '17px',
      fontWeight: '700',
      background: 'rgba(255,255,255,0.02)',
      border: 'none',
      color: '#8ca3c7',
      cursor: 'pointer',
      borderRadius: '999px',
      marginRight: '18px',
      boxShadow: '0 2px 8px rgba(16,24,40,0.08)',
      borderBottom: 'none',
      outline: 'none',
      transition: 'all 0.22s cubic-bezier(.4,2,.6,1)',
      position: 'relative',
    },
    activeTab: {
      color: '#fff',
      background: 'linear-gradient(90deg, #a259ff 0%, #6d28d9 100%)',
      boxShadow: '0 4px 24px 0 rgba(162,89,255,0.18)',
      transform: 'scale(1.06)',
      border: 'none',
    },
    searchContainer: {
      position: 'relative',
      width: '260px',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchInput: {
      width: '100%',
      padding: '12px 16px 12px 44px',
      background: 'rgba(40, 50, 70, 0.45)',
      border: '1.5px solid rgba(100, 116, 139, 0.22)',
      borderRadius: '12px',
      color: '#e0e8f7',
      fontSize: '15px',
      outline: 'none',
      transition: 'all 0.22s cubic-bezier(.4,2,.6,1)',
      backdropFilter: 'blur(14px)',
      boxSizing: 'border-box',
      boxShadow: '0 2px 12px 0 rgba(16,24,40,0.10) inset',
      fontWeight: 500,
      letterSpacing: '0.01em',
    },
    searchInputFocus: {
      borderColor: '#10b981',
      background: 'rgba(55, 65, 81, 0.55)',
      boxShadow: '0 0 0 4px rgba(16,185,129,0.13), 0 2px 12px 0 rgba(16,185,129,0.10) inset',
    },
    searchIcon: {
      position: 'absolute',
      left: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#60a5fa',
      opacity: 0.85,
      pointerEvents: 'none',
      filter: 'drop-shadow(0 1px 4pxrgba(15, 102, 208, 0.2))',
      zIndex: 2,
    },
    clearIcon: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#a3adc7',
      opacity: 0.7,
      cursor: 'pointer',
      zIndex: 2,
      transition: 'color 0.2s',
    },
    content: {
      padding: '32px 48px'
    },
    infoText: {
      fontSize: '16px',
      color: '#cbd5e1',
      marginBottom: '32px',
      lineHeight: '1.6'
    },
    link: {
      color: '#3b82f6',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'color 0.3s ease'
    },
    linkHover: {
      color: '#60a5fa'
    },
    actionContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: '32px'
    },
    createButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 20px',
      background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)',
      position: 'relative',
      overflow: 'hidden'
    },
    createButtonHover: {
      background: 'linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(16, 185, 129, 0.5)'
    },
    tabGradient: {
      // No longer needed, handled in activeTab
    },
    emptyState: {
      background: 'linear-gradient(120deg, #3a2c1a 0%, #2d2320 60%, #4b3a1e 100%)',
      border: '1.5px solid rgba(100, 116, 139, 0.18)',
      borderRadius: '28px',
      padding: '56px 0 44px 0',
      textAlign: 'center',
      marginTop: '48px',
      maxWidth: '620px',
      minHeight: '340px',
      marginLeft: 'auto',
      marginRight: 'auto',
      boxShadow: '0 12px 60px 0 rgba(90, 70, 30, 0.18), 0 2px 24px 0 rgba(16, 24, 40, 0.18)',
      backdropFilter: 'blur(18px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      animation: 'shine 5s ease-in-out infinite',
      backgroundSize: '200% 200%',
    },
    emptyStateText: {
      fontSize: '20px',
      color: '#eaf6ff',
      fontWeight: '700',
      marginTop: '12px',
      letterSpacing: '0.01em',
      lineHeight: 1.5,
    },
    emptyStateSubtext: {
      fontSize: '16px',
      color: '#c6e2ff',
      marginTop: '6px',
      marginBottom: '28px',
      fontWeight: '400',
      opacity: 0.96,
    },
    emptyStateButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '18px 48px',
      background: 'linear-gradient(135deg, #a259ff 0%, #6d28d9 100%)',
      color: '#fff',
      border: 'none',
      borderRadius: '12px',
      fontSize: '19px',
      fontWeight: '800',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 6px 22px rgba(162, 89, 255, 0.18)',
      marginTop: '20px',
    },
  };

  const handleCreateClick = () => {
    const action = activeTab === 'contests' ? 'Contest' : 'Challenge';
    alert(`Create ${action} functionality would be implemented here!`);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Intel+One+Mono:wght@700;800&display=swap');
        html, body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background: transparent;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 0.7; }
        }
        @media (max-width: 480px) {
          .admin-header-title {
            font-size: 2.1rem !important;
            margin-bottom: 10px !important;
          }
          .admin-header-line {
            width: 60% !important;
            margin: 0 auto 22px auto !important;
            border-top-width: 2px !important;
            display: block;
          }
          .admin-tab-row-mobile {
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
            gap: 12px !important;
            margin-bottom: 12px !important;
          }
          .admin-tab-btn {
            width: 100% !important;
            font-size: 1rem !important;
            padding: 12px 0 !important;
            margin: 0 0 0 0 !important;
            border-radius: 999px !important;
          }
          .admin-search-container {
            width: 100% !important;
            margin: 10px 0 0 0 !important;
          }
          .admin-empty-btn {
            width: 90% !important;
            padding: 12px 0 !important;
            font-size: 1rem !important;
            margin: 16px auto 0 auto !important;
            border-radius: 10px !important;
            display: flex;
            justify-content: center;
          }
          .admin-empty-state {
            min-width: 0 !important;
            max-width: 98vw !important;
            padding: 32px 0 24px 0 !important;
          }
        }
      `}</style>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title} className="admin-header-title">Administration</h1>
          <hr className="admin-header-line" style={{
            border: 'none',
            borderTop: '2.5px solid #a259ff',
            width: '100%',
            margin: '0 0 28px 0',
            opacity: 0.85,
          }} />
          
          <div style={styles.tabContainer} className="admin-tab-list admin-tab-row-mobile">
            <div style={styles.tabList}>
              <button
                style={{
                  ...styles.tab,
                  ...(activeTab === 'contests' ? styles.activeTab : {}),
                }}
                className="admin-tab-btn"
                onClick={() => setActiveTab('contests')}
                onMouseEnter={e => {
                  if (activeTab !== 'contests') {
                    e.target.style.background = 'rgba(16,185,129,0.08)';
                    e.target.style.color = '#10b981';
                    e.target.style.boxShadow = '0 2px 12px 0 rgba(16,185,129,0.10)';
                    e.target.style.transform = 'scale(1.04)';
                  }
                }}
                onMouseLeave={e => {
                  if (activeTab !== 'contests') {
                    e.target.style.background = styles.tab.background;
                    e.target.style.color = styles.tab.color;
                    e.target.style.boxShadow = styles.tab.boxShadow;
                    e.target.style.transform = 'scale(1)';
                  }
                }}
              >
                Manage Contests
              </button>
              <button
                style={{
                  ...styles.tab,
                  ...(activeTab === 'challenges' ? styles.activeTab : {}),
                }}
                className="admin-tab-btn"
                onClick={() => setActiveTab('challenges')}
                onMouseEnter={e => {
                  if (activeTab !== 'challenges') {
                    e.target.style.background = 'rgba(16,185,129,0.08)';
                    e.target.style.color = '#10b981';
                    e.target.style.boxShadow = '0 2px 12px 0 rgba(16,185,129,0.10)';
                    e.target.style.transform = 'scale(1.04)';
                  }
                }}
                onMouseLeave={e => {
                  if (activeTab !== 'challenges') {
                    e.target.style.background = styles.tab.background;
                    e.target.style.color = styles.tab.color;
                    e.target.style.boxShadow = styles.tab.boxShadow;
                    e.target.style.transform = 'scale(1)';
                  }
                }}
              >
                Manage Challenges
              </button>
            </div>
            <div style={styles.searchContainer} className="admin-search-container">
              <Search size={20} style={styles.searchIcon} />
              <input
                type="text"
                placeholder="Start typing..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchInput}
                onFocus={e => {
                  Object.assign(e.target.style, styles.searchInputFocus);
                  e.target.placeholder = 'Type to search...';
                }}
                onBlur={e => {
                  e.target.style.borderColor = styles.searchInput.borderColor;
                  e.target.style.background = styles.searchInput.background;
                  e.target.style.boxShadow = styles.searchInput.boxShadow;
                  e.target.placeholder = 'Start typing...';
                }}
                onMouseEnter={e => {
                  e.target.style.boxShadow = '0 0 0 2px #60a5fa44, 0 2px 12px 0 rgba(16,24,40,0.13) inset';
                }}
                onMouseLeave={e => {
                  e.target.style.boxShadow = styles.searchInput.boxShadow;
                }}
                // Custom placeholder color
                className="custom-search-placeholder"
              />
              {searchTerm && (
                <XCircle
                  size={20}
                  style={styles.clearIcon}
                  onClick={() => setSearchTerm('')}
                  onMouseEnter={e => e.target.style.color = '#10b981'}
                  onMouseLeave={e => e.target.style.color = styles.clearIcon.color}
                />
              )}
            </div>
          </div>
        </div>

        <div style={styles.content}>
          <p style={styles.infoText}>
            {activeTab === 'contests' ? 'Contests' : 'Challenges'} you can edit are below. For more info, visit our{' '}
            <a 
              href="#" 
              style={styles.link}
              onMouseEnter={(e) => e.target.style.color = styles.linkHover.color}
              onMouseLeave={(e) => e.target.style.color = styles.link.color}
            >
              FAQ
            </a>{' '}
            or join our{' '}
            <a 
              href="#" 
              style={styles.link}
              onMouseEnter={(e) => e.target.style.color = styles.linkHover.color}
              onMouseLeave={(e) => e.target.style.color = styles.link.color}
            >
              discussion forum
            </a>.
          </p>

          <div style={styles.actionContainer}>
          </div>

          <div style={styles.emptyState} className="admin-empty-state">
            <Inbox size={40} color="#60a5fa" style={{ opacity: 0.7, animation: 'pulse 1.8s infinite' }} />
            <p style={styles.emptyStateText}>
              You have not created any {activeTab === 'contests' ? 'contests' : 'challenges'}.
            </p>
            <div style={styles.emptyStateSubtext}>
              Start your first {activeTab === 'contests' ? 'contest' : 'challenge'} and engage your community!
            </div>
            <button
              style={styles.emptyStateButton}
              className="admin-empty-btn"
              onClick={handleCreateClick}
              onMouseEnter={e => {
                e.target.style.background = 'linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 18px rgba(16, 185, 129, 0.22)';
              }}
              onMouseLeave={e => {
                e.target.style.background = styles.emptyStateButton.background;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = styles.emptyStateButton.boxShadow;
              }}
            >
              <Plus size={18} />
              Create {activeTab === 'contests' ? 'Contest' : 'Challenge'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Administration;