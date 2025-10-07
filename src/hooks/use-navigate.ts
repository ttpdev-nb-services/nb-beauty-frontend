import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const route = useRouter();

  const handleNavigate = (url: string) => {
    route.push(url);
  };

  return {
    handleNavigate,
  };
};
