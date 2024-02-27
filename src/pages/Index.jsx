import { Box, Button, Container, Divider, Flex, Heading, IconButton, Input, Stack, Text, useColorMode, useColorModeValue, VStack, Image, useToast } from "@chakra-ui/react";
import { FaHeart, FaMoon, FaSun, FaSync } from "react-icons/fa";
import { useState, useEffect } from "react";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const currentYear = new Date().getFullYear();
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState({}); // To store the likes for posts

  // Function to fetch posts from HackerNews API
  const fetchPosts = async () => {
    try {
      const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
      const postIds = await response.json();
      const topTenPosts = postIds.slice(0, 10);
      const postDetails = await Promise.all(
        topTenPosts.map(async (id) => {
          const postResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
          return await postResponse.json();
        }),
      );
      setPosts(postDetails);
    } catch (error) {
      toast({
        title: "Error fetching posts.",
        description: "Unable to fetch posts from HackerNews.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };

  return (
    <Container maxW="940px" centerContent>
      <VStack spacing={8} align="stretch" w="full">
        <Flex justifyContent="space-between" alignItems="center" bg="gray.800" p={4} borderRadius="md">
          <Heading size="md" color="white">
            SheldonNews
          </Heading>
          <Flex gap={2}>
            <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} colorScheme="transparent" aria-label="Toggle dark mode" />
            <IconButton icon={<FaSync />} onClick={fetchPosts} colorScheme="transparent" aria-label="Refresh posts" />
          </Flex>
        </Flex>
        <Divider borderColor="blue.500" borderWidth={2} />
        <Box p={4}>
          <Text fontSize="xl" textAlign="center">
            Discover the future of technology today and be part of the conversation that shapes our tomorrow.
          </Text>
        </Box>
        <Box p={4}>
          <Text fontSize="2xl" textAlign="center" fontWeight="bold">
            Stay ahead of the curve with the latest tech buzz!⚡
          </Text>
        </Box>
        <Box p={4}>
          <Input placeholder="Search posts..." maxW="60%" mx="auto" bg={useColorModeValue("gray.100", "gray.700")} />
        </Box>
        <VStack spacing={4} align="stretch">
          {posts.map((post) => (
            <Flex key={post.id} direction="column" bg={useColorModeValue("white", "gray.700")} p={4} borderRadius="md">
              <Image src={post.url ? `https://placehold.co/600x400` : `https://images.unsplash.com/photo-1671726203449-34e89df45211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5fGVufDB8fHx8MTcwOTA2MjMwMnww&ixlib=rb-4.0.3&q=80&w=1080`} alt={post.title} borderRadius="md" />
              <Text fontSize="lg" fontWeight="bold" mt={2}>
                {post.title}
              </Text>
              <Stack direction="row" justifyContent="space-between" mt={2}>
                <Text fontSize="sm">{new Date(post.time * 1000).toLocaleDateString()}</Text>
                <Button onClick={() => handleLike(post.id)} leftIcon={<FaHeart />} colorScheme={likes[post.id] ? "red" : "gray"}>
                  {likes[post.id] ? "Liked" : "Like"}
                </Button>
              </Stack>
            </Flex>
          ))}
        </VStack>
        <Box bg="#005ce6" color="white" p={4} mt={4} borderRadius="md">
          <Heading size="md">Join our Newsletter</Heading>
          <Text>Get the latest news delivered to your inbox.</Text>
          <Stack direction="row" mt={4}>
            <Input placeholder="Your email" />
            <Button colorScheme="blue">Sign Up</Button>
          </Stack>
        </Box>
        <Flex justifyContent="space-between" alignItems="center" bg="gray.800" p={4} borderRadius="md" mt={4}>
          <Text color="white">Created by 🤖 and proud of it!</Text>
          <Text color="white">© {currentYear} Spectactulr News. All rights reserved.</Text>
        </Flex>
        <Box p={4}>
          <Text textAlign="center">We use cookies to ensure you get the best experience on our website.</Text>
          <Button mt={4} mx="auto" display="block" bg="#005ce6">
            Accept Cookies
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
