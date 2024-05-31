import { useState } from "react";
import React from 'react'
import './info.css'


function Info() {


    // const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('azTeh');
    const [sayi, setSayi] = useState('');
    const [result, setResult] = useState('');

    let cokTehUzman = (40 / 60), tehUzman = (20 / 60), azTehUzman = (10 / 60);
    let cokTehHekim = (15 / 60), tehHekim = 10 / 60, azTehHekim = (5 / 60);
    let deger = sayi;

    function calculateRiskLevel(value) {
        let riskLevel = fromCurrency
        // console.log(riskLevel)

        if (riskLevel == "azTeh") {
            let isg = "Az Tehlikeli";
            let igu = deger * azTehUzman;
            let hkm = deger * azTehHekim;
            let dsp = ' ... ';
            let riskA = '6 Yılda 1 Defa';
            let AcilD = '6 Yılda 1 Defa';
            let egtm = '3 Yılda 1 Defa';
            let sglk = '5 Yılda 1 Defa';
            let ilkYrd = sayi / 20;
            let thlEkp = sayi / 50;
            let snEkp = sayi / 50;
            let hbrEkp = sayi / 50;
            let tmsl = temsilci();

            document.getElementById('isg').innerHTML = isg;
            document.getElementById('igu').innerHTML = Math.ceil(igu) + ' Saat';
            document.getElementById('hkm').innerHTML = Math.ceil(hkm) + ' Saat';
            document.getElementById('dsp').innerHTML = ' 0 ' + ' Saat';
            document.getElementById('riskA').innerHTML = riskA;
            document.getElementById('AcilD').innerHTML = AcilD;
            document.getElementById('egtm').innerHTML = egtm;
            document.getElementById('sglk').innerHTML = sglk;
            document.getElementById('tmsl').innerHTML = tmsl;
            document.getElementById('ilkYrd').innerHTML = Math.ceil(ilkYrd) + ' Kişi';
            document.getElementById('thlEkp').innerHTML = Math.ceil(thlEkp) + 'Kişi';
            document.getElementById('snEkp').innerHTML = Math.ceil(snEkp) + ' Kişi';
            document.getElementById('hbrEkp').innerHTML = Math.ceil(hbrEkp) + 'Kişi';

        } else if (riskLevel == "teh") {
            let isg = "Tehlikeli";
            let igu = sayi * tehUzman
            let hkm = deger * tehHekim;
            let dsp = ' ... ';
            let riskA = '4 Yılda 1 Defa';
            let AcilD = '4 Yılda 1 Defa';
            let egtm = '2 Yılda 1 Defa';
            let sglk = '3 Yılda 1 Defa';
            let ilkYrd = sayi / 15;
            let thlEkp = sayi / 40;
            let snEkp = sayi / 40;
            let hbrEkp = sayi / 40;
            let tmsl = temsilci();

            document.getElementById('isg').innerHTML = isg;
            document.getElementById('igu').innerHTML = Math.ceil(igu) + ' Saat';
            document.getElementById('hkm').innerHTML = Math.ceil(hkm) + ' Saat';
            document.getElementById('dsp').innerHTML = ' 0 ' + ' Saat';
            document.getElementById('riskA').innerHTML = riskA;
            document.getElementById('AcilD').innerHTML = AcilD;
            document.getElementById('egtm').innerHTML = egtm;
            document.getElementById('sglk').innerHTML = sglk;
            document.getElementById('tmsl').innerHTML = tmsl;
            document.getElementById('ilkYrd').innerHTML = Math.ceil(ilkYrd) + ' Kişi';
            document.getElementById('thlEkp').innerHTML = Math.ceil(thlEkp) + 'Kişi';
            document.getElementById('snEkp').innerHTML = Math.ceil(snEkp) + ' Kişi';
            document.getElementById('hbrEkp').innerHTML = Math.ceil(hbrEkp) + 'Kişi';

            console.log(isg)
        } else if (riskLevel == "cokTeh") {
            let isg = "Çok Tehlikeli";
            let igu = sayi * cokTehUzman;
            let hkm = deger * cokTehHekim;
            let dsp = diSaPe();
            let riskA = '2 Yılda 1 Defa';
            let AcilD = '2 Yılda 1 Defa';
            let egtm = 'Yılda 1 Defa';
            let sglk = 'Yılda 1 Defa';
            let ilkYrd = sayi / 10;
            let thlEkp = sayi / 30;
            let snEkp = sayi / 30;
            let hbrEkp = sayi / 30;
            let tmsl = temsilci();

            document.getElementById('isg').innerHTML = isg;
            document.getElementById('igu').innerHTML = Math.ceil(igu) + ' Saat';
            document.getElementById('hkm').innerHTML = Math.ceil(hkm) + ' Saat';
            document.getElementById('dsp').innerHTML = dsp;
            document.getElementById('riskA').innerHTML = riskA;
            document.getElementById('AcilD').innerHTML = AcilD;
            document.getElementById('egtm').innerHTML = egtm;
            document.getElementById('sglk').innerHTML = sglk;
            document.getElementById('tmsl').innerHTML = tmsl;
            document.getElementById('ilkYrd').innerHTML = Math.ceil(ilkYrd) + ' Kişi';
            document.getElementById('thlEkp').innerHTML = Math.ceil(thlEkp) + 'Kişi';
            document.getElementById('snEkp').innerHTML = Math.ceil(snEkp) + ' Kişi';
            document.getElementById('hbrEkp').innerHTML = Math.ceil(hbrEkp) + 'Kişi';
        }

        // return riskLevel;
    }
    // Çalışan Temsilcisi 
    function temsilci(value) {
        let tmsl = sayi;

        if (tmsl == 1) {
            tmsl = 0 + ' Kişi';
        } else if (tmsl >= 2 && tmsl <= 50) {
            tmsl = 1 + ' Kişi';
        } else if (tmsl >= 51 && tmsl <= 100) {
            tmsl = 2 + ' Kişi';
        } else if (tmsl >= 101 && tmsl <= 500) {
            tmsl = 3 + ' Kişi';
        } else if (tmsl >= 501 && tmsl <= 1000) {
            tmsl = 4 + ' Kişi';
        } else if (tmsl >= 1001 && tmsl <= 2000) {
            tmsl = 5 + ' Kişi';
        }
        else if (tmsl >= 2001) {
            tmsl = 6 + ' Kişi';
        }
        return tmsl;
    }

    //Dsp için

    function diSaPe(value) {
        let dsp = sayi;
        if (dsp <= 10) {
            dsp = ' - ' + ' Saat ';
        } else if (dsp > 10 && dsp <= 49) {
            dsp = Math.ceil((sayi * 10) / 60) + ' Saat';
        } else if (dsp => 50 && dsp <= 249) {
            dsp = Math.ceil((sayi * 15) / 60) + ' Saat';
        } else if (dsp => 250) {
            dsp = Math.ceil((sayi * 20) / 60) + ' Saat';
        }
        return dsp;
    }
    const topla = () => {
        calculateRiskLevel();
        temsilci();
        diSaPe();

    }
    return (
        <div>
            <div className='dangerClass' >
                <div><h3>İş Güvenliği Gerekli Hizmet Bilgisi</h3></div>
                <div className='classInfo' >
                    <div className='dngbslk'>Tehlike Sınıfı :</div>
                    <div>
                        <select
                            onChange={(e) => setFromCurrency(e.target.value)}
                            className='from-curreny-option'>

                            <option value='azTeh'>Az Tehlikeli</option>
                            <option value='teh'>Tehlikeli</option>
                            <option value='cokTeh'>Çok Tehlikeli</option>
                        </select>
                    </div>
                    <div className='dngbslk'>Çalışan Sayısı :</div>
                    <div><input className='from-curreny-value'
                        value={sayi}
                        onChange={(e) => setSayi(e.target.value)}
                        type="number" /></div>
                </div>
                <div> <button className='btnInfo' onClick={topla}>Hesapla</button></div>
            </div>

            <div className='list'>
                <ul className='list1'>
                    <h3 className='altBaslik'>Alınması Gerekli Hizmetler</h3>
                    <li><div>Tehlike Sınıfı</div>  <div id='isg'> - </div></li>
                    <li><div>İş Güvenliği Uzmanı</div> <div id='igu'> - </div></li>
                    <li><div>İşyeri Hekimi</div> <div id='hkm'> - </div></li>
                    <li><div>DSP</div> <div id='dsp'> - </div></li>
                    <li><div>Risk Analiz Raporu</div> <div id='riskA'> - </div></li>
                    <li><div>Acil Durum Planı</div> <div id='AcilD'> - </div></li>
                    <li><div>İsg Temel Eğitim</div> <div id='egtm'> - </div></li>
                    <li><div>Sağlık Raporu </div><div id='sglk'> - </div></li>
                    <li><div>Çalışan Temsilcisi</div> <div id='tmsl'> - </div></li>
                    <h3 className='altBaslik'>Acil Durum Ekibi</h3>
                    <li><div>İlk Yardım Ekibi</div> <div id='ilkYrd'> - </div></li>
                    <li><div>Söndürme Ekibi</div><div id='thlEkp'> - </div> </li>
                    <li><div>Koruma-Kurtarma Ekibi</div><div id='snEkp'> - </div> </li>
                    <li><div>Tahliye-Haberleşme Ekib</div><div id='hbrEkp'> - </div></li>
                </ul>
            </div>


        </div >


    )
}

export default Info