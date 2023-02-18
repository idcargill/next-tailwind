import Head from 'next/head';

const Home = () => (
  <>
    <Head>
      <title>Next-Tailwind</title>
      <meta content="Project starter" name="description" />
      <link href="/heart.svg" rel="icon" />
    </Head>

    <main className="text-3xl font-bold underline bg-red-300">
      <div>
        Hello Tailwind!
      </div>
    </main>
  </>
);
export default Home;
