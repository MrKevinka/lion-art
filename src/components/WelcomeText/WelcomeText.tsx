import { FC } from 'react';

interface WelcomeTextProps {
  text: string;
}

export const WelcomeText: FC<WelcomeTextProps> = ({ text }) => {
  return (
    <div className="mx-auto inline-block max-w-[500px] space-y-4">
      <p className="text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">{text}</p>
    </div>
  );
};
