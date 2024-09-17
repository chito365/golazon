import {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useRouter } from "next/router"

export default function StandingsNav({leagues}) {
  const [value, setValue] = useState(0);
  const router = useRouter()

  const handleChange = (event, newValue) => {
    setValue(newValue);
    router.push(`/standings/${leagues[newValue].id}`)
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
         {
             leagues?.map(
                 ({title,id}) => {
                     return(
                            <Tab label={title} key={id} />
                     )
                 }
             )
         }
      </Tabs>
    </Box>
  );
}
