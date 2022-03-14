import React, { InputHTMLAttributes, memo } from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
}
const Input: React.FC<Props> = ({ touched, error, className, placeholder, id, ...rest }) => {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        id={id}
        {...rest}
        required
        className={
          "relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" +
          className
        }
        placeholder={placeholder}
      />
      {touched && <div>{error}</div>}
    </div>
  );
};
export default memo(Input);
