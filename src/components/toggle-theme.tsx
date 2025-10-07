"use client";

import { Button } from "./ui/button";
import { Icon } from "./icon";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme && theme !== "dark" && theme !== "light") {
      setTheme("light");
    }
  }, [theme, setTheme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button onClick={handleTheme} variant={"ghost"} size={"icon"}>
      <Icon icon="icon-[lucide--sun-medium]" className="w-5 h-5" />
    </Button>
  );
};
