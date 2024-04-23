interface Props {
  title: string;
}

export const DividerLabel = ({ title }: Props) => {
  return (
    <div className="relative my-2">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-dark px-2 text-base text-light">{title}</span>
      </div>
    </div>
  );
};
