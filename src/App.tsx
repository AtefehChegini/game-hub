import React from 'react'
import { Button } from "@/components/ui/button";
import { HStack } from "@chakra-ui/react";

const App = () => {
  return (
    <div className="">
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </div>
  );
}

export default App