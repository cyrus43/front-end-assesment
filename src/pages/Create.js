import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Flex,
  FormHelperText,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Context } from '../store';

const Create = () => {
  const [, dispatch] = React.useContext(Context);

  const handleChange = e => {
    dispatch({
      type: 'update_details',
      payload: { [e.target.name]: e.target.value },
    });
  };

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
      <FormControl pt="95px">
        <FormLabel>Event name</FormLabel>
        <Input name="eventName" onChange={handleChange} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel> Host name</FormLabel>
        <Input name="hostName" onChange={handleChange} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Start time/date</FormLabel>
        <Input name="startDate" onChange={handleChange} type="text" />
        <FormHelperText>DD/MM/YYYY</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>End time/date</FormLabel>
        <Input name="endDate" onChange={handleChange} type="text" />
        <FormHelperText>DD/MM/YYYY</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Location</FormLabel>
        <Input name="location" onChange={handleChange} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Event photo</FormLabel>
        <Input name="eventPhoto" onChange={handleChange} type="text" />
        <FormHelperText>Paste image url here.</FormHelperText>
      </FormControl>
      <Text
        sx={{
          position: 'absolute',
          width: '283px',
          height: '108px',
          left: '19px',
          top: '0px',
          'font-family': "'Helvetica'",
          'font-style': 'normal',
          'font-weight': '700',
          'font-size': '36px',
          'line-height': '36px',
          'text-align': 'center',
          color: '#240D57',
        }}
      >
        Create your Event
      </Text>
      <Button
        as={Link}
        to="/event"
        sx={{
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'center',
          'align-items': 'center',
          padding: '16px',
          gap: '10px',
          position: 'absolute',
          width: '187px',
          height: '50px',
          left: 'calc(50% - 187px/2)',
          top: '616px',
          background: 'linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)',
          'border-radius': '10px',
          color: '#FFFFFF',
        }}
      >
        🎉 Next
      </Button>
    </Flex>
  );
};

export default Create;
