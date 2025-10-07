import { PATTERN } from "@/constants/regex";
import { z } from "zod";

type TEmailSubscribeForm = {
  email: string;
};

export const defaultValues: TEmailSubscribeForm = {
  email: "",
};

export const schemas = z.object({
  email: z
    .string()
    .min(8, "Độ dài E-mail tối thiểu từ 8 ký tự")
    .max(150, "E-mail quá dài")
    .regex(PATTERN.email, "E-mail không đúng định dạng"),
});

export type TEmailSubscribeSchema = z.infer<typeof schemas>;
