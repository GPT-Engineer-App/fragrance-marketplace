import { Box, Flex, Text, Image, Button, VStack, HStack, useToast } from "@chakra-ui/react";
import { FaShoppingCart, FaEnvelope } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Eau de Toilette",
    type: "Men",
    price: "$50",
    image: "https://images.unsplash.com/photo-1600525990321-9b74f0b86cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZW4lMjBjb2xvZ25lfGVufDB8fHx8MTcxNDQ3NzM2Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Eau de Parfum",
    type: "Women",
    price: "$65",
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHBlcmZ1bWV8ZW58MHx8fHwxNzE0NDc3MzY2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const toast = useToast();

  const sendRequest = (product) => {
    // Simulate sending an email request
    toast({
      title: "Request Sent",
      description: `A purchase request for ${product.name} has been sent to the store.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">
          Colognes & Perfumes
        </Text>
        <HStack spacing={5}>
          {products.map((product) => (
            <Box key={product.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" />
              <Text mt={2} fontSize="xl" fontWeight="semibold">
                {product.name}
              </Text>
              <Text>{product.type}</Text>
              <Text fontSize="lg" color="green.500">
                {product.price}
              </Text>
              <Button leftIcon={<FaShoppingCart />} colorScheme="blue" mt={3} onClick={() => sendRequest(product)}>
                Buy Now
              </Button>
              <Button leftIcon={<FaEnvelope />} colorScheme="teal" mt={3} onClick={() => sendRequest(product)}>
                Send Request
              </Button>
            </Box>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
