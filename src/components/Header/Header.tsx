'use client';

export interface Props {
  items: string[];
}

export default function Header({ items }: Props) {
  return (
    <header className="sticky top-0 gap-4 px-8 flex w-full justify-center z-10 w-full items-center">
      {items?.map((linkItem, index) => (
        <a key={index} href={`${linkItem.link}`} className="p-4 hover:bg-white">
          {linkItem.name}
        </a>
      ))}
    </header>
  );
}
