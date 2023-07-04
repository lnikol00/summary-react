import styles from "./home.module.css"

function Home() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
                <div className={styles.text}>
                    <div className={styles.heading}>
                        <h1>SUMMARY.CO</h1>
                        <span>Web Development</span>
                    </div>
                    <div className={styles.paragraph}>
                        Summary.co is a cutting-edge company that specializes in hiring top-notch web developers. With a forward-thinking approach, they have established themselves as a leading player in the technology industry.
                    </div>
                    <div className={styles.buttons}>
                        <button>About us</button>
                        <button>Employees</button>
                        <button>Current applicants</button>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src="https://www.pankajkumarseo.com/wp-content/uploads/2022/06/Web-Development-Training-Course-Delhi.jpg" alt="slika" />
                </div>
            </div>
            <div className={styles.bottomContainer}>

            </div>
        </div >
    )
}

export default Home
