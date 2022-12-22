import { useTheme } from '@/theme'
import { Modal, Form, Switcher, Button } from '@/components'
import { useCallback } from 'react'
import { useAppDispatch } from '@/store'
import { useTranslation } from 'react-i18next'
import { localeActions } from '@/locales/slice'
import { themeActions } from '@/theme/slice'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface SettingsProps {
  isOpen: boolean
  modalHandlers: {
    open: () => void
    close: () => void
  }
}

const ModalSettings = ({ isOpen, modalHandlers }: SettingsProps): JSX.Element => {
  const themeName = useTheme()
  const { t, i18n } = useTranslation()

  const dispatch = useAppDispatch()

  const setVisible = useCallback((isVisible: boolean) => {
    isVisible ? modalHandlers.open() : modalHandlers.close()
  }, [])

  const onChangeLanguage = useCallback((isChecked: boolean) => {
    dispatch(localeActions.changeLocale(isChecked ? 'ru' : 'en'))
  }, [])

  const onChangeTheme = useCallback((isChecked: boolean) => {
    dispatch(themeActions.changeTheme(isChecked ? 'dark' : 'light'))
  }, [])

  const defaultChekedLocale = i18n.language === 'ru'
  const defaultChekedTheme = themeName === 'dark'

  return (
    <Modal isOpen={isOpen} title={t('settings')} setVisible={setVisible}>
      <section className={cx('settings')}>
        <Form.Control label={t('personal settings')}>
          <Form.Field>
            <Switcher
              slotOff="EN"
              slotOn="RU"
              isChecked={defaultChekedLocale}
              onChange={onChangeLanguage}
            >
              {t('change language')}
            </Switcher>
          </Form.Field>
          <Form.Field>
            <Switcher
              slotOff="OFF"
              slotOn="ON"
              isChecked={defaultChekedTheme}
              onChange={onChangeTheme}
            >
              {t('change theme')}
            </Switcher>
          </Form.Field>
        </Form.Control>
        <Form.Footer>
          <Button onClick={modalHandlers.close}>
            {t('ok')}
          </Button>
        </Form.Footer>
      </section>
    </Modal>
  )
}

export default ModalSettings
