export default function Links() {
  return (
    <div className="flex items-center">
      <div className="LinkedIn-link-tile p-2 h-16 w-16 m-2 bg-white hover:bg-grey">
        <a href="https://www.linkedin.com/in/will-simms-80b6481bb/">
          <img className="mt-1" src="/LI-In-Bug.png" alt="linkedin logo" />
        </a>
      </div>
      <div className="GitHub-link-tile p-2 h-16 w-16 m-2 bg-white  hover:bg-grey">
        <a href="https://github.com/willjos">
          <img src="/github-mark.png" alt="github logo" />
        </a>
      </div>
      <div className="CV-link-tile p-2 h-16 w-16 ml-2 mr-4 pt-3.5 bg-white  hover:bg-grey text-slate font-extrabold text-center text-3xl">
        <a href="Will Simms CV.pdf">CV</a>
      </div>
    </div>
  );
}
