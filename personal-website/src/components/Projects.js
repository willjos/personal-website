import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useState } from "react";
import { ironImageDescriptions } from "./ironImageDescriptions";

export default function Projects() {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  const handleSlideChange = (action) => {
    let newSlideIndex = selectedSlideIndex;
    if (action === "Next") {
      newSlideIndex += 1;
    } else if (action === "Back") {
      newSlideIndex -= 1;
    }
    setSelectedSlideIndex(newSlideIndex);
  };

  return (
    <div className="projects-wrapper p-5 mb-2 mx-2 bg-green text-white">
      <p className="text-2xl mb-1 font-bold"> Projects </p>
      <hr className="my-2" />
      <div className="flex justify-between">
        <div className="pr-4">
          <p className="text-lg font-semibold my-1">
            IRON Workout Tracker App (Personal Project)
          </p>
          <p>
            React Native application where users can create custom workouts.
            Following workout creation, a session can be started, logging the
            weight and reps of each set for a given exercise. Analytics can be
            viewed, including workout history, personal records, and progress
            graphs.
          </p>
          <div className="flex justify-around mt-4">
            <CarouselProvider
              className="h-2/5 w-2/5 mr-3"
              naturalSlideHeight={200}
              naturalSlideWidth={100}
              visibleSlides={1}
              totalSlides={9}
              hasMasterSpinner
            >
              <Slider className="">
                <Slide index={0}>
                  <ImageWithZoom src="IRON - Login.jpg" />
                </Slide>
                <Slide index={1}>
                  <ImageWithZoom src="IRON - Homepage.jpg" />
                </Slide>
                <Slide index={2}>
                  <ImageWithZoom src="IRON - Start session.jpg" />
                </Slide>
                <Slide index={3}>
                  <ImageWithZoom src="IRON - Bench press log.jpg" />
                </Slide>
                <Slide index={4}>
                  <ImageWithZoom src="IRON - B autocomplete.jpg" />
                </Slide>
                <Slide index={5}>
                  <ImageWithZoom src="IRON - Lat autocomplete.jpg" />
                </Slide>
                <Slide index={6}>
                  <ImageWithZoom src="IRON - Graphs.jpg" />
                </Slide>
                <Slide index={7}>
                  <ImageWithZoom src="IRON - Personal Records.jpg" />
                </Slide>
                <Slide index={8}>
                  <ImageWithZoom src="IRON - Workout history.jpg" />
                </Slide>
              </Slider>
              <ButtonBack
                className="my-2 p-1 bg-blue"
                onClick={() => handleSlideChange("Back")}
              >
                Back
              </ButtonBack>
              <ButtonNext
                className="my-2 p-1 bg-blue"
                onClick={() => handleSlideChange("Next")}
              >
                Next
              </ButtonNext>
            </CarouselProvider>
            <div className="w-3/5 text-lg text-left ml-3 p-2">
              <p className="font-semibold">
                {ironImageDescriptions[selectedSlideIndex].title}
              </p>
              <p className="mt-1">
                {ironImageDescriptions[selectedSlideIndex].description}
              </p>
            </div>
          </div>
        </div>
        <div className="pl-4">
          <p className="text-lg font-semibold my-1">
            AR Business Cards App (Group Project)
          </p>
          <p>
            React Native application where users can create and edit custom
            business cards. These can then be shown to other users via QR codes,
            which can be scanned on the app to display the business card in AR.
            Cards are collected when scanned and can be viewed again at a later
            point.
          </p>
          <img
            className="mt-4 w-96 h-96"
            src="AR Business Cards.jpeg"
            alt="AR Business Cards AR card"
          />
        </div>
      </div>
    </div>
  );
}
