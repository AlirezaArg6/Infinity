import { useFormik } from "formik";
import React, { useContext } from "react";
import { Input } from "../components/common/Input";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Topbar } from "../components/Topbar";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import swal from "sweetalert";

const initialValues = {
  identifier: "",
  password: "",
};

const validationSchema = Yup.object({
  identifier: Yup.string()
    .required("پر کردن این فیلد اجباری می باشد")
    .min(6, "حداقل کاراکتر برای نام کاربری  6 کاراکتر می باشد")
    .max(20, "حداکثر کاراکتر برای نام کاربری  20 کاراکتر می باشد"),

  password: Yup.string()
    .required("پر کردن این فیلد اجباری می باشد")
    .min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "رمز عبور باید حداقل شامل 8 کاراکتر, یک حرف بزرگ, یک حرف کوچک , یک عدد و یک کاراکتر خاص باشد"
    ),
});

export const Login = () => {
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (values) => {
    fetch(`http://localhost:4000/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      })
      .then((result) => {
        swal({
          title: "با موفقیت لاگین شدید",
          icon: "success",
          buttons: "ورود به پنل",
        }).then((value) => {
          navigate("/");
        });
        console.log(result);
        authContext.login({}, result.accessToken);
      })
      .catch((err) => {
        swal({
          title: "همچین کاربری وجود ندارد",
          icon: "error",
          buttons: "تلاش دوباره",
        });
      });
  };

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="section-container flex items-center justify-center mt-12 ">
        <form
          action=""
          className="border border-gray-400 p-8 rounded w-[450px]"
          onSubmit={formik.handleSubmit}
        >
          {/* title */}
          <h3 className="text-center  font-bold text-4xl mb-8 text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            ورود
          </h3>
          <span className="inline-block mb-6 text-sm text-blue-500">
            ثبت نام نکردی؟ <Link to={"/register"}>ثبت نام</Link>
          </span>
          {/* groups */}
          <div className="space-y-4">
            {/* group 1 */}
            <Input
              formik={formik}
              label="نام کاربری"
              id="identifier"
              type="text"
            />
            {/* group 2 */}
            <Input
              formik={formik}
              label="رمز عبور"
              id="password"
              type="password"
            />
          </div>
          <button
            type="submit"
            className="block bg-gradient-to-r from-cyan-500 to-blue-500 w-full text-white px-4 py-3 mt-10 rounded"
          >
            ورود
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};
