import TaskCluster from "./TaskCluster";
import CenterPanel from "./CenterPanel";
import sampleClusters from "./data.json";

export default function App() {
  const midpoint = Math.ceil(sampleClusters.length / 2);

  const left = sampleClusters.slice(0, midpoint);
  const right = sampleClusters.slice(midpoint);

  // return (
  //   <video
  //     src='/videos/office_robots/dual_arm/fashion/episode_000000_wrist1.mp4'
  //     controls
  //     autoPlay={false}
  //     muted
  //     loop={false}
  //     style={{ width: "100%", maxWidth: "600px" }}
  //   />
  // );
  return (
    <div
      className='
    grid
    grid-cols-[1fr_420px_1fr]
    items-center
    gap-6
    p-6
  '
    >
      <div className='grid grid-cols-2 gap-6'>
        {left.map((cluster, index) => (
          <TaskCluster
            key={index}
            path={cluster.filePath}
            title={cluster.title}
            videos={cluster.videos}
          />
        ))}
      </div>
      <div className='flex justify-center'>
        <CenterPanel />
      </div>

      <div className='grid grid-cols-2 gap-6'>
        {right.map((cluster, index) => (
          <TaskCluster
            key={index}
            title={cluster.title}
            videos={cluster.videos}
          />
        ))}
      </div>
    </div>
  );
}
