import React from "react";
import GlownaHead from "./glownaHead.jsx";
import Stopka from "./Stopka.jsx";

function kontentGlowna() {
    
    return (
        <>
            <GlownaHead elements={[
                "Strona główna",
                "Zaloguj",
                "Dziennik zmian",
                "Strona Szkoły",
            ]} main="/" />
            <div>
                <p className=" text-center pt-52 text-2xl">WITAJ W DZIENNICZKU++</p>
                <p className="text-center pt-10 text-blue-500">Oficjalny dziennik dla uczniów Sosnowieckiego Elektronika</p>
            </div>
            <Stopka/>
        </>
    )
}export default kontentGlowna;