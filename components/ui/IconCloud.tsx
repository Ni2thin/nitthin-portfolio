import IconCloud from "./icon-cloud";

const slugs = [
  "python",
  "opencv",
  "tensorflow",
  "pytorch",
  "mediapipe",
  "scikit-learn",
  "docker",
  "git",
  "numpy",
  "jupyter",
  "googlecolab",
  "langchain",
  "n8n",
  "fastapi",
  "flask",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-xl items-center justify-center overflow-hidden rounded-lg px-8 min-w-64 sm:pb-0 pb-4">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
