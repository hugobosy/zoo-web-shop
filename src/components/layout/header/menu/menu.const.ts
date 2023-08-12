import { useTranslation } from 'next-i18next';
import { PROJECT_URL } from '@/const/project-url';
import dog1 from '@/assets/image/dog1.png';
import dog2 from '@/assets/image/dog2.png';
import cat1 from '@/assets/image/cat1.png';
import cat2 from '@/assets/image/cat2.png';
import mammal1 from '@/assets/image/mammal1.png';
import mammal2 from '@/assets/image/mammal2.png';

export const menuConst = () => {
  const { t } = useTranslation('menu');
  return [
    {
      text: t('for-dog'),
      link: PROJECT_URL.menu.forDog,
      images: [
        { alt: 'Dog1', src: dog1 },
        { alt: 'Dog2', src: dog2 },
      ],
      items: [
        {
          text: 'Karmy dla psa',
          link: '#',
          items: [
            { text: 'Karmy suche dla psa', link: '#' },
            { text: 'Karmy mokre dla psa', link: '#' },
            { text: 'Karmy weterynaryjne dla psa', link: '#' },
            { text: 'Karmy według wieku psa', link: '#' },
            { text: 'Karmy według wagi psa', link: '#' },
            { text: 'Karmy według rasy psa', link: '#' },
            { text: 'Karmy bezzbożowe dla psa', link: '#' },
            { text: 'Karmy hipoalergiczne dla psa', link: '#' },
            { text: 'Karmy monobiałkowe dla psa', link: '#' },
            { text: 'Karmy według producenta', link: '#' },
            { text: 'Zobacz wszystkie', link: '#' },
          ],
        },
        {
          text: 'Przysmaki dla psa',
          link: '#',
          items: [
            { text: 'Kości, gryzaki', link: '#' },
            { text: 'Naturalne przysmaki', link: '#' },
            { text: 'Ciastka, biszkopty', link: '#' },
            { text: 'Przysmaki treningowe', link: '#' },
            { text: 'Przysmaki bezzbożowe', link: '#' },
            { text: 'Przysmaki liofilizowane', link: '#' },
            { text: 'Przysmaki zdrowotne', link: '#' },
            { text: 'Przysmaki dentystyczne', link: '#' },
            { text: 'Saszetki na smakołyki', link: '#' },
            { text: 'Zobacz wszystkie', link: '#' },
          ],
        },
        {
          text: 'Zabawki dla psa',
          link: '#',
          items: [
            { text: 'Piłki', link: '#' },
            { text: 'Sznurki, ringi, szarpaki', link: '#' },
            { text: 'Gryzaki', link: '#' },
            { text: 'Piszczące', link: '#' },
            { text: 'Edukacyjne, interaktywne', link: '#' },
            { text: 'Frisbee dla psa', link: '#' },
            { text: 'Aporty, dyski, frisbee', link: '#' },
            { text: 'Pluszaki', link: '#' },
            { text: 'Kongi', link: '#' },
            { text: 'Klikiery, gwizdki', link: '#' },
            { text: 'Dla szczeniąt', link: '#' },
            { text: 'Zobacz wszystkie', link: '#' },
          ],
        },
        {
          text: 'Legowiska, budki dla psa',
          link: '#',
          items: [
            { text: 'Legowiska małe', link: '#' },
            { text: 'Legowiska średnie', link: '#' },
            { text: 'Legowiska duże', link: '#' },
            { text: 'Budki', link: '#' },
            { text: 'Materace, maty', link: '#' },
            { text: 'Koce', link: '#' },
            { text: 'Zobacz wszystkie', link: '#' },
          ],
        },
        {
          text: 'Miski, akcesoria do karmienia',
          link: '#',
          items: [
            { text: 'Miski i akcesoria do misek', link: '#' },
            { text: 'Pojemniki na karmę', link: '#' },
            { text: 'Podajniki, dozowniki karmy', link: '#' },
            { text: 'Poidła', link: '#' },
            { text: 'Butelki', link: '#' },
            { text: 'Zobacz wszystkie', link: '#' },
          ],
        },
        { text: 'Ubranka dla psa', link: '#', items: [] },
        { text: 'Smycze, obroże, szelki dla psa', link: '#', items: [] },
        { text: 'Transportery, sprzęt podróżny', link: '#', items: [] },
        { text: 'Higiena, pielęgnacja psa', link: '#', items: [] },
        { text: 'Preparaty lecznicze, suplementy', link: '#', items: [] },
        { text: 'Trening dla psa', link: '#', items: [] },
      ],
    },
    {
      text: t('for-cat'),
      link: PROJECT_URL.menu.fotCat,
      images: [
        { alt: 'Cat1', src: cat1 },
        { alt: 'Cat2', src: cat2 },
      ],
      items: [
        { text: 'Karmy dla kota', link: '#', items: [] },
        { text: 'Przysmaki dla kota', link: '#', items: [] },
        { text: 'Zabawki dla kota', link: '#', items: [] },
        { text: 'Żwirki, kuwety, łopatki dla kota', link: '#', items: [] },
        { text: 'Legowiska, budki dla kota', link: '#', items: [] },
        { text: 'Drapaki, tunele dla kota', link: '#', items: [] },
        { text: 'Miski, akcesoria do karmienia', link: '#', items: [] },
        { text: 'Smycze, obroże, szelki dla kota', link: '#', items: [] },
        { text: 'Transportery, sprzęt podróżny', link: '#', items: [] },
        { text: 'Higiena, pielęgnacja dla kota', link: '#', items: [] },
        { text: 'Preparaty lecznicze, suplementy', link: '#', items: [] },
      ],
    },
    {
      text: t('small-mammal'),
      link: PROJECT_URL.menu.smallMammal,
      images: [
        { alt: 'Mammal1', src: mammal1 },
        { alt: 'Mammal2', src: mammal2 },
      ],
      items: [],
    },
    { text: t('birds'), link: PROJECT_URL.menu.birds, items: [] },
    { text: t('top-brand'), link: PROJECT_URL.menu.topBrand, items: [] },
    { text: t('sale'), link: PROJECT_URL.menu.sale, items: [] },
    { text: t('pharmacy'), link: PROJECT_URL.menu.pharmacy },
    { text: t('blog'), link: PROJECT_URL.menu.blog },
    { text: t('treat'), link: PROJECT_URL.menu.treat },
  ];
};
