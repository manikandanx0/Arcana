import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Arcana"
      description="A personal, structured knowledge base for continuous learning."
    >
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Arcana</h1>
            <p className="hero__subtitle">
              A structured knowledge base for problem-solving, machine learning, and language learning.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro"
              >
                Explore Docs
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/leetcode/intro"
              >
                LeetCode
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
