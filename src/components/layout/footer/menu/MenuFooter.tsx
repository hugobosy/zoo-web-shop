import styles from './MenuFooter.module.scss';
import { Typography } from '@/components/base/typography/Typography';
import { useTranslation } from 'next-i18next';
import { Button } from '@/components/base/button/Button';
import { PROJECT_URL } from '@/const/project-url';
import Image from 'next/image';

import facebook from '@/assets/image/fb.png';
import instagram from '@/assets/image/instagram_icon.png';
import blog from '@/assets/image/blog.png';
export const MenuFooter = () => {
  const { t } = useTranslation('menu-footer');

  const menuItems = [
    { text: t('about-us'), link: PROJECT_URL.menuFooter.aboutUs },
    { text: t('blog'), link: PROJECT_URL.menuFooter.blog },
    { text: t('contact'), link: PROJECT_URL.menuFooter.contact },
    { text: t('payments-form'), link: PROJECT_URL.menuFooter.paymentsForm },
    { text: t('shipping-cost'), link: PROJECT_URL.menuFooter.shippingCost },
    { text: t('regulations'), link: PROJECT_URL.menuFooter.regulations },
    { text: t('cookies-policy'), link: PROJECT_URL.menuFooter.cookiesPolicy },
    { text: t('faq'), link: PROJECT_URL.menuFooter.faq },
  ];

  return (
    <div className={styles.wrapper}>
      <Typography
        as="h4"
        text={t('information')}
        weight="500"
        font="roboto"
        capitalization="md"
      />
      <ul className={styles.menu}>
        {menuItems.map((i) => (
          <li key={i.text} className={styles.menuItem}>
            <Button
              text={i.text}
              href={i.link}
              textSize="s"
              textColor="gray"
              className={styles.link}
            />
          </li>
        ))}
      </ul>
      <div className={styles.social}>
        <Typography
          as="p"
          text={t('join-social-media')}
          font="roboto"
          capitalization="sm"
          color="gray-300"
          weight="600"
        />
        <div className={styles['social-icon']}>
          <Image src={facebook} alt={t('facebook')} width={32} height={32} />
          <Image src={instagram} alt={t('instagram')} width={32} height={32} />
          <Image src={blog} alt={t('blog')} width={32} height={32} />
        </div>
      </div>
    </div>
  );
};
