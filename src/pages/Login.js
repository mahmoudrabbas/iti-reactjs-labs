import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
    // console.log(props);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const naviage = useNavigate();
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!form.email) newErrors.email = 'Email is required';
        if (!form.password) newErrors.password = 'Password is required';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Login Data:', form);
        }

        // naviage('/home');
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '400px' }}>
            <h2 className="mb-4 text-center">Login</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    className="form-control mb-2"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                )}

                <div className="input-group mt-3 mb-2">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        show/hide
                    </button>
                </div>

                {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                )}

                <button className="btn btn-primary w-100 mt-3">Login</button>
            </form>
        </div>
    );
}

export default Login;
