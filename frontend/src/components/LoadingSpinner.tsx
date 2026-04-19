import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner-overlay">
      <div className="loading-spinner">
        <img 
          src="/assets/images/sssalu-logo.png" 
          alt="Loading..." 
          className="spinner-logo"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
