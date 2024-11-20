import Hamster from './icons/Hamster';
import './App.css';
import { useState } from 'react';

function App() {
  const levelNames = [
    "Bronze",    // 0 to 4,999 coins
    "Silver",    // 5,000 to 24,999 coins
    "Gold",      // 25,000 to 99,999 coins
    "Platinum",  // 100,000 to 999,999 coins
    "Diamond",   // 1,000,000 to 1,999,999 coins
    "Epic",      // 2,000,000 to 9,999,999 coins
    "Legendary", // 10,000,000 to 49,999,999 coins
    "Master",    // 50,000,000 to 99,999,999 coins
    "Grandmaster", // 100,000,000 to 999,999,999 coins
    "Lord"       // 1,000,000,000 to infinity coins
  ];

  const levelMinPoints = [
    0,           // Bronze
    5000,        // Silver
    25000,       // Gold
    100000,      // Platinum
    1000000,     // Diamond
    2000000,     // Epic
    10000000,    // Legendary
    50000000,    // Master
    100000000,   // Grandmaster
    1000000000   // Lord
  ];

  const [levelIndex, setLevelIndex] = useState(6); // Set to "Legendary" for testing
  const [points, setPoints] = useState(22749365);  // Test points

  const calculateProgress = () => {
    if (levelIndex >= levelNames.length - 1) {
      return 100;
    }
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    const progress = ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(Math.max(progress, 0), 100); // Ensure progress is within 0-100%
  };

  return (
    <>
      <div className='bg-black flex justify-center'>
        <div className='w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl'>
          <div className='px-4 z-10'>
            <div className='flex items-center space-x-2 pt-4'>
              <div className='p-1 rounded-lg bg-[#1d2025]'>
                <Hamster size={24} className="text-[#d4d4d4]" />
              </div>
              <div className='flex items-center'>
                <p className='text-sm'>Destiny (CEO)</p>
              </div>
            </div>

            <div className='flex items-center justify-between space-x-4 mt-1'>
              <div className='flex items-center w-1/3'>
                <div className='w-full'>
                  <div className='flex justify-between'>
                    <p className='text-sm'>{levelNames[levelIndex]}</p>
                    <p className='text-sm'>
                      {levelIndex + 1}/<span className='text-[#95908a]'>{levelNames.length}</span>
                    </p>
                  </div>
                  <div className='flex items-center mt-1 border-2 border-[#43433b] rounded-full'>
                    <div className='w-full h-2 bg-[#43433b]/[0.6] rounded-full'>
                      <div
                        className='progress-gradient h-2 rounded-full'
                        style={{ width: `${calculateProgress()}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
