import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import first from '/static/img/1-all-in-one.png';
import second from '/static/img/2-trading-libs.png';
import third from '/static/img/4-split-as-you-profit.png';
import forth from '/static/img/5-token-economy.png';
import sixth from '/static/img/3-competition-ranking.png';

const FeatureList = [
  {
    title: 'All in one',
    img: first,
    description: (
      <>
        You focus on the trading logic, we do the rest with IDE, backtesting database, API connection to exchanges, and proprietary 'Strategy Bot Engine'.
      </>
    ),
  },
  {
    title: 'Trading Library',
    img: second,
    description: (
      <>
        TA-Lib for <code>JavaScript</code> and <code>Python</code>. The best of all, the machine learning models.
      </>
    ),
  },
  {
    title: 'Competition Ranking',
    img: sixth,
    description: (
      <>
        Develoer can compete with others in battlefield. Traders can freely select the most effective one with proven records for your own backtesting or simulation before live-trading
      </>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImage} src={img} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
