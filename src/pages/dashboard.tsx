import React, { useState } from 'react';
import '../scss/dashboard.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Stuff from '../components/stuff';
import StuffHistory from '../components/stuffHistory';
import TabPanel from '../components/tabPanel';

const Dashboard: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event: any, value: number) => {
    setCurrentTab(value);
  };

  return (
    <div className='container'>
      <div className='tabs'>
        <Tabs value={currentTab} onChange={handleChange} variant='fullWidth'>
          <Tab label='Today' />
          <Tab label='All' />
        </Tabs>
      </div>
      <div className='tabPanel'>
        <TabPanel value={currentTab} index={0}>
          <Stuff />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <StuffHistory />
        </TabPanel>
      </div>
    </div>
  );
};

export default Dashboard;
