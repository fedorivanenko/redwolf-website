import * as React from "react";
import { cn } from "@/lib/utils";

export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-9 md:px-10 xl:px-12 max-w-[1536px] pb-16 pt-12 md:pt-28",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
