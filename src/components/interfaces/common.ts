/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldInputProps, FieldMetaProps, FormikProps } from "formik";

export interface FormikBag {
  field: FieldInputProps<any>;
  meta: FieldMetaProps<any>;
  form: FormikProps<any>;
}
