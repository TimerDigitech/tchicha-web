import { useState } from "react"
import "../components/styles/exo.css"
const Exercice = () => {
    const [val, setVal] = useState("")
    const [vale, setVale] = useState("")
    const [n, setN] = useState()
    function addI(val: String) {
        let tab = []
        let i = 0
        let j = 0
        let cur = ""
        for (i = 0; i < val.length; i++) {

            if (val[i] != ",") {
                cur += val[i]
                console.log(cur)
            } else {
                tab[j] = Number(cur)
                j = Number(j) + 1
                cur = ""
            }
            console.log("tba", tab)
        }

        let k = 0
        let p = 0
        let fin = []
        for (k = 0; k < tab.length; k++) {

            let count = 0
            for (p = 0; p < tab.length; p++) {
                if (tab[p] < tab[k]) {
                    count = Number(count) + 1
                }
            }
            fin[count] = tab[k]

        }
        console.log(fin)
        let t = 0
        let finc=""
        for (t = 0; t < val.length; t++) {

            finc+=fin[t]
            console.log("fin", finc)
        }
        setVale(finc)


        return fin
    }
    return (
        <div className="exo">
            <div className="exo_af">
                <h5>{vale}</h5>
            </div>
            <div className="exo_re">
                <textarea
                    onChange={(txt) => setVal(txt.target.value)}
                    rows={20} />

            </div>
            <div className="exo_btn">
                <button onClick={() => addI(val)}>trier</button>
            </div>

        </div>
    )
}

export default Exercice