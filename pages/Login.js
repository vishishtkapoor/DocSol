import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { BsEyeFill } from "react-icons/bs";
import { AiFillEyeInvisible } from "react-icons/ai";

function Login() {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleChange = (evt) => {
    const value = evt.target.value;

    setCredential({
      ...credential,
      [evt.target.name]: value,
    });
  };

  const handleLogin = () => {
    if (credential.email === "" || credential.password === "") {
      // Display error message for empty email or password
      setErrors(["Please fill in all the fields"]);
    } else {
      // Perform login logic
      // Example: Send login request to server, handle success and error cases
      // If login is successful, navigate to the main page
      router.push("/artists"); // Replace "/main" with the actual path to your main 
    }
  };

  return (
    <section className={`${styles["em-signup-section"]} z-[100] `}>
      <div className={`${styles["em-row"]} `}>
        <div className={styles["col-4"]}>
          <div className={styles["em-signup"]}>
            <h3
              className={`${styles["em-welcome"]} text-3xl flex justify-start items-center font-  `}
            >
              Admin Panel Login <i className={styles["em-eyeglass"]}></i>
            </h3>
            <div className="flex justify-start text-lg text-gray-400">
              Enter your email address and password to access your account.
            </div>
            <div className={`${styles["em-form"]} relative`}>
              <div className={`${styles["em-form-group"]}`}>
                <label htmlFor="email">Email address</label>
                <div className={`${styles["em-input"]}`}>
                  <input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    className={`${styles["form-control"]} w-[100%] flex justify-start border mt-1`}
                    id="email"
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>
              <div className={styles["em-form-group"]}>
                <label htmlFor="password">Password</label>
                <div className={styles["em-input"]}>
                  <input
                    onChange={handleChange}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className={`${styles["form-control"]} ${styles["em-hasicon"]}  w-[100%] flex justify-start border mt-1`}
                    id="password"
                    placeholder="Enter password"
                  />
                  {!showPassword ? (
                    <i onClick={() => setShowPassword(!showPassword)}>
                      {" "}
                      <BsEyeFill />{" "}
                    </i>
                  ) : (
                    <i onClick={() => setShowPassword(!showPassword)}>
                      {" "}
                      <AiFillEyeInvisible />{" "}
                    </i>
                  )}
                </div>
                {/* <Link href="/forget-password">Forgot Password?</Link> */}
              </div>
              {errors.length > 0 && (
                <div className="text-red-500">{errors[0]}</div>
              )}
              <div>
                <button onClick={handleLogin} className={styles["em-sign-in-btn"]}>
                  Log In
                </button>
              </div>
              {/* <span className={styles["em-account-login"]}>
                Don’t have an account?{" "}
                <Link href="/signup" className={styles["em-Sign-up-btn"]}>
                  {" "}
                  Sign up <i className={styles["em-infinity"]}></i>{" "}
                </Link>
              </span> */}
            </div>
          </div>
        </div>
        <div className={styles["col-8"]}>
          <div className={styles["em-info"]}>
            {/* <figure> */}
            {/* <Link to="/" className="nav-link"><img src={ImagePath.icLogoWithName} className="img-fluid" alt="" /></Link></figure> */}
            {/* <p>Emergence Music Distribution was created first and foremost for artists to get noticed and discovered internationally. After observing a lack of services other digital distributions were offering, we decided to offer a revolutionary plan that will disrupt and forever change the music industry. At Emergence Music Distribution, each artist will be represented equally and will access the same promotional service as they would with a major label.</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;