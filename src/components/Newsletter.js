import { useState } from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email && email.includes("@")) {
      alert(`Subscribed with email: ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <Mail className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-sm md:text-base text-white mb-8 px-4">
          Get the latest updates on new products and exclusive offers!
        </p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 px-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg focus:outline-none text-gray-800 w-full"
          />
          <button
            onClick={handleSubmit}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition whitespace-nowrap w-full sm:w-auto"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
