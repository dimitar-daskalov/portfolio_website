import { Field } from "formik";
import { ReactElement } from "react";
import ErrorFormMessage from "./ErrorFormMessage";
import { FormikBag } from "../interfaces/common";

interface InputFieldProps {
  fieldName: string;
  fieldIcon: ReactElement;
  placeholder: string;
}

const InputFormField = ({
  fieldName,
  fieldIcon,
  placeholder,
}: InputFieldProps) => {
  return (
    <div className="group flex w-full">
      <label
        htmlFor={fieldName}
        className="inline-flex items-center h-[3.24rem] px-3 text-2xl text-secondary bg-primary border border-r-0 border-primary rounded-l-md cursor-pointer group-hover:text-accent-1"
      >
        {fieldIcon}
      </label>
      <div className="flex flex-col w-full">
        <Field name={fieldName}>
          {({ field, meta }: FormikBag) => (
            <>
              <input
                type="text"
                id={fieldName}
                className="rounded-none rounded-r-lg border-2 text-primary focus:ring-primary focus:border-primary group-hover:border-primary block flex-1 min-w-0 w-full text-lg border-secondary p-2.5 bg-secondary outline-none"
                placeholder={placeholder}
                autoComplete="off"
                {...field}
              />
              {meta.touched && meta.error ? (
                <ErrorFormMessage message={meta.error} />
              ) : null}
            </>
          )}
        </Field>
      </div>
    </div>
  );
};

export default InputFormField;
