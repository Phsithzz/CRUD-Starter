import { useState, useEffect } from "react";
import { getData, create, remove } from "../function/product";
import { Link } from "react-router-dom";

const FormProduct = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ name: "", detail: "", price: "" });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getData()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    create(form)
      .then(() => {
        setForm({ name: "", detail: "", price: "" }); // reset form
        loadData();
      })
      .catch((err) => console.log(err));
  };

  const handleRemove = (id) => {
    remove(id)
      .then(() => loadData())
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-10">
      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Add Product
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
          Submit
        </button>
      </form>

      {/* Table Section */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
        <table className="w-full border-collapse text-left">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Detail</th>
              <th className="p-3">Price</th>
              <th className="p-3 text-center">Edit</th>
              <th className="p-3 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.detail}</td>
                <td className="p-3">{item.price}</td>
                <td className="p-3 text-center">
                  <Link to={"edit/" + item._id}>
                    <button className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                      EDIT
                    </button>
                  </Link>
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
            {!data.length && (
              <tr>
                <td colSpan="6" className="p-3 text-center text-gray-500">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormProduct;
