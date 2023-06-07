export const GifItem = ({ title, url }) => {
  return (
    <div className="col align-self-center my-3 animate__animated animate__fadeIn animate__slow">
      <img
        className="card-img-top rounded-img"
        style={{ width: 320 }}
        src={url}
        alt={title}
      />
    </div>
  );
};
