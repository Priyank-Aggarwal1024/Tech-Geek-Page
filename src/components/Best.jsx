import '../styles/best.css'
import star from '../assets/star.svg'
import best1 from '../assets/best1.svg'
import best2 from '../assets/best2.svg'
import best3 from '../assets/best3.svg'
import best4 from '../assets/best4.svg'
import best5 from '../assets/best5.svg'
import best6 from '../assets/best6.svg'
function Best() {
    return (
        <>
            <div className="section alac-pack-new-best">
                <h2 className="f-48 text-pink text-center">Why its the Best Program?</h2>
                <div className="alac-pack-new-best-middle">
                    <div className="alac-pnbm-left">45000+ Students</div>
                    <div className="alac-pnbm-right">
                        <span>4.9</span>
                        <img src={star} alt="Star" />
                        <span>Rated</span>
                    </div>
                </div>
                <div className="alac-pack-new-best-bottom">
                    <div className="alac-pack-new-best-cards">
                        <div className="alac-pack-new-best-card">
                            <img src={best1} alt="Cover everything from Scratch" />
                            <p>Cover everything from Scratch</p>
                        </div>
                        <div className="alac-pack-new-best-card">
                            <img src={best2} alt="Certification" />
                            <p>Certification</p>
                        </div>
                        <div className="alac-pack-new-best-card">
                            <img src={best3} alt="I live instant doubt support" />
                            <p>I live instant doubt support</p>
                        </div>
                        <div className="alac-pack-new-best-card">
                            <img src={best4} alt="Internship/Placement opportunities" />
                            <p>Internship/Placement opportunities</p>
                        </div>
                        <div className="alac-pack-new-best-card">
                            <img src={best5} alt="Projects based learning" />
                            <p>Projects based learning</p>
                        </div>
                        <div className="alac-pack-new-best-card">
                            <img src={best6} alt="Lifetime Access to content" />
                            <p>Lifetime Access to content</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Best;