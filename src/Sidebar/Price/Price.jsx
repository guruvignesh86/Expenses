import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={1000}
          title="RS500 - 1000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={2000}
          title="RS 1000 - RS2000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={3000}
          title="RS2000 - RS3000"
          name="test2"
        />

       
        <Input
          handleChange={handleChange}
          value={4000}
          title="4000-5000"
          name="test2"
        />
         <Input
          handleChange={handleChange}
          value={8000}
          title="MORE THAN 4000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
