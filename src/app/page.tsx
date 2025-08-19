import { HeaderImage } from '@/components/HeaderImage/HeaderImage';
import { Stack } from '@/components/Stack/Stack';
import { Title } from '@/components/Title/Title';

export default function Home() {
  return (
    <div>
      <HeaderImage />
      <div className="text-center">
        <Title />
        <Stack />
      </div>
    </div>
  );
}
