import Image from 'next/image';

import ProtofyLogo from '@/assets/protofy_logo.png';
import { Heading } from '@/components/Heading/Heading';
import { WelcomeText } from '@/components/WelcomeText/WelcomeText';

export default function Home() {
  const headingText = 'Hello, World!';
  const welcomeText =
    'Welcome to the project. We are happy to have you here. Please refer to the README for instructions on how to get started.';

  return (
    <div className="flex min-h-screen flex-col justify-center space-y-4 px-4 py-12 text-center md:px-6">
      <div className="mx-auto space-y-2">
        <Image alt="Logo" className="inline-block aspect-square size-48 md:size-64" src={ProtofyLogo} />
        <Heading text={headingText} />
      </div>
      <WelcomeText text={welcomeText} />
    </div>
  );
}
