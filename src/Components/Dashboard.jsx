import React, { useState, useEffect } from 'react';

function Dashboard() {
    const [isSafe, setIsSafe] = useState(true);
    const [selectedRegion, setSelectedRegion] = useState("himalaya");

    useEffect(() => {
        const interval = setInterval(() => {
            setIsSafe(prev => !prev);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="bg-white text-black rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">GLOF Risk Assessment</h2>
                <div className="grid gap-4">
                    <select
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                        className="w-full p-2 border rounded"
                    >
                        <option value="himalaya">Himalaya</option>
                        <option value="andes">Andes</option>
                        <option value="alps">Alps</option>
                    </select>
                    <div className={`p-4 rounded-lg ${isSafe ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        <h3 className="font-bold">{isSafe ? "Currently Safe" : "Warning: Potential GLOF Risk"}</h3>
                        <p>
                            {isSafe
                                ? `No immediate GLOF risk detected in ${selectedRegion}. Stay informed and prepared.`
                                : `Elevated risk of GLOF in ${selectedRegion}. Please follow local authorities' instructions and be prepared to evacuate if necessary.`}
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white text-black rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Recent GLOF Events</h2>
                <div className="space-y-4">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
                        <img src="https://www.hindustantimes.com/ht-img/img/2024/04/24/1600x900/INDIA-FLOODS-SATELLITE-1_1696655449977_1713973000063.JPG" alt="GLOF Event 1" className="w-full md:w-1/3 h-48 rounded-lg object-cover" />
                        <div>
                            <h3 className="font-semibold">Himalayan GLOF - June 2023</h3>
                            <p>A significant GLOF event occurred in the Himalayas, affecting downstream communities. The sudden release of water from a glacier lake caused widespread flooding and damage to infrastructure.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
                        <img src="https://eos.org/wp-content/uploads/2023/03/imja-tsho-nepal.jpg" alt="GLOF Event 2" className="w-full md:w-1/3 h-48 rounded-lg object-cover" />
                        <div>
                            <h3 className="font-semibold">Andes GLOF - March 2023</h3>
                            <p>A GLOF in the Andes caused significant damage to local infrastructure. The event highlighted the need for improved early warning systems and community preparedness in glacier-prone regions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;