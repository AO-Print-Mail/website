import { Box, Flex, ProgressBar, Spacer } from '@theme/atoms'
import { Close, SuccessCheck } from '@theme/icons'
import { Variants, m as motion, useMotionValue, animate } from 'framer-motion'
import { styled } from '@theme/stitches.config'
import { Paragraph } from '@theme/typography'
import { Button } from '@components/button'
import React, { useEffect } from 'react'
import { CircleLoader } from '@theme/atoms/CircleLoader'

export interface FormSuccessProps {
  heading: string
  paragraph: string
  handleClose: (e?: React.MouseEvent) => void
}

const ParentAnimationVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.5 },
  },
}
const ChildAnimationVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export const FormSuccess: React.FC<FormSuccessProps> = ({
  heading,
  paragraph,
  handleClose,
  ...props
}) => {
  const progress = useMotionValue(0)
  function handleClick(e?: React.MouseEvent) {
    e.preventDefault()
    handleClose(e)
  }
  useEffect(() => {
    animate(progress, 100, { duration: 4, onComplete: handleClose })
  }, [])
  return (
    <Flex
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={ParentAnimationVariants}
      css={{
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        p: '$4',
        position: 'relative',
      }}
    >
      <ProgressBar
        css={{
          position: 'absolute',
          lbr: '0',
          br: 0,
          '&.*': {
            br: '0',
          },
        }}
        progress={progress}
      />
      <SuccessCheck
        css={{ size: '$9' }}
        as={motion.svg}
        variants={ChildAnimationVariants}
      />
      <Box css={{ pb: '$4' }}>
        <Paragraph
          alignCenter
          size="l"
          as={motion.h2}
          variants={ChildAnimationVariants}
        >
          {heading}
        </Paragraph>
        <Paragraph
          alignCenter
          size="s"
          as={motion.h2}
          variants={ChildAnimationVariants}
        >
          {paragraph}
        </Paragraph>
      </Box>
      <Button
        rightIcon={<CircleLoader />}
        as={motion.button}
        onClick={handleClick}
        variants={ChildAnimationVariants}
      >
        Close
      </Button>
      <Spacer size="large" />
      <Spacer size="large" />
    </Flex>
  )
}
