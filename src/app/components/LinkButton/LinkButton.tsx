import styles from './linkButton.module.scss';

interface Props {
  className?: string;
  onClick: () => void;
  text: string;
}

export default function LinkButton(props: Props) {
  const { text, className = '', onClick } = props;

  return (
    <a
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {text}
    </a>
  )
}