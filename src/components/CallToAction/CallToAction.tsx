import Image from 'next/image';

export const CallToAction = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-lg p-8">
      <div className="flex items-center justify-center gap-4 text-center">
        <Image
          src="https://fastly.picsum.photos/id/368/200/300.jpg?hmac=qqvgzPEXwcvVBrpVDtVeofz3jGWFgOVpRiiQU_ddP8Y"
          alt="Call to Action"
          className="h-32 w-32 object-cover"
          width={200}
          height={200}
        />
        <h3 className="text-2xl font-semibold">
          Ihr habt eigene Ideen? Ich lasse sie Wirklichkeit werden mit Pinsel, Glitzer & Fantasie!
        </h3>
      </div>
      <p className="mb-2 font-semibold">
        Buchung &amp; Kontakt — Frag ganz unkompliziert an – ich freue mich auf euch!
      </p>
    </div>
  );
};
