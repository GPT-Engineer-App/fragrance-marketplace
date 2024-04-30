import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Image, Text, Button, useToast } from "@chakra-ui/react";

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const product = {
    id: productId,
    name: "Product Name",
    image: "https://example.com/product-image.jpg",
    description: "Product Description",
  };

  const sendRequest = () => {
    toast({
      title: "Request Sent",
      description: `A purchase request for product ID: ${productId} has been sent to the store.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/");
  };

  return (
    <Box p={5}>
      <Image src={product.image} alt={product.name} />
      <Text fontSize="2xl" fontWeight="bold">
        {product.name}
      </Text>
      <Text>{product.description}</Text>
      <Button colorScheme="blue" onClick={sendRequest}>
        Send Request
      </Button>
    </Box>
  );
}

export default ProductDetail;
