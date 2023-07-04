import { useEffect, useState } from "react"
import styles from "./home.module.css"

type staffDatas = Array<staffData>

type staffData = {
    id: number,
    position: string
    name: string
    desc: string
    image: string
}

function Home() {

    const [staff, setStaff] = useState<staffDatas>();

    useEffect(() => {
        fetch("http://localhost:4500/staff")
            .then((res) => res.json())
            .then((json) => setStaff(json))
    }, [])


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
                <div className={styles.aboutContainer}>
                    <h1>About us</h1>
                    <p>Summary.co is a renowned company that specializes in hiring exceptional web developers, solidifying its position as a leader in the technology industry. With a keen eye for talent, they have established a rigorous selection process to identify and recruit the most skilled and capable individuals in the field of web development. These developers are handpicked based on their expertise in a wide range of programming languages, frameworks, and tools, ensuring they can tackle diverse projects with confidence and precision.
                        At Summary.co, a culture of collaboration and innovation thrives. The company fosters a work environment that encourages developers to share ideas, collaborate on projects, and continuously learn from one another. Through regular team meetings and brainstorming sessions, they create a vibrant atmosphere that fuels creativity and cultivates new perspectives.</p>
                    <p> Developers at Summary.co also benefit from ongoing professional development opportunities, including training sessions, conferences, and workshops, enabling them to stay ahead of the curve in the ever-evolving field of web development.
                        One of the core values of Summary.co is its unwavering commitment to delivering exceptional quality. By leveraging their deep understanding of industry best practices and their mastery of cutting-edge technologies, their web developers consistently create remarkable solutions that exceed client expectations. Their dedication to excellence extends to meeting project deadlines while maintaining the highest standards of quality and accuracy.
                        Summary.co takes pride in its client-centric approach. They believe in building strong, long-lasting relationships with their clients by actively listening to their needs, understanding their business goals, and providing tailored web development solutions. This customer-centric focus has earned them a reputation for reliability, trustworthiness, and superior customer satisfaction.
                        As a company that embraces innovation, Summary.co stays at the forefront of the web development industry.</p>
                    <p> They are always exploring new technologies, experimenting with emerging trends, and adapting to the evolving landscape. By remaining agile and adaptable, they ensure that their web developers are equipped with the latest tools and techniques to deliver cutting-edge solutions.
                        Summary.co understands that successful web development projects require a multidisciplinary approach. Their web developers collaborate closely with UI/UX designers, project managers, and quality assurance experts to ensure seamless integration of design, functionality, and usability. By fostering effective teamwork and communication, Summary.co ensures that every project is executed with precision and attention to detail.
                        In addition to their technical prowess, the web developers at Summary.co possess excellent problem-solving skills. They excel at analyzing complex requirements, breaking them down into manageable tasks, and developing innovative solutions that address client needs. Their ability to think critically and strategically enables them to overcome challenges and deliver scalable, robust, and secure web applications.
                        Summary.co prides itself on maintaining a positive work culture that values diversity, inclusivity, and work-life balance. They believe that a happy and motivated workforce leads to better productivity and creativity. The company fosters an inclusive environment where every team member feels valued and empowered to contribute their unique skills and perspectives.</p>
                </div>
                <div className={styles.employeesContainer}>
                    <h1>Employees</h1>
                    {staff?.map((employee, index) => {

                        const image = (
                            <img
                                src={employee.image}
                                className={styles.listImage}
                                alt={employee.name}
                            />
                        )

                        return (
                            <div key={index} className={styles.list}>
                                {index % 2 === 1 ? image : ""}
                                <div className={styles.listText}>
                                    <h2>{employee.position}</h2>
                                    <span>{employee.name}</span>
                                    <p>{employee.desc}</p>
                                </div>
                                {index % 2 === 0 ? image : ""}
                            </div>
                        )
                    })}
                </div>
                <div className={styles.lineOne}></div>
                <div className={styles.applyContainer}>

                </div>
            </div>
        </div >
    )
}

export default Home
