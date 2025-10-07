import { Button } from "@/components/ui/button";
import { BASE_ROUTE } from "@/constants/route";
import { Plus } from "lucide-react";
import Link from "next/link";

export const HeaderAction = () => {
  return (
    <div>
      <Link href={BASE_ROUTE.categories.create}>
        <Button>
          <Plus />
          Thêm danh mục
        </Button>
      </Link>
    </div>
  );
};
