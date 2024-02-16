import Head from 'next/head';
import HomePageExamples from 'src/sections/HomePage/HomePageExample';
import { css } from '../../styled-system/css';

import { PinkButton, PandaButton } from './buttons/pandaButton';

const Home = () => (
  <>
    <Head>
      <meta content="Project starter" name="description" />
      <link href="/heart.svg" rel="icon" />
    </Head>

    <main className="main-content">
      <div className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
        Styled with PandaCss!
      </div>

      <PandaButton visual="solid" size="sm">
        button
      </PandaButton>
      <PinkButton text="Panda button" />
      <HomePageExamples />
    </main>
  </>
);
export default Home;
