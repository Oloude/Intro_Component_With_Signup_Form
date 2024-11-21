import React from "react";
import errorIcon from "../assets/icon-error.svg";
import { FieldError } from "react-hook-form";

type InputProps = {
  type: string;
  placeholder: string;
  error: FieldError | undefined;
  errorMessage: string | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, error, errorMessage, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <div
          className={`${
            error ? "border-red" : "border-gray"
          } flex gap-2 justify-between items-center p-3 border rounded focus-within:border-blue`}
        >
          <input
            type={type}
            placeholder={placeholder}
            className="text-darkBlue outline-none font-medium bg-none text-base placeholder:text-darkBlue"
            ref={ref} // Attach the forwarded ref here
            {...rest} // Spread additional props
          />
          {error && <img src={errorIcon} alt="Error icon" />}
        </div>
        {error && (
          <span className="text-red text-xs block self-end italic">
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);

// Provide a display name for debugging purposes
Input.displayName = "Input";

export default Input;
