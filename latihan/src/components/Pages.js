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
        const db = getDatabase(app);
        const sensorRef = ref(db, 'sensor');

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
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </section>
  );
};
