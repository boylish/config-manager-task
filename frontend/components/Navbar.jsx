import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FiGrid, FiEdit3 } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
        <nav className="flex justify-center gap-6 mb-10">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 rounded bg-gray-800 hover:bg-blue-600 transition text-blue-300 hover:text-white"
          >
            <FiGrid className="text-lg" />
            Fetch Config
          </Link>
          <Link
            to="/update"
            className="flex items-center gap-2 px-4 py-2 rounded bg-gray-800 hover:bg-green-600 transition text-green-300 hover:text-white"
          >
            <FiEdit3 className="text-lg" />
            Update Remark
          </Link>
        </nav>
    </>
  )
}

export default Navbar