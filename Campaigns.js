import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('/api/campaigns');
        setCampaigns(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>Past Campaigns</h2>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id}>{campaign.name} - {campaign.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Campaigns;