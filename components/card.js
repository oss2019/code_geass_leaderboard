/* This code is defining a React component called `Card` that uses the `motion` component from the
`framer-motion` library to animate its appearance. It also uses the `css` function from the
`linaria` library to define the styles for the component. The `variants` object defines the
different states of the animation, and the `className` prop applies the styles to the component. The
`children` prop is used to render any child components passed to the `Card` component. Finally, the
`export default` statement exports the `Card` component so it can be used in other parts of the
application. */
'use client';

import { css } from '@linaria/core'
import { motion } from 'framer-motion'

const variants = {
  visible: {
    opacity: 1
  },
  hidden: { opacity: 0 }
}

const styles = css`
  background: white;
  border-radius: 9px;
  box-shadow: 0 0 21px rgba(0, 0, 0, 0.25);
  padding: 34px;
`

const Card = ({ children, ...rest }) => {
  return (
    <motion.section
      positionTransition
      initial="hidden"
      animate="visible"
      variants={variants}
      className={styles}
      {...rest}
    >
      {children}
    </motion.section>
  )
}

export default Card