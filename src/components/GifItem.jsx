import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

export const GifItem = ({ title, url }) => {
  const copyUrl = () => {
    toast.success("Url copiado!");
  };

  return (
    <>
      <div className="col align-self-center my-3 animate__animated animate__fadeIn animate__slow">
        <CopyToClipboard text={url}>
          <img
            onClick={() => copyUrl()}
            className="card-img-top rounded-img"
            style={{ width: 320, cursor: "pointer" }}
            src={url}
            alt={title}
          />
        </CopyToClipboard>
      </div>

      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
};
