import React from 'react'
import './main.css'
import Dsp from '../Cards/Dsp.jsx'
import AcilDrmPln from '../Cards/AcilDrmPln.jsx'
import HijyenEgt from '../Cards/HijyenEgt.jsx'
import Hkm from '../Cards/Hkm.jsx'
import IsgTmlEgtm from '../Cards/IsgTmlEgtm.jsx'
import RiskAnaliz from '../Cards/RiskAnaliz.jsx'
import YuksekteCalisma from '../Cards/YuksekteCalisma.jsx'
import IsGvUzm from '../Cards/IsGvUzm.jsx'

function Main() {
    return (
        <div>
            <main className='main-box'>
                <IsGvUzm />
                <Hkm />
                <Dsp />
                <RiskAnaliz />
                <AcilDrmPln />
                <IsgTmlEgtm />
                <YuksekteCalisma />
                <HijyenEgt />

            </main>
        </div>
    )
}

export default Main