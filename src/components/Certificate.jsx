import '../styles/certificate.css'
import certificate from '../assets/certificate.svg'
function Certificate() {
    return (
        <>
            <section className="section alac-pack-new-certificate">
                <h2 className="f-48 text-center fw-700 text-pink  alac-pack-new-certificate-heading">Unlock Industry Recognized 6 Certifications</h2>
                <img src={certificate} alt="Certificate" className="alac-pack-new-certificate-img" />
                <div className="certificate-section-font-inter">Certificate of <span className="text-pink fw-700">Python</span></div>
            </section>
        </>
    );
}

export default Certificate;