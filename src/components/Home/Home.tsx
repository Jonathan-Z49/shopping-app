import React from 'react';

const Home = () => {
  return (
    <main className="home">
      <section className="messages">
        <h1 className="header-message">LATEST TECH RELEASES!</h1>
        <div className="message-container">
          <ul className="shop-message-list">
            <li>Discover new tech</li>
            <li>Explore many products</li>
            <li>Find great deals</li>
            <li>Only available at Shop-ly</li>
          </ul>
        </div>
      </section>
      <h1 className="shop-quote">
        Ranked Top 1 Electronics Store in the World! <br />- Forbes
      </h1>
    </main>
  );
};

export default Home;
