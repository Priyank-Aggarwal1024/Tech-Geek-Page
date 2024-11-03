import '../styles/careeroptions.css'
import AD from '../assets/appdev.png'
import FD from '../assets/fsdev.png'
import EH from '../assets/ethicalhacker.png'
import DS from '../assets/dscience.png'

function CareerOptions() {
    return (
        <section className="section alac-pack-new-carreroption">
            <div className="alac-pack-new-carreroption-heading alac-pack-new-f-48">
                <p className="fw-400 text-pink alac-pack-new-text-center">Top Career <span className="fw-700 text-pink">Option in</span></p>
                <p className="fw-700 text-pink alac-pack-new-text-center">Tech Geeks</p>
                <div className="alac-pack-new-co-cards">
                    <div className="alac-pack-new-co-card">
                        <div className="alac-pack-new-co-icon">
                            <img src={FD} alt="Full stack developer" />
                        </div>
                        <div className="alac-pack-new-co-heading">Full stack developer</div>
                        <div className="alac-pack-new-co-text">Build And Maintain Web Applications Using The MERN Stack (MongoDB, Express.Js, React, Node.Js).</div>
                    </div>
                    <div className="alac-pack-new-co-card">
                        <div className="alac-pack-new-co-icon">
                            <img src={DS} alt="Data Science" />
                        </div>
                        <div className="alac-pack-new-co-heading">Data Science</div>
                        <div className="alac-pack-new-co-text">Design, Develop, And Test Machine Learning Systems And Implement ML Algorithms.</div>
                    </div>
                    <div className="alac-pack-new-co-card">
                        <div className="alac-pack-new-co-icon">
                            <img src={EH} alt="Ethical hacker" />
                        </div>
                        <div className="alac-pack-new-co-heading">Ethical hacker</div>
                        <div className="alac-pack-new-co-text">Identify And Mitigate Security Threats By Testing And Securing Computer Systems.</div>
                    </div>
                    <div className="alac-pack-new-co-card">
                        <div className="alac-pack-new-co-icon">
                            <img src={AD} alt="App Development" />
                        </div>
                        <div className="alac-pack-new-co-heading">App Development</div>
                        <div className="alac-pack-new-co-text">Identify And Mitigate Security Threats By Testing And Securing Computer Systems</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CareerOptions;