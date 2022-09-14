import React from 'react';

import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.css';

interface pageHeaderProps {
  title?: string;    
  children?: React.ReactNode;
  description?: string;
}

const PageHeader: React.FC<pageHeaderProps> = (props) => {
  return (
    <header className="page-header">
    <div className="top-bar-container">
      <Link to="/">
        <img src={backIcon} alt="Voltar" />
      </Link>
      <img src={logoImg} alt="Proffy" />
    </div>

    <div className="header-content">
      <strong>{props.title}</strong> 
      {props.description && <p>{props.description}</p>} 
      {props.children}
    </div>  
  </header>
  );
}

export default PageHeader;