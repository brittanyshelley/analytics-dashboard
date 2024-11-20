import { useEffect, useState } from 'react';

const OperatorDetails = ({ operatorGuid }) => {
  const [operatorDetails, setOperatorDetails] = useState(null);

  useEffect(() => {
    const fetchOperatorDetails = async () => {
      try {
        const res = await fetch(`/api/uptrends/operators/${operatorGuid}`);
        const data = await res.json();
        setOperatorDetails(data);
      } catch (error) {
        console.error('Error fetching operator details:', error);
      }
    };

    fetchOperatorDetails();
  }, [operatorGuid]);

  if (!operatorDetails) return <p>Loading...</p>;

  return (
    <div>
      <h3>Operator Details</h3>
      <p>Name: {operatorDetails.Name}</p>
      <p>Email: {operatorDetails.Email}</p>
      {/* Add other details as needed */}
    </div>
  );
};

export default OperatorDetails;
