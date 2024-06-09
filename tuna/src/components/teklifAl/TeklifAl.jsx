import React from 'react'
import './teklifAl.css'
import { useState } from 'react';

function TeklifAl() {
    const [formData, setFormData] = useState({
        ad: '',
        soyad: '',
        email: '',
        telefon: '',
        tehlikeSinif: '',
        kisiSayisi: '',
        hizmetler: {
            isGuvenligi: false,
            isyeriHekimligi: false,
            riskAnaliz: false,
            acilDurum: false,
            yanginEgitimi: false,
            yuksekteCalismaEgitimi: false,
            iseGiris: false,
            mobilSaglik: false,
        },
        ekHizmet: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                hizmetler: {
                    ...formData.hizmetler,
                    [name]: checked
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="form">
                <div className='form-One'>
                    <div>
                        <input type="text" name="ad" placeholder='Adınız' value={formData.ad} onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="text" name="soyad" placeholder='Soyadınız' value={formData.soyad} onChange={handleChange} required />
                    </div>
                </div>
                <div className='form-One'>
                    <div>
                        <input type="number" name="telefon" placeholder='Telefon Numaranız' value={formData.telefon} onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="email" name="email" placeholder='E-Posta Adresiniz' value={formData.email} onChange={handleChange} required />
                    </div>
                </div>
                <div>
                    <div className='form-One'>
                        <div>
                            <input type="text" name="tehlikeSinif" placeholder='Tehlike Sınıfı' value={formData.tehlikeSinif} onChange={handleChange} required />
                        </div>
                        <div>
                            <input type="number" name="kisiSayisi" placeholder='Kişi Sayısı' value={formData.kisiSayisi} onChange={handleChange} required />
                        </div></div>
                    <div className='checkbox'>
                        <label className='labelHeader'>İstediğiniz hizmetleri seçiniz:</label>
                        <div>
                            <input type="checkbox" name="isGuvenligi" checked={formData.hizmetler.isGuvenligi} onChange={handleChange} />
                            <label>İş Güvenliği Uzmanlık Hizmeti</label>
                        </div>
                        <div>
                            <input type="checkbox" name="isyeriHekimligi" checked={formData.hizmetler.isyeriHekimligi} onChange={handleChange} />
                            <label>İşyeri Hekimlik Hizmeti</label>
                        </div>
                        <div>
                            <input type="checkbox" name="riskAnaliz" checked={formData.hizmetler.riskAnaliz} onChange={handleChange} />
                            <label>Risk Analiz Raporu</label>
                        </div>
                        <div>
                            <input type="checkbox" name="acilDurum" checked={formData.hizmetler.acilDurum} onChange={handleChange} />
                            <label>Acil Durum Eylem Planı</label>
                        </div>
                        <div>
                            <input type="checkbox" name="yanginEgitimi" checked={formData.hizmetler.yanginEgitimi} onChange={handleChange} />
                            <label>Yangın Eğitimi Ve Tatbikatı</label>
                        </div>
                        <div>
                            <input type="checkbox" name="yuksekteCalismaEgitimi" checked={formData.hizmetler.yuksekteCalismaEgitimi} onChange={handleChange} />
                            <label>Yüksekte Çalışma Eğitimi</label>
                        </div>
                        <div>
                            <input type="checkbox" name="iseGiris" checked={formData.hizmetler.iseGiris} onChange={handleChange} />
                            <label>İşe Giriş Sağlık Raporu</label>
                        </div>
                        <div>
                            <input type="checkbox" name="mobilSaglik" checked={formData.hizmetler.mobilSaglik} onChange={handleChange} />
                            <label>Mobil Sağlık Tarama Hizmeti</label>
                        </div>

                    </div>
                    <div>
                        <label className='msg'>Ek hizmet talebiniz varsa bu alana yazarak belirtebilirsiniz:</label>
                        <textarea name="ekHizmet" value={formData.ekHizmet} onChange={handleChange}></textarea>
                    </div>
                    <div className='btn'>
                        <button type="submit">Gönder</button>
                    </div>

                </div></div>
        </form>
    );
}


export default TeklifAl