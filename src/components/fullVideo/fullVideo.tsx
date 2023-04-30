function FullVideo({ src }: { src: string }) {
  return (
    <div style={{ width: '100%', overflow: 'hidden', display: 'block', height: 460 }}>
      <video autoPlay loop width="100%">
        <source src={src} />
      </video>
    </div>
  );
}
export default FullVideo;
