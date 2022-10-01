import React from 'react';
import { Image, Flex, Text, Box } from '@chakra-ui/react';
import { Context } from '../store';

const Create = () => {
  const [state] = React.useContext(Context);

  return (
    <Flex
      direction="column"
      alignItems="center"
      pos="absolute"
      width="321px"
      height="160px"
      left="calc(50% - 321px/2)"
      top="94px"
    >
      <Text
        sx={{
          position: 'absolute',
          width: '163px',
          height: '41px',
          left: '79px',
          top: '34px',
          'font-family': 'Helvetica',
          'font-style': 'normal',
          'font-weight': '700',
          'font-size': '36px',
          'line-height': '41px',
          'text-align': 'center',

          background: 'linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'text-fill-color': 'transparent',
        }}
      >
        Yaay
      </Text>

      <Text
        pos="absolute"
        top="75px"
        sx={{
          width: '321px',
          height: '36px',
          'font-family': "'Helvetica'",
          'font-style': 'normal',
          'font-weight': '300',
          'font-size': '16px',
          'line-height': '28px',
          'text-align': 'center',
          color: '#4F4F4F',
        }}
      >
        Your event has been created
      </Text>
      <Box
        fontFamily="Helvetica"
        fontSize="16px"
        fontWeight="700"
        lineHeight="36px"
        pos="absolute"
        letterSpacing="0em"
        top="140px"
        textAlign="center"
      >
        <Text>Event Name{state.eventName}</Text>
        <Text>Host name : {state.hostName}</Text>
        <Text>Start time/date : {state.startDate}</Text>
        <Text>End time/date : {state.endDate}</Text>
        <Text>Location : {state.location}</Text>
        <Image
          pt="10px"
          sx={{
            width: ' 165.63px',
            height: ' 292px',
            position: 'absolute',
            left: 'calc(50% -50%)',
            filter: ' drop-shadow(0px 0px 17.6435px rgba(0, 0, 0, 0.05))',
            'border-radius': '13.2326px',
          }}
          src={state.eventPhoto}
        />
      </Box>
    </Flex>
  );
};

export default Create;
