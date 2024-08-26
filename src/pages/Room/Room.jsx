import React, { useState } from 'react';
import { Box, Heading, Button, useClipboard } from '@chakra-ui/react';

const Room = () => {
  const alertCode = `
<Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Application submitted!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for submitting your application. Our team will get back to you soon.
  </AlertDescription>
</Alert>
  `;

  const { onCopy, hasCopied } = useClipboard(alertCode);

  return (
    <Box w={"90%"} >
      <Heading as="h3" size="lg" mb="4">
        Example Alert Component Code
      </Heading>
      <Box
        as="pre"
        p="4"
        borderRadius="md"
        bg="gray.100"
        border="1px solid"
        borderColor="gray.200"
        mb="4"
      >
        <code>{alertCode}</code>
      </Box>
      <Button onClick={onCopy} colorScheme="teal">
        {hasCopied ? 'Copied!' : 'Copy Code'}
      </Button>
    </Box>
  );
}

export default Room;
