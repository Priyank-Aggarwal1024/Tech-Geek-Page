import '../styles/courses.css'
import CourseCard from './reusable/CourseCard';
const tech = [
    {
        img: "./t1.png",
        text: "Python"
    },
    {
        img: "./t2.png",
        text: "JAVA"
    },
    {
        img: "./t3.png",
        text: "Web Development with PHP / MySQL"
    },
    {
        img: "./t4.png",
        text: "App Development"
    },
    {
        img: "./t5.png",
        text: "Ethical Hacking"
    },
    {
        img: "./t6.png",
        text: "MERN"
    },
    {
        img: "./t7.png",
        text: "React Native"
    },
    {
        img: "./t8.png",
        text: "Data Science"
    },
    {
        img: "./t9.png",
        text: "Machine Learning"
    },
    {
        img: "./t10.png",
        text: "DevOps"
    },
    {
        img: "./t11.png",
        text: "React Js"
    },
    {
        img: "./t12.png",
        text: "C++"
    },
    {
        img: "./t13.png",
        text: "Data Structure & Algorithms"
    },
    {
        img: "./t14.png",
        text: "Competetive Programing"
    },
    {
        img: "./t15.png",
        text: "DataManagement System"
    },
    {
        img: "./t16.png",
        text: "DSA with company "
    }
]
const creative = [
    {
        img: "./cr1.png",
        text: "Adobe Illustrator"
    },
    {
        img: "./cr2.png",
        text: "Adobe Photoshop"
    },
    {
        img: "./cr3.png",
        text: "UI/UX"
    },
    {
        img: "./cr4.png",
        text: "Adobe Premier pro"
    },
    {
        img: "./cr5.png",
        text: "After Effect"
    },
]
const business = [
    {
        img: "./b1.png",
        text: "Financial Modelling valuation"
    },
    {
        img: "./b2.png",
        text: "Technical Research"
    },
    {
        img: "./b3.png",
        text: "Digital Marketing"
    },
    {
        img: "./b4.png",
        text: "Fundamental analysis"
    },
    {
        img: "./b5.png",
        text: "Risk Management"
    },
]
function Courses({ add }) {
    return (
        <section className="section alac-pack-new-course-section">
            <h2 className="f-48 fw-700 alac-pack-new-text-center text-pink alac-pack-new-course-main-heading" >
                <span className="fw-500 text-black">{add && "Choose"}</span>
                {!add ? "Get Access to these Courses" : "Your Courses"}</h2>
            <div className="alac-pack-new-courses">
                <div className="alac-pack-new-course">
                    <div className="alac-pack-new-course-heading">Technical Courses </div>
                    <div className="alac-pack-new-course-div-outer">
                        <div className="alac-pack-new-course-div">
                            {
                                tech.map((item, index) => <CourseCard add={add} item={item} key={index} />)
                            }
                        </div>
                    </div>
                </div>
                <div className="alac-pack-new-course">
                    <div className="alac-pack-new-course-heading">Creative/Art Course</div>
                    <div className="alac-pack-new-course-div-outer">
                        <div className="alac-pack-new-course-div">
                            {
                                creative.map((item, index) => <CourseCard add={add} item={item} key={index} />)
                            }
                        </div>
                    </div>
                </div>
                <div className="alac-pack-new-course">
                    <div className="alac-pack-new-course-heading">Business Course</div>
                    <div className="alac-pack-new-course-div-outer">
                        <div className="alac-pack-new-course-div">
                            {
                                business.map((item, index) => <CourseCard add={add} item={item} key={index} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Courses;