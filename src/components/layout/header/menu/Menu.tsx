import styles from './Menu.module.scss';
import { useTranslation } from 'next-i18next';
import { Button } from '@/components/base/button/Button';

import Image from 'next/image';
import { MenuConst } from '@/components/layout/header/menu/menu.const';

export const Menu = () => {
  const { t } = useTranslation('menu');

  return (
    <div className={styles.wrapper}>
      <ul className={styles.menu}>
        {MenuConst().map((i) => (
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
                              <Button
                                text={k.text}
                                href={k.link}
                                textSize="s"
                                textColor="gray"
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </div>
                <div className={styles.content}>
                  {i.images?.map((img) => (
                    <Image key={img.alt} src={img.src} alt={img.alt} />
                  ))}
                </div>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
