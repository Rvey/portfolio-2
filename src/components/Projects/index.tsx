import ProjectCard from "../Cards";

interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => {
  return (
    <div className=" my-20 h-screen">
      <div className="text-left mb-10 ml-[15em]">
          <h2 className="text-5xl font-bold font-heading text-gray-300">
            <span className="border-b-4 border-yellow-300 py-3">Proj</span>ects
          </h2>
        </div>
      <div className=" mt-24 flex w-full gap-5 justify-center items-center flex-wrap">
        <ProjectCard title="Project one" desc="project description ..." />
        <ProjectCard title="Project two" desc="project description ..." />
        <ProjectCard title="Project three" desc="project description ..." />
        <ProjectCard title="Project four" desc="project description ..." />
      </div>
    </div>
  );
};

export default Project;
