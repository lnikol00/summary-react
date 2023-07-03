import { useEffect, useState } from "react"
import "./jobs.scss"
import { useParams } from "react-router-dom";

interface PositionData {
    id: number;
    title: string;
    subtitle: string;
    points: ParkPoints[];
    counterpoints: ParkCounterPoints[];
}

interface ParkPoints {
    id: number;
    text: string;
}
interface ParkCounterPoints {
    id: number;
    text: string;
}

function Jobs() {

    const params = useParams();
    const [position, setPosition] = useState<PositionData>()
    const [error, setError] = useState<null>(null)
    const [loading, setLoading] = useState<boolean>(true)


    useEffect(() => {
        fetch(`http://localhost:4500/jobs/${params.id}`)
            .then((res) => {
                if (!res.ok) {
                    throw Error('Sorry, we could not fetch the data!')
                }
                return res.json()
            })
            .then((json) => {
                setPosition(json)
                setError(null)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    return (
        <div className="jobs-container">
            {loading && <div className="loading-container">Loading data ... </div>}
            {position &&
                <div className="position-container">
                    <div className="top-container">
                        <h1><span>We are hiring</span><br />{position.title} <br />Developer ({position.subtitle})</h1>
                        <p>Ploče, Metković & Split, Croatia</p>
                    </div>
                    <div className="bottom-container">
                        <p> We’re looking for a <b>{position.title} Developer ({position.subtitle})</b> to join our team! You would be working on interesting projects for our international clients who are mainly based in Norway, Canada and the USA. You are an ideal candidate if you are a strong team player who takes ownership of your work.</p>
                        <div className="points-container">
                            <h4>Our new team mebmer is someone who: </h4>
                            {position.points.map((point) => {
                                return (
                                    <p key={point.id}><span>*</span>{point.text}</p>
                                )
                            })}
                            <p>Missing an item or two from this list? Don’t let it discourage you from applying, nobody is perfect. As long as you’re not afraid of a challenge, everything else will fall into place!</p>
                        </div>
                        <div className="points-container">
                            <h4>A good relationship is a two way street, so we’re offering:  </h4>
                            {position.counterpoints.map((cpoint) => {
                                return (
                                    <p key={cpoint.id}><span>*</span>{cpoint.text}</p>
                                )
                            })}
                        </div>
                        <div className="summary-container">
                            <h4>Summary.co in a paragraph</h4>
                            <p>Summary.co is a cutting-edge company that specializes in hiring top-notch web developers. With a forward-thinking approach, they have established themselves as a leading player in the technology industry. Their commitment to excellence is evident in their meticulous selection process, where they handpick skilled and talented individuals who possess a deep understanding of web development. These developers are well-versed in various programming languages, frameworks, and tools, ensuring they can tackle any project with ease. Summary.co fosters a collaborative work environment, encouraging its developers to share ideas, collaborate on projects, and learn from one another. The company also invests in the professional growth of its employees, offering regular training sessions and opportunities to attend conferences and workshops. With a focus on innovation, Summary.co stays up to date with the latest industry trends and leverages cutting-edge technologies to create remarkable web solutions for their clients. Their commitment to delivering high-quality work within deadlines has earned them a reputation for reliability and customer satisfaction. By constantly pushing boundaries and embracing new technologies, Summary.co continues to lead the way in the web development industry.</p>
                        </div>
                    </div>
                </div>
            }
            {error && <div className="error-container">Something went wrong!</div>}
        </div>
    )
}

export default Jobs
