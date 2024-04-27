interface Props {
  image: string;
}

export const Avatar = ({ image }: Props) => {
  return (
    <>
      <img className="inline-block h-10 w-10 rounded-full" src={image} alt="" />
    </>
  );
};
