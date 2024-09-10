import { useEffect, useState } from "react"
import { Input } from "@nextui-org/react"
import {Button} from "@nextui-org/react"
import GlownaHead from "../glownaHead"
import Stopka from "../Stopka"
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import axios from "axios"

function DodajKlase(params) {

    const [nrKlasy ,setNrKlasy] = useState()
    const [symbolKlasy, setSymbolKlasy] = useState()
    const [kierunek, setKierunek] = useState() 
    const [kierunki, setKierunki] = useState([]) 
    const [klasy, setKlasy] = useState(["1", "2", "3", "4", 5])
    const [symbole, setSymbole] = useState([]);
    const [err, setErr] = useState('')

    useEffect(() => {
        var arr = []
        for (let i = 0; i < 26; i++) {
            arr[i] = String.fromCharCode(i+65)
        }

        setSymbole(arr)
        
        axios.post("http://localhost:3001/getKierunki", 
            {}
        ).then((response)=> {
            setKierunki(response.data)
        })



    }, [])

    const handleButton = () => {


        console.log("Selected Class Number:", nrKlasy);
        console.log("Selected Class Symbol:", symbolKlasy);
        console.log("Selected Direction:", kierunek);

        if (!nrKlasy || !symbolKlasy || !kierunek) {
            console.log("Please fill out all fields.");
            setErr("Proszę wypełnić wszystkie pola");
        } else {
            setErr("");
            axios.post("http://localhost:3001/klasa",
                {
                    nr_klasy: nrKlasy,
                    symbol_klasy: symbolKlasy,
                    kierunek_id: kierunek
                }
            ).then((response) => {
                console.log("dodano")
            }).catch((error) => {
                setErr("Taka klasa już istnieje")
            })
        }
    }
    return(
        <>
            <GlownaHead elements={[
                "Dodaj użytkownika",
                "Usuń użytkownika",
                "Dodaj klasę"]} 
                main="/admin"
            />
            <div className="flex flex-col items-center">
                <h4 className=" text-center mt-10" >Zaznacz dane aby dodać klasę</h4>
                <div className="w-56 mt-40">
                    <Select label="Wybierz numer klasy" selectedKeys={[nrKlasy]} onChange={(e) => setNrKlasy(e.target.value)} >
                        {
                            klasy.map((x, key)=>(
                                <SelectItem value={x} key={x}>
                                    {x.toString()}
                                </SelectItem>
                            ))
                        }
                    </Select>
                    <Select label="Wybierz symbol klasy" selectedKeys={[symbolKlasy]} onChange={(e) => setSymbolKlasy(e.target.value)}>
                        {
                            symbole.map((x, key)=>(
                                <SelectItem key={x}>
                                    {x}
                                </SelectItem>
                            ))
                        }
                    </Select>
                    <Select label="Wybierz kierunek" selectedKeys={[kierunek]} onChange={(e) => setKierunek(e.target.value)}>
                        {
                            kierunki.map((x, key)=>(
                                <SelectItem value={x.id} key={x.id}>
                                    {x.nazwa}
                                </SelectItem>
                            ))
                        }
                    </Select>  
                </div>
                <Button color="primary" className=" mt-10" onClick={handleButton}>Dodaj</Button>
                <p className=" text-red-500">{err}</p>
            </div>

            <Stopka/>
        </>
    )
}export default DodajKlase