export default function Projects() {
  return (
    <div className="projects-wrapper p-5 mb-2 mx-2 bg-green text-white">
      <p className="text-2xl mb-1 font-bold"> Projects </p>
      <hr className="my-2" />
      <p>Augmented Reality Business Cards</p>
      <p>
        Mobile application where users can create and edit custom business
        cards. These can then be shown to other users via QR codes, which can be
        scanned on the app to display the business card in AR. Cards are
        collected when scanned and can be viewed again at a later point.
      </p>
      <p>IRON Workout Tracker App</p>
      <p>
        Mobile application where users can create custom workouts. Following
        workout creation, a session can be started, logging the weight and reps
        of each set for a given exercise. Analytics can be viewed, including
        workout history, personal records, and progress graphs.
      </p>
    </div>
  );
}
