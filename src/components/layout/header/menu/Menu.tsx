import styles from './Menu.module.scss';
import { useTranslation } from 'next-i18next';
import { PROJECT_URL } from '@/const/project-url';
import Link from 'next/link';
import { Button } from '@/components/base/button/Button';

export const Menu = () => {
  const { t } = useTranslation('menu');

  const menu = [
    {
      text: t('for-dog'),
      link: PROJECT_URL.menu.forDog,
      items: [
        { text: 'Karmy dla psa', link: '#', items: [] },
        { text: 'Przysmaki dla psa', link: '#', items: [] },
        { text: 'Zabawki dla psa', link: '#', items: [] },
        { text: 'Legowiska, budki dla psa', link: '#', items: [] },
        { text: 'Miski, akcesoria do karmienia', link: '#', items: [] },
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
    { text: t('small-mammal'), link: PROJECT_URL.menu.smallMammal, items: [] },
    { text: t('birds'), link: PROJECT_URL.menu.birds, items: [] },
    { text: t('top-brand'), link: PROJECT_URL.menu.topBrand, items: [] },
    { text: t('sale'), link: PROJECT_URL.menu.sale, items: [] },
    { text: t('pharmacy'), link: PROJECT_URL.menu.pharmacy },
    { text: t('blog'), link: PROJECT_URL.menu.blog },
    { text: t('treat'), link: PROJECT_URL.menu.treat },
  ];

  return (
    <div className={styles.wrapper}>
      <ul className={styles.menu}>
        {menu.map((i) => (
          <li key={i.text} className={styles['menu-item']}>
            <Button
              text={i.text}
              href={i.link}
              textSize="base"
              textColor={i.text === t('treat') ? 'white' : 'gray'}
              className={styles.link}
            />
            {i.items && (
              <ul>
                {i.items.map((j) => (
                  <li key={j.text}>
                    <Button text={j.text} href={j.link} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
