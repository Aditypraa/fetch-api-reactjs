function Button({
  children,
  className,
  type,
  onClick = () => {},
}: {
  children: React.ReactNode;
  className: string;
  type: "submit" | "button";
  onClick?: () => void;
}) {
  return (
    <button
      className={`${className} h-10 px-6 font-semibold rounded-md text-white`}
      type={type}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default Button;
