export default function CenterPanel() {
  return (
    <div
      className='
      w-[360px]
      rounded-2xl
      bg-white
      p-8
      text-center
      shadow-[0_20px_50px_rgba(0,0,0,0.08)]
    '
    >
      <h2 className='mb-4 text-xl font-semibold'>Robotics Data Diversity</h2>

      <p className='mb-4 text-sm leading-relaxed text-gray-700'>
        This panel describes distributed robotic task clusters operating in
        parallel. Each surrounding visual unit represents an independent data
        stream.
      </p>

      <p className='text-sm leading-relaxed text-gray-700'>
        The architecture emphasizes clarity, balance, and modular
        intelligence—allowing humans to understand complex robotic behavior
        visually.
      </p>
    </div>
  );
}
