import { Box, Image, Link, theme } from '../../../theme/components';

export function Menu() {
  return (
    <Box
      tag="header"
      styleSheet={{
        position: 'fixed',
        width: '100%',
        padding: theme.space.x4,
        backgroundImage: 'linear-gradient(180deg,rgb(0 0 0 / 60%) 0%,rgba(0,212,255,0) 100%)',
        backdropFilter: 'blur(5px)',
      }}
      >
        <Link href="/">
          <Image src="/favicon.ico" />
        </Link>
      </Box>

  )
}
