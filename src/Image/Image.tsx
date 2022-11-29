type ImageProps = {
  isError: boolean;
  isLoading: boolean;
  src: string;
};

const Image = ({ isError, isLoading, src }: ImageProps) => {
  return (
    <>
      {isError && <div>❌</div>}
      {isLoading ? <div>⌛</div> : <img src={src} style={{ width: "100%" }} />}
    </>
  );
};

export { Image };
