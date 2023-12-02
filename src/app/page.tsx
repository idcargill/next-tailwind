import Head from 'next/head';
import HomePageExamples from 'src/sections/HomePage/HomePageExample';
const Home = () => (
  <>
    <Head>
      <title>Next-Tailwind</title>
      <meta content="Project starter" name="description" />
      <link href="/heart.svg" rel="icon" />
    </Head>

    <main className="main-content">
      <div className="text-3xl font-bold underline bg-red-300">
        Styled with Tailwind & daisyUi!
      </div>

      <button className="btn btn-secondary">DaisyUi button</button>
      <HomePageExamples />
    </main>
  </>
);
export default Home;
