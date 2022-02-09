interface ProjectCardProps {
    title: string;
    desc: string;
}
 
const ProjectCard: React.FC<ProjectCardProps> = ({title , desc}) => {
    return ( 
        <div className="block p-6 w-[27em] h-[18em] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
      </div>
     );
}
 
export default ProjectCard;