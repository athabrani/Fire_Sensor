'use client'
import { db } from './Firebaseconfig';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "sensors"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

export default function Home() {
  const [sensorData, setSensorData] = useState({ distance: 0, flame_status: 0 });

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      if (data.length > 0) {
        setSensorData({
          distance: data[0].distance,
          flame_status: data[0].flame_status
        });
      }
    }
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-5xl font-bold'>Sensor Data from Firebase Firestore</h1>
      <div>
        <p>Sensor Distance: {sensorData.distance}</p>
        <p>Flame Status: {sensorData.flame_status === 1 ? 'Flame Detected' : 'No Flame Detected'}</p>
      </div>
    </main>
  );
}
