import React from 'react';

function Information() {
    return (
        <div>
            <div className="bg-white text-black rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">What is a Glacier Lake Outburst Flood?</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
                    <img src="https://nsidc.org/sites/default/files/images/Dig_Tsho_Glacial_Lake_Nepal_2.jpg" alt="Glacier Lake" className="w-full md:w-1/2 rounded-lg object-cover" />
                    <div>
                        <p className="mb-4">A Glacier Lake Outburst Flood (GLOF) is a type of outburst flood that occurs when water dammed by a glacier or a moraine is released. These floods can be highly destructive and pose significant risks to downstream communities and infrastructure.</p>
                        <p>GLOFs can occur due to various reasons, including:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Melting of ice dam</li>
                            <li>Erosion of moraine dam</li>
                            <li>Avalanche of rock or heavy snow</li>
                            <li>Earthquake</li>
                            <li>Volcanic eruptions under ice</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-white text-black rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Safety Measures</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
                    <div>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Stay informed about weather conditions and glacier activity in your area.</li>
                            <li>Know your evacuation routes and have an emergency kit ready.</li>
                            <li>Follow instructions from local authorities promptly.</li>
                            <li>Avoid low-lying areas and river valleys during high-risk periods.</li>
                            <li>Participate in community GLOF preparedness programs.</li>
                            <li>Help spread awareness about GLOF risks in your community.</li>
                        </ul>
                    </div>
                    <img src="https://static.theprint.in/wp-content/uploads/2024/04/Untitled-design-85.png" alt="Safety Measures" className="w-full md:w-1/2 rounded-lg object-cover" />
                </div>
            </div>
        </div>
    );
}

export default Information;