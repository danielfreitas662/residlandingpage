function FullVideo({ file }: { file: string }) {
  return (
    <div style={{ width: '100%', overflow: 'hidden', display: 'block', height: 460 }}>
      <video autoPlay loop width="100%">
        <source src={file} />
      </video>
    </div>
  );
}
export default FullVideo;
