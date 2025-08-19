import { CallToAction } from '@/components/CallToAction/CallToAction';
import { HeaderImage } from '@/components/HeaderImage/HeaderImage';
import { Stack } from '@/components/Stack/Stack';
import { Title } from '@/components/Title/Title';

export default function Home() {
  return (
    <main>
      <HeaderImage />
      <Title />
      <Stack />
      <CallToAction />
    </main>
  );
}
