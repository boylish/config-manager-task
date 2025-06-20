import React, { useState } from "react";
import axios from "axios";

const FetchConfig =()=> {
  const [configId, setConfigId] = useState("");
  const [matrix, setMatrix] = useState([]);
  const [error, setError] = useState("");

  const FetchConfig = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/configurations/${configId}`
      );
      setMatrix(res.data);
      setError("");
    } catch (err) {
      setMatrix([]);
      setError("2D array not found for this configurationId.");
    }
  };

  const clearForm = () => {
    setConfigId("");
    setMatrix([]);
    setError("");
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-xl max-w-7xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-6 text-blue-400">
        Fetch Config
      </h2>

      <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-6">
        <div className="flex flex-col gap-1 w-full sm:w-2/3">
          <label className="mb-1 text-sm text-gray-300">
            Config To Load (configID):
          </label>
          <input
            type="text"
            placeholder="Enter Configuration ID"
            className="p-2 rounded bg-gray-800 text-white border border-blue-500 focus:outline-none focus:ring focus:ring-blue-400"
            value={configId}
            onChange={(e) => setConfigId(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={FetchConfig}
            className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded text-white"
          >
            Submit
          </button>
          <button
            onClick={clearForm}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded text-white"
          >
            Clear
          </button>
        </div>
      </div>

      {error && <p className="text-red-400 mb-4">{error}</p>}

      {matrix.length > 0 && (
        <div className="space-y-3">
          {matrix.map((row, i) => (
            <div key={i} className="flex gap-4 bg-gray-700 p-3 rounded shadow">
              {row.map((symbol, j) => (
                <span
                  key={j}
                  className="text-yellow-300 font-medium"
                >{`${symbol},`}</span>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchConfig
