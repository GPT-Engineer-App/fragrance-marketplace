import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, useToast } from "@chakra-ui/react";

function ProductDetail() {
  const { productId } = useParams();

  const toast = useToast();
  const navigate = useNavigate();

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
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {productId}</p>
      <Button colorScheme="blue" onClick={sendRequest}>
        Send Request
      </Button>
      {}
    </div>
  );
}

export default ProductDetail;
