import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const MainContainer = (): JSX.Element => {
  return <section className={cx('container')}>MAIN CONTAINER</section>
}

export default MainContainer
