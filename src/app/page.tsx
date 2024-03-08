import { Heading } from '@/components/Heading/Heading';
import { ProtofyLogo } from '@/components/ProtofyLogo/ProtofyLogo';
import { WelcomeText } from '@/components/WelcomeText/WelcomeText';

export default function Home() {
  const headingText = 'Hello, Protofy!';
  const welcomeText =
    'Welcome to the project!\nWe are happy to have you here. Please refer to the README for instructions on how to get started.';

  return (
    <main className="flex min-h-screen flex-col justify-center gap-4 bg-stone-100 px-4 py-12 text-center md:px-6 dark:bg-stone-800">
      <div className="mx-auto space-y-8">
        <ProtofyLogo />
        <Heading text={headingText} />
      </div>
      <WelcomeText text={welcomeText} />
    </main>
  );
}
