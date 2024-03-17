import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";

const Footer = () => {
    const [open, setOpen] = useState(false);

    const handleAboutUsClick = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <footer className="footer">
            <div className="footer__taskbar">
                <a href="https://github.com/Kallz29/CPSKELOMPOK8" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="" />
                </a>
                <a href="https://www.instagram.com/cpslaboratory/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="" />
                </a>
                <a href="https://lms.cpsrg.org/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGoogle} size="" />
                </a>
            </div>
            <div className="footer__about-us" onClick={handleAboutUsClick}>
                About Us
            </div>
            <a href="https://wa.me/+6281396791939" target="blank" rel="noopener noreferrer" className="footer_whatsapp-link">
                Contact us on WhatsApp
            </a>
            <Modal open={open} onClose={handleCloseModal} center>
                <h2>About Us</h2>
                <p>
                Halo semuanya kenalin kami dari kelompok 5.
                Disini kami mengembangkan sebuah alat dengan menggunakan Internet of Things bernama Fire Detection Sensor. Dalam mengembangkan sistem ini, kami memanfaatkan sensor flame dan sensor ultrasonik. Alat tersebut kami buat untuk membantu orang-orang dalam menghadapi situasi darurat, terutama kebakaran. Kami memperkenalkan Fire Detection Sensor sebagai solusi inovatif untuk deteksi dini kebakaran. Alat ini dirancang untuk mendeteksi keberadaan api di lingkungan sekitarnya dengan cepat dan akurat. Sensor flame akan secara sensitif mendeteksi adanya nyala api, sementara sensor ultrasonik akan memantau perubahan suhu dan pergerakan udara yang tidak normal. Misalnya, dalam suatu ruangan atau bangunan, sensor flame dan ultrasonik ditempatkan secara strategis. Ketika sensor flame mendeteksi adanya api, maka sensor ultrasonik akan menyala dan memantau perubahan udara yang tidak normal sistem akan memberikan peringatan segera kepada objek yang ingin masuk kedalam ruangan (misalnya: manusia) melalui berbagai cara, seperti alarm suara dan pengiriman pesan teks. 
                Dengan deteksi dini yang cepat dan akurat, Fire Detection Sensor dapat memberikan waktu yang berharga bagi pengguna untuk segera mengambil tindakan pencegahan atau evakuasi, sehingga dapat mengurangi risiko dan kerugian yang diakibatkan oleh kebakaran. Semoga dengan adanya alat ini, kita dapat meningkatkan keselamatan dan kesiapsiagaan dalam menghadapi situasi darurat seperti kebakaran. 
                Terimakasih sudah mengunjungi website kami. apabila anda punya pertanyaan silahkan langsung hubungi kami, kami sangat menghargai saran dan kritikan anda. kami harap alat yang kami buat dapat berguna dan bermanfaat. 
                </p>
            </Modal>
        </footer>
    );  
};

export default Footer;