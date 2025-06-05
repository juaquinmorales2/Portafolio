import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import config from '~/config.json';
import styles from './footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()}. Desarrollado por ${config.name}.`}
      </span> <br />
      <p className="">Este portafolio está basado en una plantilla open source que adapté completamente a mis necesidades, incluyendo diseño, estructura y contenido. Código original bajo licencia MIT.</p>
    </Text>
  </footer>
);
