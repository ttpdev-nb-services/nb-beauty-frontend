"use client";

import { Icon } from "./icon";
import { useState } from "react";
import { Label } from "./ui/label";
import { CustomInput } from "./customs/custom-input";

export const SearchInput = () => {
  const [keyword, setkeyword] = useState<string>("");

  return (
    <div className="relative w-full">
      <Label htmlFor="search">
        <Icon
          icon="icon-[lucide--search]"
          className="text-muted-foreground z-10 absolute cursor-pointer w-4 h-4 top-1/2 left-4 -translate-y-1/2 -translate-x-1/2"
        />
      </Label>
      <CustomInput
        value={keyword}
        onChange={(e) => setkeyword(e.target.value)}
        placeholder="Nhập tên dịch vụ muốn tìm"
        className="pl-8 h-12 w-full text-sm text-black"
      />
    </div>
  );
};
