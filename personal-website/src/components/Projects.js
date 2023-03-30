import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
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
            naturalSlideHeight={100}
            naturalSlideWidth={50}
            visibleSlides={1}
            totalSlides={9}
            hasMasterSpinner
          >
            <Slider>
              <Slide index={0}>
                <Image src="IRON - Login.jpg" />
              </Slide>
              <Slide index={1}>
                <Image src="IRON - Homepage.jpg" />
              </Slide>
              <Slide index={2}>
                <Image src="IRON - Start session.jpg" />
              </Slide>
              <Slide index={3}>
                <Image src="IRON - B autocomplete.jpg" />
              </Slide>
              <Slide index={4}>
                <Image src="IRON - Lat autocomplete.jpg" />
              </Slide>
              <Slide index={5}>
                <Image src="IRON - Bench press log.jpg" />
              </Slide>
              <Slide index={6}>
                <Image src="IRON - Graphs.jpg" />
              </Slide>
              <Slide index={7}>
                <Image src="IRON - Personal Records.jpg" />
              </Slide>
              <Slide index={8}>
                <Image src="IRON - Workout history.jpg" />
              </Slide>
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
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
