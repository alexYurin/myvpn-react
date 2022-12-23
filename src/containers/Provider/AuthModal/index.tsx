import { useTranslation, withTranslation } from 'react-i18next'
import { Modal, Form, Button } from '@/components'
import { ModalProps } from '@/components/Modal'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

export interface AuthInputModalProps extends ModalProps {
  onCheckAuthKey: () => void
}

const cx = classNames.bind(styles)

const AuthModal = ({ onCheckAuthKey, ...props }: AuthInputModalProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Modal {...props} title="Enter API Key">
      <Form.Control>
        <Form.Field>INPUT KEY HERE</Form.Field>
      </Form.Control>
      <Form.Footer>
        <Button onClick={onCheckAuthKey}>
          Send
        </Button>
      </Form.Footer>
    </Modal>
  )
}

export default withTranslation()(AuthModal)
