export const Stack = () => {
  return (
    <div className="relative mt-12">
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
        {/* Linker Halbkreis: Angebote */}
        <div className="flex justify-start">
          <div className="flex aspect-square w-[30%] items-center justify-center rounded-r-full bg-pink-200 shadow-md">
            <div className="px-2 text-center">
              <h2 className="text-base font-bold">Angebote</h2>
              <ul className="mt-2 space-y-1 text-sm">
                <li>Kinderschminken</li>
                <li>Glitzertattoos</li>
                <li>Kostümauftritte</li>
                <li>Basteltisch</li>
                <li>Outdoor Spiele</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mitte: Zauberhafte Extras */}
        <div className="text-center">
          <h2 className="mb-2 text-lg font-semibold">Zauberhafte Extras</h2>
          <ul className="space-y-1 text-base">
            <li>Pädagogik- & Design-Ausbildung</li>
            <li>Kreativ, detailverliebt & einfühlsam</li>
            <li>Liebevoller Umgang mit Kindern</li>
            <li>Hygienisch, zuverlässig & herzlich</li>
            <li>Firmenveranstaltungen</li>
            <li>Rundum-Paket: Schminken, Basteln, Spielen & Verkleiden</li>
          </ul>
        </div>

        {/* Rechter Halbkreis: Anlässe */}
        <div className="flex justify-end">
          <div className="flex aspect-square w-[30%] items-center justify-center rounded-l-full bg-pink-200 shadow-md">
            <div className="px-2 text-center">
              <h2 className="text-base font-bold">Anlässe</h2>
              <ul className="mt-2 space-y-1 text-sm">
                <li>Kindergeburtstage</li>
                <li>Hochzeiten & Familienfeste</li>
                <li>Schul- & Kindergartenfeste</li>
                <li>Stadt- & Dorffeste</li>
                <li>Firmenveranstaltungen</li>
                <li>
                  Weihnachtsfeiern <p className="text-xs">{`(inklusive Elfenkostüm)`}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
