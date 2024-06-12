import React from 'react'
import ataSoyk from "../../assets/ref/atakentSoyak.jpg"
import alkur from "../../assets/ref/alkur.jpg"
import ataSinav from "../../assets/ref/atakentSinav.jpg"
import aybak from "../../assets/ref/aybakGida.jpg"
import drn from "../../assets/ref/drnGold.jpg"
import ensarlar from "../../assets/ref/ensarlar.jpg"
import kalemOfset from "../../assets/ref/kalemOfset.jpg"
import macitKoz from "../../assets/ref/maciterKozmetik.jpg"
import mehAk from "../../assets/ref/mehmetAkkaya.jpg"
import muratMat from "../../assets/ref/muratMabaacilik.jpg"
import safira from "../../assets/ref/safira.jpg"

function Referans() {
    return (
        <div className='ref-img'>
            <img className='img1' src={ataSoyk} alt="" width={300} height={200} />
            <img className='img1' src={alkur} alt="" width={300} height={200} />
            <img className='img1' src={ataSinav} alt="" width={300} height={200} />
            <img className='img1' src={aybak} alt="" width={300} height={200} />
            <img className='img1' src={drn} alt="" width={300} height={200} />
            <img className='img1' src={ensarlar} alt="" width={300} height={200} />
            <img className='img1' src={kalemOfset} alt="" width={300} height={200} />
            <img className='img1' src={macitKoz} alt="" width={300} height={200} />
            <img className='img1' src={mehAk} alt="" width={300} height={200} />
            <img className='img1' src={muratMat} alt="" width={300} height={200} />
            <img className='img1' src={safira} alt="" width={300} height={200} />
        </div>
    )
}

export default Referans