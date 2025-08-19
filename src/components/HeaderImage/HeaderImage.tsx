import Image from 'next/image';

export const HeaderImage = () => {
  return (
    <div className="relative aspect-[3/1] w-full overflow-hidden">
      <Image
        src="https://radio-oberland.de/Themen/2024/Musik%20%26%20Konzerte/27251/image-thumb__27251__website/2024-06-08%20taylor%20swift%201.jpg"
        alt="Header-Image"
        fill
        className="object-cover"
      />

      {/* Steile Rundung */}
      <svg className="absolute bottom-0 left-0 h-64 w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 Q50,100 100,0 L100,100 L0,100 Z" fill="white" />
      </svg>
    </div>
  );
};
