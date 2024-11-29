import Link from "next/link";

export const Links = () => {
  const myLinks = [
    {
      href: "http://www.google.com",
      text: "Meu currículo",
    },
    {
      href: "http://www.google.com",
      text: "Meu LinkedIn",
    },
    {
      href: "http://www.google.com",
      text: "Meu GitHub",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl text-secundaryColor font-bold my-8">
        Links complementares
      </h1>
      <div className="flex flex-col gap-5">
        {myLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="bg-secundaryColor text-black py-3 text-center rounded-lg hover:bg-secundaryColorLight"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};
