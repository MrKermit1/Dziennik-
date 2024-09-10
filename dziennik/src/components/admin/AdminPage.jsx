import GlownaHead from "../glownaHead"
import Stopka from "../Stopka"

function AdminPage(params) {
    
    return (
        <>
            <GlownaHead elements={[
                "Dodaj użytkownika",
                "Usuń użytkownika",
                "Dodaj klasę"
            ]} main="/admin" />
            <div id="content">
                <div id="panel-gora" className=" w-screen bg-slate-500">
                <p className=" mt-5 text-center text-2xl">Panel Administracji</p>
                </div>
                <div className="flex justify-around">
                    <div id="panel-prawa" className="border-1 border-black w-1/2">
                        <p className=" p-5">Zmiany dziennika:</p>
                    </div>

                    <div id="panel-lewa" className="border-1 border-black w-1/2">
                        <p className=" p-5">Wnioski użytkowników:</p>
                    </div>
                </div>
                
            </div>
            <Stopka/>
        </>
    )
}export default AdminPage