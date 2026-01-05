import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password && formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) setSubmitted(true);
    else setSubmitted(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition duration-300 hover:scale-105"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Register</h2>

        {/* Name Field */}
        <div className="relative mb-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            className={`peer w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-600 peer-focus:text-sm">
            Name
          </label>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="relative mb-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            className={`peer w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-600 peer-focus:text-sm">
            Email
          </label>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder=" "
            className={`peer w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-600 peer-focus:text-sm">
            Password
          </label>
          <div
            className="absolute right-4 top-4 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Confirm Password Field */}
        <div className="relative mb-6">
          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder=" "
            className={`peer w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
          />
          <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-600 peer-focus:text-sm">
            Confirm Password
          </label>
          <div
            className="absolute right-4 top-4 cursor-pointer text-gray-500"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <HiEyeOff /> : <HiEye />}
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl hover:from-purple-600 hover:to-blue-500 transition transform hover:scale-105 shadow-lg font-semibold"
        >
          Register
        </button>

        {submitted && (
          <p className="mt-5 text-green-600 font-semibold text-center animate-pulse">
            Registration Successful!
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
