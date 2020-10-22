import React from 'react';
import styled, { StyledComponent } from '@xstyled/styled-components';

import Modal, { ModalProps } from '../Modal/Modal';

import icons from '@react95/icons';
import { useEffect } from '@storybook/addons';

const dialogError = icons.user_4;
const dialogInfo = icons.user_5;
const dialogQuestion = icons.user_3;
const dialogWarning = icons.user_2;

export const DialogImages = {
  error: dialogError,
  info: dialogInfo,
  question: dialogQuestion,
  warning: dialogWarning,
};

export type DialogImageProps = { type?: keyof typeof DialogImages };

export type DialogProps = StyledComponent<'div', any, {}, never> & {
  Message: StyledComponent<'div', any, {}, never>;
  Image: StyledComponent<'div', any, DialogImageProps, never>;
};

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div<DialogImageProps>`
  background-repeat: no-repeat;
  background-size: 70%;
  height: 45px;
  width: 45px;
  background-position: center;
  margin-right: 10;

  ${({ type }) =>
    `background-image: url(${type ? DialogImages[type] : DialogImages.error});`}
`;

const Dialog: DialogProps = Object.assign(
  styled.div`
    display: flex;
    flex-direction: row;
  `,
  {
    Message,
    Image,
  },
);

export type AlertProps = Omit<
  ModalProps,
  'closeModal'
> & {} & DialogImageProps & {
  message: string;
  closeAlert: ModalProps['closeModal'];
};

const Alert: React.FC<AlertProps> = ({
  type,
  message,
  closeAlert,
  ...rest
}) => {
  return (<Modal closeModal={closeAlert} height="120" {...rest}>
    <Dialog>
      <Dialog.Image type={type} />
      <Dialog.Message>{message}</Dialog.Message>
    </Dialog>
  </Modal>)
}

Alert.displayName = 'Alert';

Alert.defaultProps = {
  type: 'error',
  buttons: [{ value: 'OK', onClick: () => { } }],
  closeAlert: () => { },
  buttonsAlignment: 'center',
  defaultPosition: {
    x: window !== undefined ? Math.floor(window.innerWidth / 2) - 150 : 0,
    y: window !== undefined ? Math.floor(window.innerHeight / 2) - 80 : 0
  }
};

export default Alert;
