/* This code is defining styled components for a table, including a table header and table items. It is
using the Linaria library for styling and the Framer Motion library for animations. The `Table`
component is a styled `div` that defines the layout and styling of the table. The `Divider`
component is a styled `div` that creates a horizontal line to separate table items. The
`ColumnHeader` component is a styled `h2` that defines the styling and animations for the table
headers. The `TableHeader` component is a functional component that renders the table headers using
the `ColumnHeader` component and passes in props for sorting. The `TableItem` component is a
functional component that renders a single row of the table using the `Divider` component and
`motion` components for animations. */
'use client';

import { styled } from 'linaria/react'
import { motion } from 'framer-motion'

export const Table = styled.div`
  margin-top: 21px;
  width: 100%;
  display: grid;
  grid-gap: 13px 21px;
  grid-template-columns: max-content 2fr 2fr 2f 2fr 2fr;
  align-items: center;
`

const Divider = styled.div`
  grid-column-end: span 6;
  height: 2px;
  background: gainsboro;
`

const ColumnHeader = styled(motion.h2)`
  font-size: 1.2rem;
  margin: 0;
`

const columnHeaderVariants = {
  hovered: { scale: 1.05 },
  tapped: { scale: 0.95 }
}

export const TableHeader = props => {
  return (
    <>
      <ColumnHeader
        variants={columnHeaderVariants}
        onClick={props.onSortByRank}
        whileHover="hovered"
        whileTap="tapped"
      >
        Rank
      </ColumnHeader>
      <ColumnHeader>Name</ColumnHeader>
      <ColumnHeader>Language</ColumnHeader>
      <ColumnHeader
        variants={columnHeaderVariants}
        onClick={props.onSortByScore}
        whileHover="hovered"
        whileTap="tapped"
      >
        Score
      </ColumnHeader>
      <ColumnHeader
        variants={columnHeaderVariants}
        onClick={props.onSortByTime}
        whileHover="hovered"
        whileTap="tapped"
      >
        Time (ms)
      </ColumnHeader>
      <ColumnHeader
        variants={columnHeaderVariants}
        onClick={props.onSortBySize}
        whileHover="hovered"
        whileTap="tapped"
      >
        Size (chars)
      </ColumnHeader>
    </>
  )
}

export const TableItem = props => {
  return (
    <>
      <Divider />
      <motion.div
        positionTransition
        style={{
          fontSize: '3rem',
          fontWeight: '700',
          color: 'palevioletred'
        }}
      >
        {props.rank}
      </motion.div>
      <motion.div positionTransition>{props.name}</motion.div>
      <motion.div positionTransition>{props.language}</motion.div>
      <motion.div positionTransition style={{ justifySelf: 'center' }}>
        {props.score.toLocaleString()}
      </motion.div>
      <motion.div positionTransition style={{ justifySelf: 'center' }}>
        {props.time.toLocaleString()}
      </motion.div>
      <motion.div positionTransition style={{ justifySelf: 'center' }}>
        {props.size.toLocaleString()}
      </motion.div>
    </>
  )
}