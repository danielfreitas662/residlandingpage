function FullVideo({ file, type }: { file: string; type: string }) {
  return (
    <div style={{ width: '100%', overflow: 'hidden', display: 'block', height: 460 }}>
      <video autoPlay loop width="100%" height={460} preload="auto" style={{ objectFit: 'cover' }} muted={false}>
        <source src={file} type={`video/${type}`} />
      </video>
    </div>
  );
}
export default FullVideo;
