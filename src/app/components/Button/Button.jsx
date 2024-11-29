import Link from "next/link";

export const MyButton = ({ textButton }) => {
  return (
    <Link
      href={""}
      target="_black"
      className="bg-secundaryColor hover:bg-secundaryColorLight cursor-pointer rounded-3xl py-3 px-6 text-black font-bold w-fit"
    >
      {textButton}
    </Link>
  );
};
