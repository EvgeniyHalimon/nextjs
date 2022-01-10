import Layout from '../components/Layout'
import Image from "next/image"
import shuttle from "../public/shuttle.jpg"
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
    <Image
      src={shuttle}
      width={600}
      height={400}
      alt='preview'
      placeholder='blur'
    />
  </Layout>
)

export default MyApp
