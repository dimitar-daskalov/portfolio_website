import { motion } from "framer-motion";
import { Formik, Form, FormikValues, FormikHelpers } from "formik";
import * as Yup from "yup";
import { HiUser } from "react-icons/hi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import { TbMailSearch } from "react-icons/tb";
import { fadeIn } from "../../helpers/customAnimations";
import useCommonToast from "../hooks/useCommonToast";
import axiosInstance from "../providers/axios";
import InputFormField from "./InputFormField";
import TextAreaFormField from "./TextAreaFormField";
import { useTranslation } from "react-i18next";

export interface FormValues {
  [key: string]: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const { successToast, errorToast } = useCommonToast();
  const [t] = useTranslation("global");

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, t("contact-form.name-errors.short"))
      .max(50, t("contact-form.name-errors.long"))
      .required(t("contact-form.name-errors.required")),
    email: Yup.string()
      .email(t("contact-form.email-errors.invalid"))
      .required(t("contact-form.email-errors.required")),
    subject: Yup.string()
      .trim()
      .min(5, t("contact-form.subject-errors.short"))
      .max(70, t("contact-form.subject-errors.long"))
      .required(t("contact-form.subject-errors.required")),
    message: Yup.string()
      .trim()
      .min(10, t("contact-form.message-errors.short"))
      .max(350, t("contact-form.message-errors.long"))
      .required(t("contact-form.message-errors.required")),
  });

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = async (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues & FormValues>
  ) => {
    const formKey = import.meta.env.VITE_FORM_KEY;

    try {
      await axiosInstance.post(formKey, values);
      formikHelpers.resetForm();
      successToast(t("contact-form.toast.success"));
    } catch (error) {
      console.error(error);
      errorToast(t("contact-form.toast.error"));
    }
  };

  return (
    <motion.div
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="container flex flex-col text-center items-center justify-center h-full w-full mx-auto max-w-[800px] bg-accent-2/10 backdrop-blur-sm p-4 lg:p-8 rounded-3xl"
    >
      <h2
        className="h2 text-center text-3xl mb-6 text-accent-2"
        dangerouslySetInnerHTML={{ __html: t("contact-form.header") }}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, isSubmitting }) => {
          const isErrorsPresent = Object.keys(errors).length > 0;

          return (
            <Form className="flex-1 flex flex-col gap-6 w-full mx-auto">
              <div className="flex gap-6 w-full flex-wrap lg:flex-nowrap">
                <div className="flex items-start w-full lg:w-[50%]">
                  <InputFormField
                    fieldName="name"
                    fieldIcon={<HiUser />}
                    placeholder={t("contact-form.input-placeholder.name")}
                  />
                </div>
                <div className="flex items-start w-full lg:w-[50%]">
                  <InputFormField
                    fieldName="email"
                    fieldIcon={<MdOutlineAlternateEmail />}
                    placeholder={t("contact-form.input-placeholder.email")}
                  />
                </div>
              </div>
              <div className="flex w-full">
                <InputFormField
                  fieldName="subject"
                  fieldIcon={<TbMailSearch />}
                  placeholder={t("contact-form.input-placeholder.subject")}
                />
              </div>
              <div className="flex flex-col w-full">
                <TextAreaFormField fieldName="message" />
              </div>
              <button
                type="submit"
                disabled={isErrorsPresent || isSubmitting}
                className="btn rounded-full border-2 border-secondary/50 w-[12.5rem] p-4 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-primary group hover:bg-secondary self-center lg:self-start disabled:cursor-not-allowed"
              >
                <span
                  className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-xl text-accent-2"
                  dangerouslySetInnerHTML={{ __html: t("contact-form.button") }}
                />
                <div className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-3xl text-primary">
                  <RiMailSendLine />
                </div>
              </button>
            </Form>
          );
        }}
      </Formik>
    </motion.div>
  );
};

export default ContactForm;
