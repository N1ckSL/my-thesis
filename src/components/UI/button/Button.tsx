type BaseProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { children: React.ReactNode };

function ButtonWithProps({ children, ...props }: BaseProps) {
  return (
    <Button name="_action" {...props}>
      {children}
    </Button>
  );
}

function Button({ children, ...props }: BaseProps) {
  return (
    <button
      {...props}
      className={`btn relative ${props.className || "btn-primary"}`}
      disabled={props.disabled === true ? true : false}
    >
      <span className={`flex items-center gap-2 justify-center flex-1`}>
        {children}
      </span>
    </button>
  );
}

export { ButtonWithProps };
