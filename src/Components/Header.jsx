import React from 'react';

function Header() {
    return (
        <header className="bg-blue-800 shadow-lg p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">GLOF Warning System</h1>
                <nav>
                    <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded mr-2">Dashboard</button>
                    <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded mr-2">Resources</button>
                    <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded">Login</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;