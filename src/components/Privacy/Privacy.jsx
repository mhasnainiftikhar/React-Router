import React from 'react';

function Privacy() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-2xl font-semibold text-gray-800">Privacy Policy</h1>
                
                <p className="mt-4 text-gray-600 text-sm">
                    Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information.
                </p>
                
                <h2 className="mt-4 text-lg font-medium text-gray-700">Information We Collect</h2>
                <p className="text-sm text-gray-600">We collect information that you provide directly to us, such as when you sign up or contact us.</p>
                
                <h2 className="mt-4 text-lg font-medium text-gray-700">How We Use Information</h2>
                <p className="text-sm text-gray-600">We use your information to provide, maintain, and improve our services.</p>
                
                <h2 className="mt-4 text-lg font-medium text-gray-700">Data Protection</h2>
                <p className="text-sm text-gray-600">We implement security measures to protect your personal data from unauthorized access.</p>
                
                <h2 className="mt-4 text-lg font-medium text-gray-700">Contact Us</h2>
                <p className="text-sm text-gray-600">If you have any questions about our Privacy Policy, feel free to reach out.</p>
                
                <a 
                    href="https://policies.google.com/privacy?hl=en-US" 
                    className="inline-block mt-4 px-4 py-2 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
}

export default Privacy;
