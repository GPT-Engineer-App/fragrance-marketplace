import { Box, Text, Image, Button, VStack, HStack, useToast, Select } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

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
        <Select placeholder="Select Men's Product" onChange={(e) => sendRequest(products.find((p) => p.id === parseInt(e.target.value)))}>
          {products
            .filter((p) => p.type === "Men")
            .map((product) => (
              <option key={product.id} value={product.id}>
                <a href={`/product/${product.id}`}>{`${product.name} - ${product.type}, ${product.price}`}</a>
              </option>
            ))}
        </Select>
        <Select placeholder="Select Women's Product" onChange={(e) => sendRequest(products.find((p) => p.id === parseInt(e.target.value)))}>
          {products
            .filter((p) => p.type === "Women")
            .map((product) => (
              <option key={product.id} value={product.id}>
                <a href={`/product/${product.id}`}>{`${product.name} - ${product.type}, ${product.price}`}</a>
              </option>
            ))}
        </Select>
      </VStack>
    </Box>
  );
};

export default Index;
