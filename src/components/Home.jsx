import React from 'react'
import { Box, Container, Heading, Img, Stack, Text} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "./react-1.jpg"
import img2 from "./react-2.jpg"
import img3 from "./react-3.jpg"
import img4 from "./react-4.jpg"
import img5 from "./5.png"

const headingOptions= {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl",
}

const Home = () => {
  return (
    <Box>
      <MyCarousel/>
      <Container maxW={"container.xl"} p={16}>
            <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"} margin={"auto"}>Services</Heading>

            <Stack h={"full"} p={"4"} alignItems={"center"} direction={["column", "row"]}>
                <Img src={img5} filter={"hue-rotate(-130deg)"} h={["40","400"]}/>
                <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim tempora commodi esse! Officia sapiente sit impedit dolor fuga, ducimus doloremque nobis pariatur autem accusantium harum quibusdam aspernatur tempora consectetur? Obcaecati.
                    Fugit quos illo accusamus illum possimus ipsa facere eos, ab esse reiciendis rem unde asperiores ipsum! Sequi sapiente, pariatur autem reprehenderit maiores optio voluptas, nihil iusto ipsam, aliquam non cupiditate.
                    Eos, modi. Cumque, aperiam odit omnis corrupti quidem obcaecati? Quo libero repellendus unde labore assumenda voluptate praesentium adipisci, debitis architecto dolorem ut doloribus facere corrupti esse expedita id dicta officiis.
                    
                </Text>
            </Stack>
      </Container>
    </Box>
  );
  };

  const MyCarousel = () =>{
    return(
        <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>


        <Box w={'full'} h={'100vh'}>

            <Img src={img1}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Learn with me !</Heading>

        </Box>

        <Box w={'full'} h={'100vh'}>

            <Img src={img2}/>
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>React Lectures</Heading>

        </Box>

        <Box w={'full'} h={'100vh'}>

            <Img src={img3}/>
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Projecs</Heading>

        </Box>

        <Box w={'full'} h={'100vh'}>

            <Img src={img4}/>
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Designs</Heading>

        </Box>

    </Carousel>
    );
    
  }


export default Home
