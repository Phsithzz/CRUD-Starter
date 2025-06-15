import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

//function
import { read, update } from "../function/product";

const FormEditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    detail: "",
    price: "",
  });

  useEffect(() => {
    loadData(params.id);
  }, []);

  const loadData = async (id) => {
    read(id)
      .then((res) => {
        setForm(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    update(params.id, form)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex w-90 flex-col gap-6 rounded-xl bg-white shadow-2xl"
      >
        <h2 className="text-center font-bold">Form Edit Product</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={(e) => handleChange(e)}
            value={form.name}
          />
        </div>

        <div>
          <label htmlFor="detail">Detail</label>
          <input
            type="text"
            placeholder="Enter Detail"
            name="detail"
            onChange={(e) => handleChange(e)}
            value={form.detail}
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            placeholder="Enter Price"
            name="price"
            onChange={(e) => handleChange(e)}
            value={form.price}
          />
        </div>

        <div className="">
          <button
            type="submit"
            className="h-14 w-20 rounded-xl bg-green-400 text-xl font-semibold text-white hover:bg-green-600 active:bg-green-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEditProduct;
