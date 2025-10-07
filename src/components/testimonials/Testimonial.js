import { Star } from "lucide-react";

const Testimonial = ({ name, photo, review, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${photo} mr-4`}
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">"{review}"</p>
    </div>
  );
};

export default Testimonial;
