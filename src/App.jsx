import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import WorldMap from './Components/WorldMap';
import LakeView from './Components/LakeView';
import Information from './Components/Information';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
    const [activeTab, setActiveTab] = useState('dashboard');

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <Dashboard />;
            case 'map':
                return <WorldMap />;
            case 'lake':
                return <LakeView />;
            case 'info':
                return <Information />;
            case 'about':
                return <About />;
            case 'contact':
                return <Contact />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white flex flex-col">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-grow">
                <div className="space-y-4">
                    <div className="grid w-full grid-cols-6 bg-blue-800 rounded-lg sticky top-16 z-40">
                        {["dashboard", "map", "lake", "info", "about", "contact"].map((tab) => (
                            <button
                                key={tab}
                                className={`py-2 px-4 text-center hover:bg-blue-600 transition-colors duration-200 ${activeTab === tab ? 'bg-blue-600' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                    {renderContent()}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;