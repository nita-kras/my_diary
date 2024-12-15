import React from "react";
import CarouselComponent from "./CarouselComponent";
import ErrorBoundary from "./ErrorBoundary"; // Import ErrorBoundary

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Image Carousel</h1>
      <ErrorBoundary>
        <CarouselComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
