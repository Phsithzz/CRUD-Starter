import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { read, update } from "../function/product";

const FormEditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", detail: "", price: "" });

  useEffect(() => {
    loadData(params.id);
  }, [params.id]);

  const loadData = (id) => {
    read(id)
      .then((res) => setForm(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update(params.id, form)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Edit Product
        </h2>

        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="text"
          placeholder="Enter Detail"
          name="detail"
          value={form.detail}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="text"
          placeholder="Enter Price"
          name="price"
          value={form.price}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          type="submit"
          className="w-full h-12 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 active:bg-green-700 transition"
        >
          Save Changes
        </button>

        <Link
          to="/"
          className="text-center text-blue-500 hover:underline text-sm"
        >
          ← Back to Product List
        </Link>
      </form>
    </div>
  );
};

export default FormEditProduct;
