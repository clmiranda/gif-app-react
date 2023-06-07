import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {isLoading && <h2 className="my-md-5">Cargando...</h2>}
      <h2 className="text-center mt-3 mt-md-5">
        {category
          .toLowerCase()
          .split(" ")
          .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(" ")}
      </h2>
      <div className="row my-3">
        <div className="col-md-10 offset-md-1">
          <div className="card-group text-center">
            {images.map((img) => (
              <GifItem key={img.id} {...img} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
