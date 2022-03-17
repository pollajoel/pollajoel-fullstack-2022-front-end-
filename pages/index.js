import styles from '../styles/Home.module.scss'
import HomeLayout from '../layouts/Home/Homelayout'
import Projectssummary from '../components/projectsummary/projectssummary'
import {faEdit, faCheck, faProjectDiagram} from '@fortawesome/free-solid-svg-icons'
import DoughnutChart from '../components/stat/Doughnut'
import Piechart from '../components/stat/Piechart'
export default function Home() {
  return (
    <div className={styles.home__container}>
        <div className={styles.projectsummary}>
          <Projectssummary 
            Icon={faEdit}
            Numbers={12}
            description="projects en cours"
            />
          <Projectssummary 
            Icon={faCheck}
            Numbers={12}
            description="projects complets"
          />
          <Projectssummary 
            Icon={faProjectDiagram} 
            Numbers={12}
            description="Nombres de projets"
          />
        </div>

        <div className={styles.stat__component}>
            <div className={styles.doughnut}><DoughnutChart/></div>
            <div className={styles.piechart}><Piechart/></div>
        </div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (<HomeLayout>{page}</HomeLayout>)
}