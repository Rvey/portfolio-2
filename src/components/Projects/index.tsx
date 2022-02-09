import ProjectCard from "../Cards";

interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => {
  return (
    <div className="py-15 h-screen">
      <h1 className="font-bold text-white text-center text-5xl pt-20">
        Projects
      </h1>
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
