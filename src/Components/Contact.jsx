import React from 'react';

function Contact() {
    return (
        <div className="bg-white text-black rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="name">Name</label>
                        <input id="name" placeholder="Your Name" className="w-full p-2 border rounded" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="your@email.com" className="w-full p-2 border rounded" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Your message here..." className="w-full p-2 border rounded" rows="4"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;