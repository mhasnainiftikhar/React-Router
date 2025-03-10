import React, { useState, useEffect } from 'react';

function Github() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/users/mhasnainiftikhar')
            .then(response => response.json())
            .then(data => setData(data)) // Correctly setting data
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-2xl font-semibold text-gray-800">GitHub Profile</h1>
                
                {data.avatar_url && (
                    <img 
                        src={data.avatar_url} 
                        alt="GitHub Avatar" 
                        className="mt-4 w-32 h-32 rounded-full mx-auto border-4 border-orange-600 shadow-md"
                    />
                )}

                <p className="mt-4 text-lg text-gray-600 font-medium">Followers: <span className="font-bold">{data.followers}</span></p>
                <p className="text-lg text-gray-600">Following: <span className="font-bold">{data.following}</span></p>
                <p className="text-lg text-gray-600">Public Repos: <span className="font-bold">{data.public_repos}</span></p>
                
                {data.html_url && (
                    <a 
                        href={data.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-4 py-2 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition"
                    >
                        View Profile
                    </a>
                )}
            </div>
        </div>
    );
}

export default Github;
