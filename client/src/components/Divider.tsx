interface Props {
  title: string;
}

export const DividerLabel = ({ title }: Props) => {
  return (
    <div className="my-2 flex items-center">
      <div className="w-full border-t border-light" aria-hidden />
      <span className="px-2 text-base text-light">{title}</span>
      <div className="w-full border-t border-light" aria-hidden />
    </div>
  );
};

export const HorizontalDivider = () => {
  return <div className="my-2 w-full border-t border-light" aria-hidden />;
};
