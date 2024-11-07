// #Fetch Data from Your NestJS API

//Step-1 Create a Component to Fetch Data: Create a new component in the components/ directory, e.g., DataDisplay.js:

import { useEffect, useState } from 'react';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/your-endpoint'); // Replace with your NestJS API endpoint
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold">Data from API</h2>
      <ul className="mt-4">
        {data.map((item) => (
          <li key={item.id} className="p-2 border-b">
            {item.name} {/* Adjust based on your data structure */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;

//Step-2:  Use the Component in Your Home Page: Update pages/index.js to include the DataDisplay component: