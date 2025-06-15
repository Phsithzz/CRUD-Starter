import { useState, useEffect } from "react";

//axios
import { getData, create, remove } from "../function/product";
//react-router-dom
import { Link } from "react-router-dom";

const FormProduct = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getData()
      .then((res) => {
        setData(res.data);
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

    create(form)
      .then((res) => {
        loadData();
      })
      .catch((err) => console.log(err));
  };

  const handleRemove = async (id) => {
    remove(id)
      .then((res) => {
        loadData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center gap-6">
      <form
        onSubmit={handleSubmit}
        className="flex w-90 flex-col gap-6 rounded-2xl bg-white shadow-2xl"
      >
        <h2 className="text-center font-bold">Form Product</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label htmlFor="detail">Detail</label>
          <input
            type="text"
            placeholder="Enter Detail"
            name="detail"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            placeholder="Enter Price"
            name="price"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="">
          <button
            onSubmit={handleSubmit}
            type="submit"
            className="h-14 w-20 rounded-xl bg-green-400 text-xl font-semibold text-white hover:bg-green-600 active:bg-green-800"
          >
            Submit
          </button>
        </div>
      </form>

      <table className="flex h-100 w-90 flex-col gap-4 rounded-xl  bg-white">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Detail</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.detail}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link to={"edit/" + item._id}>
                      <button
                        type="button"
                        className="w-14 rounded-xl bg-green-400 font-semibold text-white hover:bg-green-600 active:bg-green-800"
                      >
                        EDIT
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleRemove(item._id)}
                      type="button"
                      className="w-14 rounded-xl bg-red-400 font-semibold text-white hover:bg-red-600 active:bg-red-800"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default FormProduct;
