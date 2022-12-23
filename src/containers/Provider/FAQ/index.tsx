import { useCallback, MouseEvent } from 'react'
import { EarthOutline, HelpCircleOutline } from 'react-ionicons'
import SectionBox from '@/containers/Provider/SectionBox'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

interface FAQProps {
  urlWebsite: string | undefined
  urlFAQ: string | undefined
}

const cx = classNames.bind(styles)

const { iconSize, iconColor } = styles
const ipcRenderer = window?.require('electron')?.ipcRenderer


const FAQ = ({ urlWebsite, urlFAQ }: FAQProps): JSX.Element | null => {
  const onPressLink = useCallback((
    event: MouseEvent
  ) => {
    event.preventDefault()

    const target = event.target

    if (target instanceof HTMLAnchorElement) {
      ipcRenderer?.invoke('open-external-url', target.href)
    }
  }, [])

  if (urlWebsite && urlFAQ) {
    return (
      <SectionBox className={cx('faq')}>
        <div className={cx('row')}>
          <EarthOutline
            color={iconColor}
            height={iconSize}
            width={iconSize}
          />
          <a
            href={urlWebsite}
            className={cx('text')}
            onClick={onPressLink}
          >
            Go to website
          </a>
        </div>
        <div className={cx('row')}>
          <HelpCircleOutline
            color={iconColor}
            height={iconSize}
            width={iconSize}
          />
          <a
            href={urlFAQ}
            className={cx('text')}
            onClick={onPressLink}
          >
            How to setup
          </a>
        </div>
      </SectionBox>
    )
  }

  return null
}

export default FAQ
