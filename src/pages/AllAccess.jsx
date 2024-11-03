import Backoffer from "../components/BackOffer";
import Best from "../components/Best";
import Certificate from "../components/Certificate";
import Courses from "../components/Courses";
import Hero from "../components/Hero";

function AllAccess() {
    return (
        <>
            <Hero head1={"Get Access to"} head2={"All 26 Courses"} price={"₹1499"} discprice={" ₹2796"} />
            <Backoffer />
            <Courses />
            <Best />
            <Certificate />
        </>
    );
}

export default AllAccess;