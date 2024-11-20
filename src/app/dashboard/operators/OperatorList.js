import { useEffect, useState } from 'react';
import OperatorDetails from './OperatorDetails';

const OperatorList = () => {
  const [operators, setOperators] = useState([]);
  const [selectedOperator, setSelectedOperator] = useState(null);

  useEffect(() => {
    const fetchOperators = async () => {
      try {
        const res = await fetch('/api/uptrends/operators');
        const data = await res.json();
        setOperators(data);
      } catch (error) {
        console.error('Error fetching operators:', error);
      }
    };

    fetchOperators();
  }, []);

  return (
    <div>
      <h2>Operators</h2>
      {selectedOperator ? (
        <OperatorDetails operatorGuid={selectedOperator} />
      ) : (
        <ul>
          {operators.map((operator) => (
            <li key={operator.Guid}>
              {operator.Name}{' '}
              <button onClick={() => setSelectedOperator(operator.Guid)}>
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OperatorList;
