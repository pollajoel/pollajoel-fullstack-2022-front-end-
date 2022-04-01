import styles from '../styles/Home.module.scss'
import HomeLayout from '../layouts/Home/Homelayout'
import ProjectCards from '../components/homecards/Projects'
import Taskscards from '../components/homecards/Taskscards'
import Userscard from '../components/homecards/Userscard'
export default function Home() {
  return (
    <div className={styles.home__container}>
        <div className={styles.projectsummary}>
          <div className={styles.container__summary}>
            <Taskscards/>
            </div>
          <div className={styles.container__summary}>
            <Userscard/>
          </div>
          <div className={styles.container__summary}>
            <ProjectCards/>
          </div>
        </div>

    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (<HomeLayout>{page}</HomeLayout>)
}