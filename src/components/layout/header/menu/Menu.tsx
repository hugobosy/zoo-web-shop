import styles from './Menu.module.scss';
import { useTranslation } from 'next-i18next';
import { PROJECT_URL } from '@/const/project-url';
import { Button } from '@/components/base/button/Button';

export const Menu = () => {
  const { t } = useTranslation('menu');

  const menu = [
    {
      text: t('for-dog'),
      link: PROJECT_URL.menu.forDog,
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
              <ul className={styles['menu-lv1']}>
                <div className={styles['menu-lv1-items']}>
                  {i.items.map((j) => (
                    <li key={j.text} className={styles['menu-lv1-item']}>
                      <Button
                        text={j.text}
                        href={j.link}
                        icon="ArrowRight"
                        iconPosition="right"
                        textSize="s"
                        textColor="gray"
                      />
                      {j.items && (
                        <ul className={styles['menu-lv2']}>
                          {j.items.map((k) => (
                            <li
                              key={k.text}
                              className={styles['menu-lv2-item']}
                            >
                              <Button text={k.text} href={k.link} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </div>
                <div></div>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
