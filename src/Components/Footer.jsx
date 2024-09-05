import React from 'react';

function Footer() {
    return (
        <footer className="bg-blue-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">GLOF Warning System</h3>
                        <p className="text-sm">Protecting communities through advanced glacier monitoring and early warning systems.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Home</a></li>
                            <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Services</a></li>
                            <li><a href="#" className="hover:text-blue-300 transition-colors duration-200">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center">📧 info@glofwarning.org</li>
                            <li className="flex items-center">📞 +1 (555) 123-4567</li>
                            <li className="flex items-center">📍 123 Glacier Ave, Mountainview, CA 94040</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-300 transition-colors duration-200">Facebook</a>
                            <a href="#" className="hover:text-blue-300 transition-colors duration-200">Twitter</a>
                            <a href="#" className="hover:text-blue-300 transition-colors duration-200">Instagram</a>
                            <a href="#" className="hover:text-blue-300 transition-colors duration-200">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-blue-700 text-center">
                    <p>&copy; 2024 GLOF Warning System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;