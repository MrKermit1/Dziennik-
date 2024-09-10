import React, { useEffect, useState } from "react"
import Stopka from "./Stopka"
import Axios from 'axios'
import GlownaHead from "./glownaHead";

import {Input, Button} from "@nextui-org/react";

function DodajSzkole() {
    
    const [email, setEmail] = useState('');
    const [haslo ,setHaslo] = useState('');
    const [err, setErr] = useState('');

    const handleAdder = () => {
       

      
    }
    


    return (
        <>
            <GlownaHead/>
                <div className="flex flex-col items-center">
                    <h4 className=" text-center mt-10" >Wpisz dane aby się zalogować</h4>
                    <div className="w-56 mt-40">
                        <Input type="email" label="Email" onChange={(e) => setEmail(e.target.value)}  />
                        <Input type="password" label="Hasło" onChange={(e) => setHaslo(e.target.value)}/>    
                    </div>
                    <Button color="primary" className=" mt-10" onClick={handleAdder}>Zaloguj</Button>
                    <p className="text-red-600">{err}</p>
                </div>
            <Stopka/>
        </>
    )
}export default DodajSzkole