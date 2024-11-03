import '../styles/hero.css'
import heroimg from '../assets/heroicons.png'
import EnrollBtn from './reusable/EnrollBtn';
function Hero({ head1, head2, price, discprice, head3 }) {
    return (
        <section className="section hero-section">

            <div className="hero-left">
                <div className="hero-left-top">
                    <div className="hero-left-iit text-pink">An IIT Delhi Alumni Initiative</div>
                    <h1 className="main-heading wood-smoke-950 fw-400">
                        <div>{head1}</div>
                        <span className="text-light-pink fw-700"> {head2}</span>
                        <div className="">{head3 ? head3 : ""}</div>
                    </h1>
                </div>
                <div className="hero-speciallycrafted-para">A specially crafted Tech Kickstarter, by Industry Experts</div>
                <div className="hero-left-bottomm">
                    <div className="hero-left-bottom-card">
                        <div className="hlbc-card upskill">
                            <div className="hlbc-card-left">
                                <span className="f-18 fw-700 text-pink">Enroll</span>
                            </div>
                            <div className="hlbc-card-right"></div>
                        </div>
                        <div className="hlbc-card intern">
                            <div className="hlbc-card-left">
                                <span className="f-18 fw-700 text-pink">Upskill</span>
                            </div>
                            <div className="hlbc-card-right"></div>
                        </div>
                        <div className="hlbc-card job-ready">
                            <div className="hlbc-card-left">
                                <span className="f-18 fw-700 text-pink">100% Refund</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-price-sec">
                    <div className="hero-ps-left">
                        <div className="hero-psl-orgprice">{price}</div>
                        <div className="hero-psl-discprice">{discprice}</div>
                    </div>
                    <div className="hero-ps-right">
                        Pay now & get money back in your bank account on course completion
                    </div>
                </div>
                <EnrollBtn />
            </div>
            <div className="hero-right">
                <div className="hero-right-design large-hero-design">
                    <svg xmlns="http://www.w3.org/2000/svg" width="638" height="738" viewBox="0 0 638 738" fill="none">
                        <g opacity="0.7">
                            <path d="M211.604 -534.999C141.268 -447.911 86.4593 -349.691 50.3084 -245.946C14.1575 -142.202 -2.62803 -34.9648 0.910044 69.6418C4.4481 174.248 28.2407 274.176 70.9291 363.719C113.618 453.263 174.366 530.668 249.706 591.516C325.046 652.364 413.502 695.462 510.023 718.351C606.545 741.24 709.242 743.47 812.25 724.916C915.259 706.361 1016.56 667.384 1110.38 610.21C1204.19 553.037 1288.68 478.786 1359.01 391.698L785.308 -71.6508L211.604 -534.999Z" fill="url(#paint0_linear_23_934)" fillOpacity="0.3" />
                            <path d="M226.389 -523.059C157.865 -438.215 104.469 -342.526 69.2498 -241.455C34.0304 -140.384 17.6775 -35.9105 21.1244 66.0004C24.5713 167.911 47.7507 265.264 89.339 352.499C130.927 439.735 190.11 515.146 263.509 574.425C336.907 633.705 423.084 675.693 517.118 697.992C611.152 720.291 711.202 722.464 811.556 704.388C911.91 686.311 1010.6 648.339 1102 592.638C1193.4 536.938 1275.7 464.601 1344.23 379.757L785.308 -71.6508L226.389 -523.059Z" fill="url(#paint1_linear_23_934)" fillOpacity="0.3" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_23_934" x1="249.706" y1="591.516" x2="492.572" y2="338.014" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#800080" />
                                <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_23_934" x1="249.706" y1="591.516" x2="492.572" y2="338.014" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#800080" />
                                <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="hero-right-design small-hero-design">
                    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="" className="h-full" viewBox="0 0 256 577" fill="none">
                        <g opacity="0.7">
                            <path d="M256.483 0.460217C213.823 12.283 173.594 31.2591 138.095 56.3052C102.595 81.3512 72.5201 111.977 49.5866 146.433C26.653 180.889 11.3101 218.502 4.43385 257.123C-2.44242 295.744 -0.717359 334.617 9.51052 371.522C19.7384 408.428 38.2688 442.644 64.0437 472.216C89.8186 501.788 122.333 526.138 159.731 543.874C197.129 561.61 238.678 572.386 282.006 575.587C325.333 578.787 369.591 574.349 412.252 562.527L334.367 281.493L256.483 0.460217Z" fill="url(#paint0_linear_23_1903)" fillOpacity="0.3" />
                            <path d="M258.491 7.70234C216.929 19.2205 177.737 37.7076 143.153 62.1082C108.568 86.5089 79.2681 116.345 56.9256 149.914C34.583 183.482 19.6355 220.125 12.9364 257.751C6.23737 295.376 7.91797 333.248 17.8823 369.202C27.8466 405.157 45.8994 438.491 71.0101 467.301C96.1208 496.111 127.798 519.833 164.232 537.112C200.666 554.392 241.144 564.89 283.355 568.008C325.566 571.126 368.683 566.802 410.245 555.284L334.367 281.493L258.491 7.70234Z" fill="url(#paint1_linear_23_1903)" fillOpacity="0.3" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_23_1903" x1="9.51052" y1="371.522" x2="145.952" y2="345.881" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#800080" />
                                <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_23_1903" x1="9.51052" y1="371.522" x2="145.952" y2="345.881" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#800080" />
                                <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="hero-right-image">
                    <img src={heroimg} alt="Hero Icons" />
                </div>
            </div>
        </section>
    );
}

export default Hero;