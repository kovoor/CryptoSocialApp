import { useColorMode, Switch } from '@chakra-ui/react'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Switch
      position="relative"
      align="center"
      top={{base: 0, md: "0.7rem" }}
      right="rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  )
}
