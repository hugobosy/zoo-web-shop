import { Typography } from '@/components/base/typography/Typography';

import styles from './Bar.module.scss';

export const Bar = () => {
  const information = [
    'Darmowa dostawa od 99zł',
    'Promocja! Na 3 sztukę 50% rabatu',
    'Zapisz sie do newslettera i otrzymaj 10% rabatu',
    'Najniższe ceny',
  ];

  const infoBar = new Array(20);
  infoBar.fill(information);
  infoBar.flat(2);

  console.log(infoBar);

  return (
    <div className={styles.bar}>
      {infoBar.map((info) =>
        info.map((i: string) => (
          <Typography
            key={i}
            as="p"
            text={i}
            capitalization="2xs"
            isUppercase
          />
        )),
      )}
    </div>
  );
};
