import React from 'react';
 


function TermsConditions() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-2xl font-semibold text-gray-800">Terms & Conditions</h1>
                
                <p className="mt-4 text-gray-600 text-sm">
                    By using our website, you agree to comply with and be bound by these Terms and Conditions.
                </p>
                
                <h2 className="mt-4 text-lg font-medium text-gray-700">Use of Services</h2>
                <p className="text-sm text-gray-600">You must use our services responsibly and in accordance with applicable laws.</p>
                
                <h2 className="mt-4 text-lg font-medium text-gray-700">Account Responsibility</h2>
                <p className="text-sm text-gray-600">You are responsible for maintaining the confidentiality of your account information.</p>
                
                <h2 className="mt-4 text-lg font-medium text-gray-700">Limitation of Liability</h2>
                <p className="text-sm text-gray-600">We are not liable for any damages arising from your use of our services.</p>
                
                <h2 className="mt-4 text-lg font-medium text-gray-700">Changes to Terms</h2>
                <p className="text-sm text-gray-600">We reserve the right to modify these Terms at any time. Continued use constitutes acceptance.</p>
                
                <h2 className="mt-4 text-lg font-medium text-gray-700">Contact Us</h2>
                <p className="text-sm text-gray-600">If you have any questions, feel free to contact us.</p>
                
                <a 
                    href="https://termly.io/resources/templates/ecommerce-terms-and-conditions/#:~:text=Template%20%5BFree%20Download%5D-,What%20Are%20Terms%20and%20Conditions?,General%20Conditions" 
                    className="inline-block mt-4 px-4 py-2 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
}

export default TermsConditions;
