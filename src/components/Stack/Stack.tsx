export const Stack = () => {
  return (
    <div className="relative mt-12 overflow-x-hidden">
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
        {/* Linker Halbkreis: Angebote */}
        <div className="flex justify-start">
          <div
            className="relative flex items-center bg-pink-200 shadow-md"
            style={{
              width: '40vw',
              height: '40vw',
              marginLeft: '-20vw',
              borderTopRightRadius: '50%',
              borderBottomRightRadius: '50%',
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              paddingLeft: '25vw',
              boxSizing: 'border-box',
            }}
          >
            <div className="text-left">
              <h2 className="mb-4 text-lg font-bold">Angebote</h2>
              <ul className="list-disc space-y-2 text-base">
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
        <div className="px-4">
          <h2 className="mb-2 text-center text-lg font-semibold">Zauberhafte Extras</h2>
          <ul className="list-disc space-y-1 text-base">
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
          <div
            className="flex items-center justify-center bg-pink-200 shadow-md"
            style={{
              width: '40vw',
              height: '40vw',
              marginRight: '-20vw',
              borderTopLeftRadius: '50%',
              borderBottomLeftRadius: '50%',
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            <div
              className="text-left"
              style={{
                width: '70%',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '1rem',
              }}
            >
              <h2 className="mb-4 text-lg font-bold">Anlässe</h2>
              <ul className="list-disc space-y-2 text-left">
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
