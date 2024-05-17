import {
  Comfortaa,
  Montserrat_Alternates as MontserratAlternates,
} from 'next/font/google';

const montserratAlternates = MontserratAlternates({
  weight: ['400', '500', '600'],
  subsets: ['cyrillic'],
  variable: '--font-montserrat-alternates',
});

const comfortaa = Comfortaa({
  weight: ['300', '400', '500'],
  subsets: ['cyrillic'],
  variable: '--font-comfortaa',
});

export { montserratAlternates, comfortaa };
