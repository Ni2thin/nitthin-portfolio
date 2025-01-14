import { IconCloudDemo } from "./ui/IconCloud";
import TechStackButton from "./ui/techstack-button";

const Skills = () => {
  return (
    <div className="mx-8 overflow-hidden">
      <div className="max-w-5xl mx-auto my-2 px-0 sm:px-6 py-6 border-neutral-600 border-2 rounded-lg flex gap-0 sm:gap-4 items-center bg-foreground sm:flex-row flex-col">
        <div className="p-4 w-11/12">
          <div className="lg:text-4xl text-3xl font-extrabold mb-8 font-recoleta">
            Skills
          </div>
          <div className="flex gap-2 flex-wrap">
            <TechStackButton name="Python" icon="bg-cyan-600" />
            <TechStackButton name="OpenCV" icon="bg-blue-400" />
            <TechStackButton name="TensorFlow" icon="bg-orange-300" />
            <TechStackButton name="PyTorch" icon="bg-red-400" />
            <TechStackButton name="React" icon="bg-cyan-400" />
            <TechStackButton name="Next.js" icon="bg-green-400" />
            <TechStackButton name="JavaScript" icon="bg-yellow-300" />
            <TechStackButton name="TypeScript" icon="bg-rose-400" />
            <TechStackButton name="Node.js" icon="bg-orange-400" />
            <TechStackButton name="Docker" icon="bg-blue-500" />
            <TechStackButton name="Git" icon="bg-lime-200" />
            <TechStackButton name="Tailwind CSS" icon="bg-lime-200" />
            <TechStackButton name="PostgreSQL" icon="bg-teal-500" />
            <TechStackButton name="MongoDB" icon="bg-green-500" />
            <TechStackButton name="Prisma" icon="bg-pink-500" />
            <TechStackButton name="C" icon="bg-violet-500" />
            <TechStackButton name="C++" icon="bg-red-500" />
            <TechStackButton name="Framer Motion" icon="bg-fuchsia-400" />
            <TechStackButton name="MediaPipe" icon="bg-yellow-400" />
          </div>
        </div>

        <div>
          <IconCloudDemo />
        </div>
      </div>
    </div>
  );
};

export default Skills;
