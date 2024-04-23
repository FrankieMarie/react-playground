import { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, name, ...props }, ref) => {
    return (
      <div className="outline-animation focus-within:border-primary border-light relative rounded-md border-2">
        <input
          type={type}
          name={name}
          ref={ref}
          autoComplete={type}
          placeholder=" "
          className="block w-full appearance-none bg-transparent p-2 outline-0 autofill:shadow-[inset_0_0_0px_1000px_rgb(11,12,16)] focus:outline-none focus:outline-0"
          {...props}
        />
        <label
          className="origin-0 bg-dark pointer-events-none absolute top-1/4 pl-2 duration-150"
          htmlFor={name}
        >
          {label}
        </label>
      </div>
    );
  }
);
