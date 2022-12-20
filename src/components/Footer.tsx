import React from 'react';

const Footer = () => {
  return (
    <footer className="foot">
      <a href="https://github.com/Jonathan-Z49/shopping-app" id="git-link">
        <img
          id="git-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cd/GitHub-Mark-64px.png?20201220123257"
          alt="Github logo"
        />
      </a>
      <a href="https://fakestoreapi.com/" id="fake-api-link">
        Powered by Fake Store API
        <img
          id="fake-logo"
          src="https://raw.githubusercontent.com/keikaavousi/fake-store-api/master/public/icons/logo.png"
          alt="Fake Store API logo"
        />
      </a>
    </footer>
  );
};

export default Footer;
