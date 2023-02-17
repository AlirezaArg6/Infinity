import { useFormik } from "formik";
import React from "react";
import { Input } from "../components/common/Input";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Topbar } from "../components/Topbar";
import * as Yup from "yup";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string()
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

const onSubmit = (values) => {
  console.log(values);
};

export const Login = () => {
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
          {/* groups */}
          <div className="space-y-4">
            {/* group 1 */}
            <Input
              formik={formik}
              label="نام کاربری"
              id="username"
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
