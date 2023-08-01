import styles from './Menu.module.scss';
import { useTranslation } from 'next-i18next';
import { PROJECT_URL } from '@/const/project-url';
import Link from 'next/link';
import { Button } from '@/components/base/button/Button';
export const Menu = () => {
  const { t } = useTranslation('menu');

  const menu = [
    { text: t('for-dog'), link: PROJECT_URL.menu.forDog, items: [] },
    { text: t('for-cat'), link: PROJECT_URL.menu.fotCat, items: [] },
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
          </li>
        ))}
      </ul>
    </div>
  );
};
