import Image from 'next/image';

export const HeaderImage = () => {
  return (
    <div className="relative aspect-[3/1] w-full overflow-hidden">
      <Image src="https://picsum.photos/1000/1200" alt="Header-Image" fill className="object-cover" />

      {/* Steile Rundung */}
      <svg className="absolute bottom-0 left-0 h-64 w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 Q50,100 100,0 L100,100 L0,100 Z" fill="white" />
      </svg>
    </div>
  );
};
