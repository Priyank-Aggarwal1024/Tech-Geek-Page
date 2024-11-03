import '../styles/backoffer.css'
import O1 from '../assets/offer1.gif'
import O2 from '../assets/offer2.gif'
import O3 from '../assets/offer3.gif'
import graduate from '../assets/graduate.svg'
import moneyback from '../assets/moneyback.svg'
function Backoffer() {
    return (
        <section className="alac-pack-new-backoffer-section">
            <div className="alac-pack-new-backoffer">
                <div className="alac-pack-new-back-offer-heading">
                    <p className="alac-pack-new-f-48 alac-pack-new-fw-400 alac-pack-new-text-white alac-pack-new-text-center"><span className="alac-pack-new-fw-700">How to Learn <br /> for Free</span></p>
                </div>
                <div className="alac-pack-new-backoffer-bottom">
                    <div className="alac-pack-new-backoffer-left">
                        <div className="alac-pack-new-bol-card alac-pack-new-bol-card1">
                            <div className="alac-pack-new-bol-card-left">
                                <img src={O1} alt="Enroll" />
                            </div>
                            <div className="alac-pack-new-bol-card-middle">
                                <div className="alac-pack-new-bol-card-heading fw-600">
                                    <span className="fw-700 text-pink">Enroll</span>
                                    {" By Paying "}
                                    <span className="fw-700 text-pink">₹699</span>
                                </div>
                            </div>
                            <div className="alac-pack-new-bol-card-right">1</div>
                        </div>
                        <div className="alac-pack-new-bol-card alac-pack-new-bol-card2">
                            <div className="alac-pack-new-bol-card-left">
                                <img src={O2} alt="Course" />
                            </div>
                            <div className="alac-pack-new-bol-card-middle">
                                <div className="alac-pack-new-bol-card-heading fw-600">
                                    <span className="fw-700 text-pink">Complete Course</span>
                                    {" With in 3 Month"}
                                </div>
                            </div>
                            <div className="alac-pack-new-bol-card-right">2</div>
                        </div>
                        <div className="alac-pack-new-bol-card alac-pack-new-bol-card3">
                            <div className="alac-pack-new-bol-card-left">
                                <img src={O3} alt="Payment" />
                            </div>
                            <div className="alac-pack-new-bol-card-middle">
                                <div className="alac-pack-new-bol-card-heading fw-600">
                                    Get
                                    <span className="fw-700 text-pink">{" 100% Refund "}</span>
                                    Back into Your bank
                                </div>
                            </div>
                            <div className="alac-pack-new-bol-card-right">3</div>
                        </div>
                    </div>
                    <div className="alac-pack-new-backoffer-right">
                        <img src={graduate} alt="Graduate" />
                    </div>
                    <img src={moneyback} alt="Money Back" className="money-back" />
                </div>
            </div>
        </section>
    );
}

export default Backoffer;