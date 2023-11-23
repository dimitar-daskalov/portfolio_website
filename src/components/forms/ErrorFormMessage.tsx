interface ErrorMessageProps {
  message: string;
}

const ErrorFormMessage = ({ message }: ErrorMessageProps) => {
  return <span className="self-start mt-2 text-red-500">{message}</span>;
};

export default ErrorFormMessage;
