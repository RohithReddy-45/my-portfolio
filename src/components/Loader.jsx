function Loader() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex gap-2">
        <div className="h-5 w-5 animate-pulse rounded-full bg-blue-600"></div>
        <div className="h-5 w-5 animate-pulse rounded-full bg-blue-600"></div>
        <div className="h-5 w-5 animate-pulse rounded-full bg-blue-600"></div>
      </div>
    </div>
  );
}

export default Loader;
