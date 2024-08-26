import {
  Box,
  Button,
  Input,
  Stack,
  Heading,
  InputGroup,
  InputRightElement,
  IconButton,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import "./Register.css"

const Register = () => {
  const login__env = import.meta.env.VITE_LOGIN;
  const password__env = import.meta.env.VITE_PASSWORD;

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [lineColor, setLineColor] = useState("");

  const navigate = useNavigate();

  const handleNavigate = () => {
    if (login === login__env && password === password__env) {
      setSuccess("Success!");
      setLineColor("green.500");
      localStorage.setItem("isAuthenticated", "true");

      setTimeout(() => {
        setSuccess("");
        navigate("/home");
      }, 2000);
    } else {
      setError("Login or password is incorrect");
      setLineColor("red.500");
      setTimeout(() => {
        setError("");
        setLineColor("");
      }, 2000);
    }
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleNavigate();
    }
  };

  return (
    <Box  >
      {lineColor && <Box w="100%" height="3px" bg={lineColor} mb="4" />}
      <Box
        maxW="sm"
        mx="auto"
        mt="10%"
        p="6"
        borderRadius="md"
        boxShadow="md"
        bg="gray.50"
        border="1px solid"
        borderColor="gray.200"
        bgColor={"transparent"}
      >
        <Heading as="h2" size="lg" mb="4" textAlign="center" color="gray.600">
          Sign In
        </Heading>
        <Stack spacing="4">
          <Input
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            bg="gray.100"
            borderColor="gray.200"
            focusBorderColor="gray.400"
            onKeyDown={handleKeyDown}
            color={"gray.800"}
            mt={5}
          />
          <InputGroup alignItems="center" mt={5} >
            <Input
              placeholder="Password"
              color={"grat.800"}
              bgColor={"transparent"}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              bg="gray.100"
              borderColor="gray.200"
              focusBorderColor="gray.400"
              onKeyDown={handleKeyDown}
            />
            <InputRightElement>
              <IconButton
                aria-label="Toggle password visibility"
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={handleShowPassword}
                variant=""
                colorScheme="gray"
                h="full"
              />
            </InputRightElement>
          </InputGroup>
          <Button
            colorScheme="gray"
            color={"white"}
            onClick={handleNavigate}
            bg="gray.500"
            _hover={{ bg: "gray.600" }}
            mt={5}
          >
            Continue
          </Button>
          {success && (
            <Alert status="success" variant="solid" borderRadius="md">
              <AlertIcon />
              Welcome to your account!
            </Alert>
          )}
          {error && (
            <Alert status="error" variant="solid" borderRadius="md">
              <AlertIcon />
              {error}
            </Alert>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default Register;
