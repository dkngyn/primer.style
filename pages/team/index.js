import React from 'react'
import {Box, Text} from '@primer/components'
import Nav from '../../src/Nav'
import AvatarShape from '../../src/AvatarShape'

export default function Team() {
  return (
    <Box>
      <Nav />
      <Box p={4}>
        <Text fontSize={5}>Meet the team</Text>

        <AvatarShape shape="hexagon" src="/broccolini.jpg" />
        <AvatarShape shape="diamond" src="/jonrohan.jpg" />
        <AvatarShape shape="square" src="https://github.com/shawnbot.png" />
        <AvatarShape shape="circle" src="https://github.com/emplums.png" />
        <AvatarShape shape="diamond" src="https://github.com/emilybrick.png" />
      </Box>
    </Box>
  )
}