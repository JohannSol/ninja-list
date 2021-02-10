import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Welcome to OUR Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          excepturi, laudantium, totam modi, recusandae nesciunt assumenda in
          architecto sapiente reprehenderit consequuntur sed delectus eum autem?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          expedita, minima error consectetur necessitatibus rem!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listings</a>
        </Link>
      </div>
    </>
  )
}
