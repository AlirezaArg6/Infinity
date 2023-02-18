import React, { useContext } from "react";
import { Topbar } from "../components/Topbar";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../components/common/Input";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("پر کردن این فیلد اجباری می باشد"),
  username: Yup.string()
    .required("پر کردن این فیلد اجباری می باشد")
    .min(6, "حداقل کاراکتر برای نام کاربری  6 کاراکتر می باشد")
    .max(20, "حداکثر کاراکتر برای نام کاربری  20 کاراکتر می باشد"),
  email: Yup.string()
    .required("پر کردن این فیلد اجباری می باشد")
    .email("یک ایمیل معتبر وارد کنید"),
  phone: Yup.string()
    .required("پر کردن این فیلد اجباری می باشد")
    .matches(
      /^(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}$/,
      "یک شماره ی معتبر وارد کنید"
    ),
  password: Yup.string()
    .required("پر کردن این فیلد اجباری می باشد")
    .min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "رمز عبور باید حداقل شامل 8 کاراکتر, یک حرف بزرگ, یک حرف کوچک , یک عدد و یک کاراکتر خاص باشد"
    ),
  confirmPassword: Yup.string()
    .required("پر کردن این فیلد اجباری می باشد")
    .oneOf([Yup.ref("password"), null], "رمز عبور ها باید یکسان باشند"),
});

export const Register = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    fetch("http://localhost:4000/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 403) {
          swal({
            title: "این شماره توسط ادمین بن شده است",
            icon: "error",
            buttons: "باشه",
          });
        } else {
          return res.json();
        }
      })
      .then((result) => {
        authContext.login(result.user, result.accessToken);
        swal({
          title: "با موفقیت ثبت نام شدید",
          icon: "success",
          buttons: "صفحه اصلی",
        }).then((res) => navigate("/"));
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
            ثبت نام
          </h3>
          <span className="inline-block mb-6 text-sm text-blue-500">
            ثبت نام کردی؟ <Link to={"/login"}>ورود</Link>
          </span>
          {/* groups */}
          <div className="space-y-4">
            {/* group 1 */}
            <Input
              formik={formik}
              label="نام و نام خانوادگی"
              id="name"
              type="text"
            />

            {/* group 2 */}
            <Input
              formik={formik}
              label="نام کاربری"
              id="username"
              type="text"
            />
            {/* group 3 */}
            <Input formik={formik} label="ایمیل" id="email" type="text" />
            {/* group 4 */}
            <Input formik={formik} label="موبایل" id="phone" type="text" />
            {/* group 5 */}
            <Input
              formik={formik}
              label="رمز عبور"
              id="password"
              type="password"
            />
            {/* group 6 */}
            <Input
              formik={formik}
              label="تکرار رمز عبور"
              id="confirmPassword"
              type="password"
            />
          </div>
          <button
            type="submit"
            className="block bg-gradient-to-r from-cyan-500 to-blue-500 w-full text-white px-4 py-3 mt-10 rounded"
          >
            ثبت نام
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};
