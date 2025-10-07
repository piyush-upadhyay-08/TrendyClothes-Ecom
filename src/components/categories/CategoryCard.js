

const CategoryCard = ({ name, image, link }) => {
  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transform transition hover:scale-105"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition" />

      <div className="relative z-10 h-64 flex items-center justify-center">
        <h3 className="text-3xl font-bold text-white">{name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
