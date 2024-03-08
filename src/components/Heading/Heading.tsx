import { FC } from 'react';

interface HeadingProps {
  text: string;
}

export const Heading: FC<HeadingProps> = ({ text }) => {
  return (
    <h1 className="text-3xl font-bold tracking-tighter text-stone-900 sm:text-5xl md:text-6xl dark:text-stone-200">
      {text}
    </h1>
  );
};
