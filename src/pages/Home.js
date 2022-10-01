import React from 'react';
import { Button, Image, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
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
        Imagine if
      </Text>
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
        Snapchat
      </Text>
      <Text
        fontFamily="Helvetica"
        fontSize="36px"
        fontWeight="700"
        lineHeight="36px"
        pos="absolute"
        top="75px"
        letterSpacing="0em"
      >
        had events.
      </Text>
      <Text
        pos="absolute"
        top="120px"
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
        Easily host and share events with your friends across any social media.
      </Text>
      <Image
        sx={{
          position: 'absolute',
          width: ' 165.63px',
          height: ' 292px',
          left: ' calc(50% - 165.63px/2 + 0.32px)',
          top: ' 290px',
          filter: ' drop-shadow(0px 0px 17.6435px rgba(0, 0, 0, 0.05))',
          'border-radius': '13.2326px',
        }}
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T163913Z&X-Amz-Expires=86400&X-Amz-Signature=3ca5b6a88c509ca62332d005645dd7239c2936c79f011f5e32bd9895bbd93545&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
      />

      <Button
        as={Link}
        to="/create"
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
        🎉 Create my event
      </Button>
    </Flex>
  );
};

export default Home;
