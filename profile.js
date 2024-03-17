import React from "react";
import "react-responsive-modal/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import img1 from './FotoAnggota/Ata.jpeg';
import img2 from './FotoAnggota/Fatur.jpeg';
import img3 from './FotoAnggota/Syafiq.jpeg';
import img4 from './FotoAnggota/Loren.jpeg';
import "./profile.css"; // Import file CSS untuk menyesuaikan tata letak

const Profile = () => {
    const policyText = (
        <div className="team-profile">
            <h1 className="perkenalan">
                GROUP PROFILE
            </h1>
            <div className="team-member">
                <img src={img1} alt="Ata" />
                <div className="nama1">
                    <p>Nama: Athalah Rafif Irsyach Sarbrani</p>
                    <p>NIM: 1103223053</p>
                    <p>Kelas: TK-46-06</p>
                    <p>TTL: Jakarta, 21 Februari 2004</p>
                    <p>Alamat: Bandung kidul kujangsari</p>
                    <a href="https://www.instagram.com/athalahsrb" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
            </div>
            <div className="team-member">
                <img src={img2} alt="Fatur" />
                <div className="nama2">
                    <p>Muhammad Faturrahman Tohiri</p>
                    <p>NIM: 1101220248</p>
                    <p>Kelas: TT-46-07</p>
                    <p>TTL: Karawang, 27 Desember 2003</p>
                    <p>Alamat: GBA 1 blok H 113</p>
                    <a href="https://www.instagram.com/fatur_tohir" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
            </div>
            <div className="team-member">
                <img src={img3} alt="Syafiq" />
                <div className="nama1">
                    <p>Syafiq Aqilah Hammam</p>
                    <p>NIM: 1101223410</p>
                    <p>Kelas: TT-46-07</p>
                    <p>TTL: Jakarta, 1 April 2004</p>
                    <p>Alamat: Bojong Soang</p>
                    <a href="https://www.instagram.com/fikql_" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                </div>
            </div>
            <div className="team-member">
                <img src={img4} alt="Loren" />
                <div className="nama2">
                    <p>Maria Lorenza Simarmata</p>
                    <p>NIM: 1101223308</p>
                    <p>Kelas: TT-46-08</p>
                    <p>TTL: Aek Kanopan, 14 November 2004</p>
                    <p>Alamat: House of Yohana, gang pga</p>
                    <a href="https://www.instagram.com/marialorenzasss" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {policyText}
        </>
    );
}

export default Profile;