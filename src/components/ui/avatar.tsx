import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import { SiJavascript, SiTypescript, SiPython } from "react-icons/si"; // Import language icons

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <a
    href="https://github.com/aanchalshres"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center justify-center space-y-2 w-full h-full"
  >
    <div className="flex flex-col items-center justify-center space-y-2 w-full">
      <div className="flex items-center justify-center space-x-2">
        <AvatarPrimitive.Root
          ref={ref}
          className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
          {...props}
        />
        <FaGithub className="text-xl" />
      </div>
      <div className="flex items-center justify-center space-x-2 mt-1">
        <SiJavascript className="text-yellow-400 text-lg" title="JavaScript" />
        <SiTypescript className="text-blue-500 text-lg" title="TypeScript" />
        <SiPython className="text-blue-400 text-lg" title="Python" />
      </div>
    </div>
  </a>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    src="https://github.com/aanchalshres.png" 
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
