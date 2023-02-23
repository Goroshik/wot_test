'use client';

import styles from './search.module.scss'

interface Props {
  value: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: () => void;
}

export default function Search(props: Props) {
  const { value, onChangeValue, onSearchClick } = props;

  return (
    <div className={styles.container}>
      <input value={value} onChange={onChangeValue} />
      <button onClick={onSearchClick}>search</button>
    </div>
  )
}
