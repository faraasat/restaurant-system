import ImgLister from "../components/img-list/img-lister";

const Gallery = () => {
  return (
    <div
      className="gallery"
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "rgb(68, 175, 252)",
          fontFamily: "Lemon, cursive",
          marginTop: 35,
          marginBottom: 5,
        }}
      >
        Gallery
      </h1>
      <ImgLister />
    </div>
  );
};

export default Gallery;
