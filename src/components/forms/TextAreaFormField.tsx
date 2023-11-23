import { Field } from "formik";
import { MAX_TEXT_LENGTH } from "../../helpers/constants";
import ErrorFormMessage from "./ErrorFormMessage";
import { FormikBag } from "../interfaces/common";
import { useTranslation } from "react-i18next";

interface TextAreaFieldProps {
  fieldName: string;
}

const TextAreaFormField = ({ fieldName }: TextAreaFieldProps) => {
  const [t] = useTranslation("global");

  return (
    <div className="flex flex-col group w-full h-full">
      <Field name={fieldName}>
        {({ field, meta }: FormikBag) => (
          <>
            <label
              htmlFor={fieldName}
              className="text-lg text-primary self-end"
            >
              {field.value.length}/{MAX_TEXT_LENGTH}
            </label>
            <div className="flex flex-col">
              <textarea
                id={fieldName}
                maxLength={MAX_TEXT_LENGTH}
                rows={6}
                className="block p-2.5 w-full text-lg text-primary bg-secondary rounded-lg border-2 border-secondary focus:ring-primary focus:border-primary group-hover:border-primary outline-none"
                placeholder={t("contact-form.text-area-placeholder")}
                autoComplete="off"
                {...field}
              />
              {meta.touched && meta.error ? (
                <ErrorFormMessage message={meta.error} />
              ) : null}
            </div>
          </>
        )}
      </Field>
    </div>
  );
};

export default TextAreaFormField;
