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

const FAQ = ({ urlWebsite, urlFAQ }: FAQProps): JSX.Element | null => {
  const onPressLink = useCallback((
    event: MouseEvent
  ) => {
    try {
      const target = event.target

      if (target instanceof HTMLAnchorElement) {
        window?.require('electron')?.ipcRenderer
          ?.invoke('open-external-url', target.href)
      }

      event.preventDefault()
    } catch(error) {
      return
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
            target="_blank"
            className={cx('text')}
            onClick={onPressLink}
            rel="noreferrer"
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
            target="_blank"
            className={cx('text')}
            onClick={onPressLink}
            rel="noreferrer"
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
