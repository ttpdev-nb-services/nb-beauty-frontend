export const Copyright = () => {
  return (
    <div className="w-full min-h-14">
      <div className="flex flex-col gap-1 w-full">
        <span className="text-xs text-zinc-400 w-full -tracking-tight">
          &copy; {new Date().getFullYear()} Ngọc Bích Beauty - Dịch vụ Spa
        </span>
        <span className="text-zinc-400 max-w-md text-xs -tracking-tight">
          Website nbbeauty.com thuộc quyền sở hữu của Ngọc Bích Beauty - Dịch vụ
          Spa và được phát triển bởi TtPhongdev. All Rights Reserved
        </span>
      </div>
    </div>
  );
};
