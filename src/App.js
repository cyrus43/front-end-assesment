import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Create from './pages/Create';
import Event from './pages/Event';

import { Store } from './store';

// const EventDetails = React.createContext({});

function App() {
  return (
    <Store>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<App />}> */}
            <Route index element={<Home />} />
            {/* <EventDetails.Provider> */}
            <Route path="create" element={<Create />} />
            <Route path="event" element={<Event />} />
            {/* </EventDetails.Provider> */}
            {/* <Route path="teams" element={<Teams />}>
             <Route path=":teamId" element={<Team />} />
             <Route path="new" element={<NewTeamForm />} />
             <Route index element={<LeagueStandings />} />
           </Route> */}
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </Store>
  );
}

export default App;
