import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sachin Soni",
      photo: "from-pink-400 to-pink-600",
      review: "Amazing quality and fast shipping! Will definitely shop again.",
      rating: 5,
    },
    {
      name: "Parth Sharma",
      photo: "from-blue-400 to-blue-600",
      review:
        "Love the variety and the prices are unbeatable. Highly recommend!",
      rating: 5,
    },
    {
      name: "Aditiya Singh",
      photo: "from-purple-400 to-purple-600",
      review: "Great customer service and the clothes fit perfectly!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
