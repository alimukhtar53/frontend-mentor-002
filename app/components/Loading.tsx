import MoonLoader from "react-spinners/MoonLoader";

function Loading() {
  return (
    <MoonLoader
      color={"hsl(179, 100%, 13%)"}
      size={35}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Loading;
