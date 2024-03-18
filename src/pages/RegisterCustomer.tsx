import React, { useState } from "react";

interface RegisterNewCustomerFormState {
  name: string;
  dob: string;
  email: string;
  aadharnumber: string;
  registrationdate: string;
  assignedmobilenumber: string;
}

const RegisterCustomer: React.FC = () => {
  const [formData, setFormData] = useState<RegisterNewCustomerFormState>({
    name: "",
    dob: "",
    email: "",
    aadharnumber: "",
    registrationdate: "",
    assignedmobilenumber: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            required
            maxLength={20}
          />
          <br />
        </div>

        <div>
          <label htmlFor="dob">DOB</label>
          <br />
          <input
            type="date"
            name="dob"
            id="dob"
            onChange={handleChange}
            value={formData.dob}
            required
            maxLength={20}
          />
          <br />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            required
            maxLength={40}
          />
          <br />
        </div>

        <div>
          <label htmlFor="aadharnumber">Aadhar Number</label>
          <br />
          <input
            type="number"
            name="aadharnumber"
            id="aadharnumber"
            onChange={handleChange}
            value={formData.aadharnumber}
            required
            maxLength={12}
          />
          <br />
        </div>

        <div>
          <label htmlFor="registrationdate">Registration Date</label>
          <br />
          <input
            type="date"
            name="registrationdate"
            id="registrationdate"
            onChange={handleChange}
            value={formData.registrationdate}
            required
          />
          <br />
        </div>

        <div>
          <label htmlFor="assignedmobilenumber">Assigned Mobile Number</label>
          <br />
          <input
            type="number"
            name="assignedmobilenumber"
            id="assignedmobilenumber"
            onChange={handleChange}
            value={formData.assignedmobilenumber}
            required
            maxLength={10}
          />
          <br />
        </div>
        <br />
        <button>Register New Customer</button>
      </form>
    </div>
  );
};
export default RegisterCustomer;
