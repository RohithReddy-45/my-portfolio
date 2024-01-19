function Loader() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex gap-2">
        <div className="animate-loader animation-delay-0 size-[10vmin] origin-[50%_100%] bg-[url('../../assets/bunny.png')] bg-contain bg-center bg-no-repeat"></div>
        <div className="animate-loader animation-delay-75 size-[10vmin] origin-[50%_100%] bg-[url('../../assets/bunny.png')] bg-contain bg-center bg-no-repeat"></div>
        <div className="animate-loader animation-delay-100 size-[10vmin] origin-[50%_100%] bg-[url('../../assets/bunny.png')] bg-contain bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
}

export default Loader;
