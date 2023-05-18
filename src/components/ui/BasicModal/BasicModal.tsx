import { FC, PropsWithChildren } from 'react'
import tw, { TwStyle } from 'twin.macro'

interface Props {
  show: boolean
  onClose?: () => void
  title?: string
  styleBasicModal?: TwStyle
}
export const BasicModal: FC<PropsWithChildren<Props>> = ({
  children,
  show,
  onClose,
  title,
  styleBasicModal = tw`max-w-[780px]`,
}) => {
  return (
    <>
      {show && (
        <div
          onClick={onClose}
          tw="fixed inset-0 bg-gray-900/80 flex  justify-center items-center cursor-pointer z-20"
        >
          <div
            css={styleBasicModal}
            tw="w-[90%] bg-aqua rounded-[20px] p-7 cursor-default"
            onClick={e => e.stopPropagation()}
          >
            {title && <h2 tw="font-bold text-xl">{title}</h2>}

            {children}
          </div>
        </div>
      )}
    </>
  )
}
