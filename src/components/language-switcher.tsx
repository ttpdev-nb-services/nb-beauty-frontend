import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const LanguageSwitcher = () => {
  return (
    <Select defaultValue="vi" value="vi">
      <SelectTrigger className="!min-w-18 border-foreground shadow-none">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="vi">VI</SelectItem>
      </SelectContent>
    </Select>
  );
};
