
const PromoBanner = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
          🎉 Flash Sale - 70% Off!
        </h2>
        <p className="text-base md:text-xl text-white mb-4 md:mb-6">Limited time offer on selected items</p>
        <button className="bg-white text-orange-600 px-6 py-2 md:px-8 md:py-3 rounded-full font-bold hover:bg-gray-100 transition transform hover:scale-105 text-sm md:text-base">
          Shop Sale
        </button>
      </div>
    </section>
  );
};
export default PromoBanner;
