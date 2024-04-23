import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  type?: "success" | "danger";
}

const BadgeTypes = {
  default:
    "bg-blue-100 text-blue-800 text-xs dark:bg-blue-900 dark:text-blue-300",
  danger: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  // Other types
};

export const Badge = (props: BadgeProps) => {
  const badgeType = props.type ? BadgeTypes[props.type] : BadgeTypes["default"];

  return (
    <span className={`font-medium px-3 py-1 rounded-full ${badgeType}`}>
      {props.children}
    </span>
  );
};
