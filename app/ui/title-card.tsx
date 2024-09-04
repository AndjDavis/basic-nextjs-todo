export default function TitleCard({
  title,
}: {
  title?: string,
}) {
  return (
    <div className="min-h-12 flex justify-center items-center font-bold text-2xl border-b-2">
      <span>
        {title || "Tasks"}
      </span>
    </div>
  );
};
