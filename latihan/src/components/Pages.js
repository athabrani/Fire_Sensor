import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './Firebase'; // Pastikan path sesuai dengan struktur file Anda

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Pages = () => {
  const [sensorData, setSensorData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const database = getDatabase(app); // Mengganti db menjadi database
        const sensorRef = ref(database, 'sensor'); // Mengganti db menjadi database

        onValue(sensorRef, (snapshot) => {
          const data = snapshot.val();
          setSensorData(data);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
      }
    };

    fetchData();
  }, []);

  // Function to determine flame status based on data
  const getFlameStatus = () => {
    if (sensorData && sensorData.flame_status === 'HIGH') {
      return "MENYALA ABANGKU";
    } else {
      return "SITUASI AMAN";
    }
  };

  // Function to determine additional message based on flame and distance
  const getAdditionalMessage = () => {
    if (sensorData && sensorData.flame_status === 'HIGH') {
      if (sensorData.distance && sensorData.distance <= 50) {
        return `BAHAYA! ${sensorData.distance} cm JANGAN MENDEKAT`;
      } else {
        return "BAHAYA ADA API!!!";
      }
    } else {
      return "SITUASI AMAN";
    }
  };

  return (
    <section className='monitor' id='monitor'>
      <div className='align-items-center'>
        <h1 className='judul'>Monitoring Alat</h1>
        {error ? (
          <p>Error: {error}</p>
        ) : sensorData ? (
          <ul>
            <li>
              <strong>Flame Status:</strong> {sensorData.flame_status}
            </li>
            <li>
              <strong>Distance:</strong> {sensorData.distance} cm
            </li>
            <li>
              <strong>Keterangan:</strong> {sensorData.keterangan}
            </li>
            <li>
              <strong>Status Flame:</strong> {getFlameStatus()}
            </li>
            <li>
              <strong>Additional Message:</strong> {getAdditionalMessage()}
            </li>
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};
