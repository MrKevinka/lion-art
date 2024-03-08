import { FC } from 'react';

interface WelcomeTextProps {
  text: string;
}

export const WelcomeText: FC<WelcomeTextProps> = ({ text }) => {
  return (
    <div className="mx-auto inline-block max-w-[500px] space-y-4">
      <p className="whitespace-pre-wrap text-lg/relaxed text-stone-700 sm:text-xl/relaxed md:text-2xl/relaxed dark:text-stone-300">
        {text}
      </p>
    </div>
  );
};
