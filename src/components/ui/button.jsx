import React from "react";

const variants = {
  default: "bg-white text-black hover:bg-zinc-200",
  outline: "border border-white/30 bg-transparent text-white hover:bg-white hover:text-black",
};

export function Button({ asChild = false, variant = "default", className = "", children, ...props }) {
  const Comp = asChild ? React.Children.only(children).type : "button";
  const childProps = asChild ? React.Children.only(children).props : {};
  const combinedClassName = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition ${variants[variant] || variants.default} ${className} ${childProps.className || ""}`;

  if (asChild) {
    return React.cloneElement(React.Children.only(children), {
      ...childProps,
      className: combinedClassName,
    });
  }

  return (
    <Comp className={combinedClassName} {...props}>
      {children}
    </Comp>
  );
}
