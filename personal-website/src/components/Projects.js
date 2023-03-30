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

export default function Projects() {
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
          <CarouselProvider
            className="mt-4"
            naturalSlideHeight={19.5}
            naturalSlideWidth={9}
            visibleSlides={1}
            totalSlides={9}
            hasMasterSpinner
          >
            <Slider className="w-1/3">
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
                <ImageWithZoom src="IRON - B autocomplete.jpg" />
              </Slide>
              <Slide index={4}>
                <ImageWithZoom src="IRON - Lat autocomplete.jpg" />
              </Slide>
              <Slide index={5}>
                <ImageWithZoom src="IRON - Bench press log.jpg" />
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
            <ButtonBack className="my-2 mr-2 p-1 bg-blue">Back</ButtonBack>
            <ButtonNext className="my-2 ml-32 p-1 bg-blue">Next</ButtonNext>
          </CarouselProvider>
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
