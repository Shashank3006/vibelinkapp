import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/profilescreen.css';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const navigate = useNavigate();
  const {  data } = useSelector((state) => state.auth);

 
  useEffect(() => {
    if(data==null){
      navigate('/login');
        }
  }, []);
  console.log("Profile data from store:", data.data);

  // Mock user data - in real app, get from context/store
  const user = {
    name: data.data.user.name || '',
    role: 'Creator',
    about: "Passionate about creating immersive digital experiences. Let's create the future together.",
    skills: ['UI Design', 'Development', 'React', 'JavaScript', 'Figma'],
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
  };

  const handleLogout = () => {
    // In real app, clear authentication state
    localStorage.removeItem('sessionId');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        {/* Header Section */}
        <div className="profile-header">
          <div className="profile-info">
            <div className="avatar-container">
              <div className="avatar">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="avatar-image"
                />
              </div>
            </div>
            <h1 className="profile-name">{user?.name || 'User'}</h1>
            <p className="profile-role">{user?.role || 'Creator'}</p>
          </div>

          {/* Stats Section */}
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">24</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">1.2k</div>
              <div className="stat-label">Connections</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">4.9</div>
              <div className="stat-label">Rating</div>
            </div>
          </div>

          {/* Edit Profile Button */}
          <button 
            className="edit-profile-button"
            onClick={() => navigate('/edit-profile')}
          >
            <span className="material-symbols-outlined edit-icon">
              edit
            </span>
            <span className="edit-button-text">Edit Profile</span>
          </button>
        </div>

        {/* Content Sections */}
        <div className="profile-sections">
          {/* About Me Section */}
          <div className="section">
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              {user?.about || "Passionate about creating immersive digital experiences. Let's create the future together."}
            </p>
          </div>

          {/* Skills Section */}
          <div className="section">
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="skills-container">
              {user?.skills?.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                </div>
              )) || (
                <>
                  <div className="skill-tag">UI Design</div>
                  <div className="skill-tag">Development</div>
                </>
              )}
            </div>
          </div>

          {/* Menu Section */}
          <div className="menu-section">
            <div className="menu-item" onClick={() => navigate('/settings')}>
              <div className="menu-item-left">
                <div className="menu-icon">
                  <span className="material-symbols-outlined">
                    settings
                  </span>
                </div>
                <span className="menu-text">Settings</span>
              </div>
              <span className="material-symbols-outlined">
                chevron_right
              </span>
            </div>

            <div className="menu-item" onClick={() => navigate('/privacy')}>
              <div className="menu-item-left">
                <div className="menu-icon">
                  <span className="material-symbols-outlined">
                    lock
                  </span>
                </div>
                <span className="menu-text">Privacy</span>
              </div>
              <span className="material-symbols-outlined">
                chevron_right
              </span>
            </div>

            <div className="menu-item" onClick={() => navigate('/help')}>
              <div className="menu-item-left">
                <div className="menu-icon">
                  <span className="material-symbols-outlined">
                    help_outline
                  </span>
                </div>
                <span className="menu-text">Help & Support</span>
              </div>
              <span className="material-symbols-outlined">
                chevron_right
              </span>
            </div>

            <div className="menu-item logout-item" onClick={handleLogout}>
              <div className="menu-item-left">
                <div className="menu-icon logout-icon">
                  <span className="material-symbols-outlined">
                    logout
                  </span>
                </div>
                <span className="menu-text logout-text">Logout</span>
              </div>
              <span className="material-symbols-outlined logout-arrow">
                chevron_right
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;