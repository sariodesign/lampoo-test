interface ButtonProps {
  text: string;
  disabled: boolean;
}

const Button = (props: ButtonProps) => {
  let { text, disabled } = props;
  return (
    <button className="btn" disabled={disabled}>
      <span className="text-sm text-center w-full font-bold uppercase">
        {text}
      </span>
    </button>
  );
};

export default Button;
