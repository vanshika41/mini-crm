import React, { useState } from 'react';
import axios from 'axios';

const CreateCampaign = () => {
  const [rules, setRules] = useState([]);
  const [newRule, setNewRule] = useState({ field: '', operator: '', value: '' });

  const addRule = () => {
    setRules([...rules, newRule]);
    setNewRule({ field: '', operator: '', value: '' });
  };

  const createCampaign = async () => {
    try {
      const response = await axios.post('/api/campaigns', { rules });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create Campaign</h2>
      <div>
        <input type="text" placeholder="Field" value={newRule.field} onChange={(e) => setNewRule({ ...newRule, field: e.target.value })} />
        <input type="text" placeholder="Operator" value={newRule.operator} onChange={(e) => setNewRule({ ...newRule, operator: e.target.value })} />
        <input type="text" placeholder="Value" value={newRule.value} onChange={(e) => setNewRule({ ...newRule, value: e.target.value })} />
        <button onClick={addRule}>Add Rule</button>
      </div>
      <button onClick={createCampaign}>Create Campaign</button>
      <div>
        <h3>Rules:</h3>
        <ul>
          {rules.map((rule, index) => (
            <li key={index}>{`${rule.field} ${rule.operator} ${rule.value}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateCampaign;