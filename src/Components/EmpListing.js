import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import avator1 from "../Assets/images/avator1.jpg";

const EmpListing = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/employee/items")
  //     .then((response) => response.json())
  //     .then((data) => setItems(data));
  // }, []);

  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/employee/imageUrl")
  //     .then((response) => response.json())
  //     .then((data) => setImages(data));
  // }, []);

  const LoadDetail = (id) => {
    navigate("/employee/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };
  const RemoveFunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="employee/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Profile Picture</td>
                <td>Full Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Employee Position</td>
                <td>Action</td>
              </tr>
            </thead>
            <thead>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <img src={item.imageUrl} alt="My Img" />
                    <td>{item.fullname}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.position}</td>
                    <td>
                      <a
                        onClick={() => LoadEdit(item.id)}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => RemoveFunction(item.id)}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => LoadDetail(item.id)}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
