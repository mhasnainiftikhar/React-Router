import React from 'react'
import { useParams } from 'react-router-dom'

function User () {
    const { id } = useParams();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold text-gray-800">User Profile</h1>
        <p className="mt-4 text-lg text-gray-600">User ID: 
          <span className="font-bold text-orange-600">{id}</span>
        </p>
      </div>
    </div>
  )
}

export default User
