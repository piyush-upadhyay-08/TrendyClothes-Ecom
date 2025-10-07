
const PromoBanner = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          🎉 Flash Sale - 70% Off!
        </h2>
        <p className="text-xl text-white mb-6">
          Limited time offer on selected items
        </p>
        <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition transform hover:scale-105">
          Shop Sale
        </button>
      </div>
    </section>
  );
};
export default PromoBanner;
