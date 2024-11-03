import Backoffer from "../components/BackOffer";
import Best from "../components/Best";
import Certificate from "../components/Certificate";
import Courses from "../components/Courses";
import Hero from "../components/Hero";

function ComboPack() {
    return (
        <>
            <Hero head1={"Create Your Own "} head2={"Combo Pack Of 4 Courses"} discprice={"₹18174"} price={"₹4499"} key={"Combo Pack"} />
            <Backoffer />
            <Courses add={true} />
            <Best />
            <Certificate />
        </>
    );
}

export default ComboPack;