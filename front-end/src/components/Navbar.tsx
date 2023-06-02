import { Box, Heading, Stack, Flex } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Box bg={'gray.100'} position="fixed" h="100vh" w="250px" boxSizing='border-box' borderRight={'solid 2px #DAE7F3'}>
            <Stack align="flex-start" spacing="4">
                <Heading fontWeight="bold" w={"100%"} textAlign={'center'} bgColor={'white'} p={'1rem 0'} color={"blue.400"} borderBottom={'solid 2px #DAE7F3'}>Puygo</Heading>
                {isAuthenticated ? (
                    <Flex w={'100%'} flexDir={'column'}>
                        <Link
                            to="/graphics"
                        >
                            Graphics
                        </Link>

                        <Link
                            to="/statistics"
                        >
                            Statistics
                        </Link>

                        <Link
                            to="/historic"
                        >
                            Historic
                        </Link>

                        <Link
                            to="/"
                        >
                            Home
                        </Link>

                        <Link
                            to="/profile"
                        >
                            Profile
                        </Link>

                        <LogoutButton />
                    </Flex>
                ) : (
                    <Flex w={'100%'} flexDir={'column'}>
                            <Link to="/">Home</Link>
                        
                        <LoginButton />
                    </Flex>
                )}
            </Stack>
        </Box>
    );
};

export default Navbar;