import React, { useState, useEffect } from "react";
import { Box, Text, ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      ".slider-container": {
        width: "300px",
        margin: "0 auto",
        overflow: "hidden",
      },
      ".slider-text": {
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
        height: "100px", // Adjust as needed
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #ccc",
        transition: "transform 0.5s ease-in-out",
      },
    },
  },
});

const slides = ["Hi", "Hello","by"];
const slideInterval = 2000;

function TextSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, slideInterval);

    return () => clearInterval(interval);
  }, []);

  const transformStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    // <ChakraProvider theme={theme}>
      <Box className="slider-container" mt="4" overflow="hidden">
        <Box className="slider-text" style={transformStyle}>
          {slides.map((slide, index) => (
            <Text key={index}>{slide}</Text>
          ))}
        </Box>
      </Box>
    // </ChakraProvider>
  );
}

export default TextSlider;
