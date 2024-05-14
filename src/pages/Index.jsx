import { useState } from "react";
import { Box, Button, Container, Flex, HStack, IconButton, Input, Text, VStack } from "@chakra-ui/react";
import { FaPaperPlane, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "You" }]);
      setInputValue("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" mb={4}>
          企业内部聊天工具
        </Text>
        <Box borderWidth="1px" borderRadius="lg" width="100%" height="60vh" overflowY="auto" p={4}>
          {messages.map((message, index) => (
            <Flex key={index} mb={2} justifyContent={message.sender === "You" ? "flex-end" : "flex-start"}>
              <HStack>
                {message.sender !== "You" && <FaUserCircle size="24px" />}
                <Box bg={message.sender === "You" ? "blue.100" : "gray.100"} borderRadius="md" p={2}>
                  <Text>{message.text}</Text>
                </Box>
                {message.sender === "You" && <FaUserCircle size="24px" />}
              </HStack>
            </Flex>
          ))}
        </Box>
        <HStack width="100%">
          <Input
            placeholder="输入消息..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSendMessage} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
