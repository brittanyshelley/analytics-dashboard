
"use client";

import React, { useState, useEffect } from 'react';

const MonitorGroupStatus = ({ groupIds }) => {
  const [statuses, setStatuses] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatuses = async () => {
      setLoading(true);
      try {
        const results = await Promise.all(
          groupIds.map(async (groupId) => {
            const response = await fetch(`/api/uptrends/monitor-groups/${groupId}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch data for group ${groupId}`);
            }
            const data = await response.json();
            return { groupId, data };
          })
        );

        const statusMap = results.reduce((acc, curr) => {
          acc[curr.groupId] = curr.data;
          return acc;
        }, {});
        setStatuses(statusMap);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStatuses();
  }, [groupIds]);

  if (loading) return <p>Loading statuses...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Monitor Group Statuses</h2>
      {Object.entries(statuses).map(([groupId, data]) => (
        <div key={groupId}>
          <h3>Group ID: {groupId}</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

export default MonitorGroupStatus;
