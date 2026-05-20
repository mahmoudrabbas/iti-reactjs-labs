import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const naviage = useNavigate();

    const validate = () => {
        let newErrors = {};

        if (!form.name) newErrors.name = 'Name is required';
        if (!form.email) newErrors.email = 'Email is required';
        if (!form.password) newErrors.password = 'Password is required';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Register Data:', form);
        }

        // naviage('/');
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '400px' }}>
            <h2 className="mb-4 text-center">Register</h2>

            <form onSubmit={handleSubmit}>
                {/* Name */}
                <input
                    type="text"
                    name="name"
                    className="form-control mb-2"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                />
                {errors.name && (
                    <small className="text-danger">{errors.name}</small>
                )}

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    className="form-control mt-3 mb-2"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                )}

                {/* Password */}
                <input
                    type="password"
                    name="password"
                    className="form-control mt-3 mb-2"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                />
                {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                )}

                <button className="btn btn-success w-100 mt-3">Register</button>
            </form>
        </div>
    );
}

export default Register;
