import React from "react";

const GenericButton = ({
  type,
  onClick,
  className,
  icon: Icon,
  iconColor,
  iconClass,
  size,
  children,
  ariaLabel,
}) => {
  const defaultClasses = "py-2 px-4 rounded";

  const buttonClass = `${defaultClasses} ${
    type ? `bg-${type}-500 text-white` : ""
  } ${className || ""}`;

  return (
    <button
      id={ariaLabel}
      className={buttonClass}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {Icon && (
        <Icon className={iconClass} color={iconColor} size={size} role="img" />
      )}
      {children}
    </button>
  );
};

export default GenericButton;
