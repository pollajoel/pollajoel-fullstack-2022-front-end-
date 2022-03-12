import styles from '../styles/Home.module.scss'
import Header from "../components/bodycomponent/Header";
import HomeLayout from '../layouts/Home/Homelayout'
import Sidebarmenu from '../components/sidebarmenu/sidebarmenu';

export default function Home() {
  return (
    <div className="home__container">
    <Header title ="Home page"/>
      <main>
        <div className={styles.projectsummary}></div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (<HomeLayout>{page}</HomeLayout>)
}