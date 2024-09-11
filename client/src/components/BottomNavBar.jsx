import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function BottomNavBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ bgcolor: '#4C956C', position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ bgcolor: '#4C956C'}}
      >
        <BottomNavigationAction
          label="Restaurantes"
          icon={<FastfoodIcon />}
          sx={{
            color: value === 0 ? 'white' : 'rgba(255, 255, 255, 0.6)', // Selected white, unselected slightly transparent
            '&.Mui-selected': {
              color: 'white', // Selected label color
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // Gray transparent background
              borderRadius: '0px', // Optional, for a rounded background effect
            },
          }}
        />
        <BottomNavigationAction
          label="Mapa"
          icon={<MapOutlinedIcon />}
          sx={{
            color: value === 1 ? 'white' : 'rgba(255, 255, 255, 0.6)',
            '&.Mui-selected': {
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // Gray transparent background
              borderRadius: '0px', // Optional, for a rounded background effect
            },
          }}
        />
        <BottomNavigationAction
          label="Perfil"
          icon={<AccountBoxIcon />}
          sx={{
            color: value === 2 ? 'white' : 'rgba(255, 255, 255, 0.6)',
            '&.Mui-selected': {
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // Gray transparent background
              borderRadius: '0px', // Optional, for a rounded background effect
            },
          }}
        />
      </BottomNavigation>
    </Box>
  );
}