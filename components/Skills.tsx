import { IconCloudDemo } from "./ui/IconCloud";
import TechStackButton from "./ui/techstack-button";
import ScrollFadeIn from "./ui/ScrollFadeIn";

const Skills = () => {
  return (
    <div className="mx-8 overflow-hidden">
      <ScrollFadeIn>
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
              <TechStackButton name="MediaPipe" icon="bg-yellow-400" />
              <TechStackButton name="Scikit-learn" icon="bg-orange-500" />
              <TechStackButton name="Docker" icon="bg-blue-500" />
              <TechStackButton name="Git" icon="bg-lime-200" />
              <TechStackButton name="NumPy" icon="bg-green-500" />
              <TechStackButton name="Jupyter Notebook" icon="bg-purple-400" />
              <TechStackButton name="Google Colab" icon="bg-yellow-500" />
              <TechStackButton name="Langchain" icon="bg-blue-600" />
              <TechStackButton name="n8n" icon="bg-green-600" />
              <TechStackButton name="FastAPI" icon="bg-teal-400" />
              <TechStackButton name="Flask" icon="bg-gray-400" />
            </div>
          </div>

          <div>
            <IconCloudDemo />
          </div>
        </div>
      </ScrollFadeIn>
    </div>
  );
};

export default Skills;
