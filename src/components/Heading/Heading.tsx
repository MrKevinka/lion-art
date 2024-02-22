import { FC } from 'react';

interface HeadingProps {
  text: string;
}

export const Heading: FC<HeadingProps> = ({ text }) => {
  return <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{text}</h1>;
};
