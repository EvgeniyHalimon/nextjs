import Layout from '../components/Layout'
import Image from "next/image"
import Head from "next/head";
import risitas from "../public/risitas.png"
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    <Image
      src={risitas}
      width="500" 
      height="300"
      alt="preview"
      placeholder="blur"
    />
  </Layout>
)

export default MyApp
