function FullVideo({ file }: { file: string }) {
  return (
    <div style={{ width: '100%', overflow: 'hidden', display: 'block', height: 460 }}>
      <video autoPlay loop width="100%" height={460} preload="auto" style={{ objectFit: 'cover' }}>
        <source src={file} />
      </video>
    </div>
  );
}
export default FullVideo;
