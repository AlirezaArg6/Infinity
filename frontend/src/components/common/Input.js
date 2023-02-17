import React from "react";

export const Input = ({ type, label, formik, id }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
        {formik.errors[id] && formik.touched[id] && (
          <span className="text-red-600 text-xs">{formik.errors[id]}</span>
        )}
      </div>
      <input
        type={type}
        id={id}
        className="block outline-none px-4 py-2 rounded mt-2 w-full"
        {...formik.getFieldProps(id)}
      />
    </div>
  );
};
