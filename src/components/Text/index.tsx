import React from "react";

const sizeClasses = {
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsSemiBold25: "font-poppins font-semibold",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsSemiBold15: "font-poppins font-semibold",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtInterMedium20: "font-inter font-medium",
  txtInterMedium20WhiteA700: "font-inter font-medium",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtPoppinsSemiBold15Black900: "font-poppins font-semibold",
  txtNotoSansRegular16: "font-normal font-notosans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
