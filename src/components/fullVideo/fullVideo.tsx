function FullVideo({
  file,
  type,
  controls = false,
  muted = true,
  height = 460,
}: {
  file: string;
  type: string;
  controls?: boolean;
  muted?: boolean;
  height?: number;
}) {
  return (
    <div style={{ width: '100%', overflow: 'hidden', display: 'block', height: height }}>
      <video
        autoPlay
        loop
        width="100%"
        height={height}
        preload="auto"
        style={{ objectFit: 'cover' }}
        muted={muted}
        playsInline
        controls={controls}
      >
        <source src={file} type={`video/${type}`} />
      </video>
    </div>
  );
}
export default FullVideo;
