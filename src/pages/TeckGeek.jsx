import Backoffer from "../components/BackOffer";
import Best from "../components/Best";
import CareerOptions from "../components/CareerOptions";
import Certificate from "../components/Certificate";
import Curriculum from "../components/Curriculum";
import DoubtSolve from "../components/DoubtSolve";
import Hero from "../components/Hero";

function TeckGeek() {
    return (
        <>
            <Hero discprice={"₹4194"} price={"₹1999"} head2={"Tech Geek "} head3={"Combo Pack"} />
            <Curriculum />
            <Backoffer />
            <Best />
            <Certificate />
            <DoubtSolve />
            <CareerOptions />
        </>
    );
}

export default TeckGeek;