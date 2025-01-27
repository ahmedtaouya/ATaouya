// /app/ui/3d-card.js
import React from "react";

export const CardContainer = ({ children, className }) => (
  <div className={`perspective-container ${className}`}>{children}</div>
);

export const CardBody = ({ children, className }) => (
  <div className={`card-body ${className}`}>{children}</div>
);

export const CardItem = ({
  children,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  translateX = 0,
  translateY = 0,
  className,
  ...rest
}) => {
  const style = {
    transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
  };

  return (
    <div className={`card-item ${className}`} style={style} {...rest}>
      {children}
    </div>
  );
};
