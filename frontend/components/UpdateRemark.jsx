import React, { useState } from "react";
import axios from "axios";

const UpdateRemark =()=> {
  const [configId, setConfigId] = useState("");
  const [remark, setRemark] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const updateRemark = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8080/api/configurations/${configId}`,
        {
          remark,
        }
      );
      setMessage(res.data.message);
      setError("");
    } catch (err) {
      setMessage("");
      setError("Failed to update remark");
    }
  };

  const clearForm = () => {
    setConfigId("");
    setRemark("");
    setMessage("");
    setError("");
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl max-w-7xl mx-auto shadow-xl  mt-8 text-white">
      <h2 className="text-3xl font-semibold text-green-400 mb-6">
        Update Remark
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="mb-1 text-sm text-gray-300">
            Config To Update (configID):
          </label>
          <input
            type="text"
            placeholder="Enter Configuration ID"
            value={configId}
            onChange={(e) => setConfigId(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white border border-green-500 focus:outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="mb-1 text-sm text-gray-300">Remark</label>
          <textarea
            rows={2}
            placeholder="Enter your remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white border border-green-500 focus:outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={updateRemark}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded text-white"
          >
            Submit
          </button>
          <button
            onClick={clearForm}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded text-white"
          >
            Clear
          </button>
        </div>

        {message && <p className="text-lime-400">{message}</p>}
        {error && <p className="text-red-400">{error}</p>}
      </div>
    </div>
  );
}

export default UpdateRemark
