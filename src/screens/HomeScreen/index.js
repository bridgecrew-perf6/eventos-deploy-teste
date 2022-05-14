import Head from 'next/head';
import { Menu } from '../../components/commons/Menu';
import { theme, Box, Button, Text, Image } from '../../theme/components';


function HomeScreen() {
  return (
    <>
      <Head>
        <title>Home - Eventos</title>
      </Head>

      <Menu />

      <Box
        tag="main"
        styleSheet={{
          flex: 1,
          paddingTop: theme.space.x20,
          paddingHorizontal: theme.space.x4,
          background: `linear-gradient(${theme.colors.primary.x900}, ${theme.colors.primary.x075})`,
          color: theme.colors.neutral.x000,
          display: 'flex',
          alignItems: 'center',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          flexWrap: 'nowrap',
          justifyContent: 'space-evenly',
        }}
      >
        <Box
          styleSheet={{
            maxWidth: '450px'
          }}
        >
          <Text tag="h1" variant="display1">
            Bem Vindo
          </Text>
          <Text tag="p" variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.
            Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et maleuada fames ac turpis egestas. Nula em risco.
            Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
          </Text>
          <Button href="/login" colorVariant="neutral">
            ENTRAR
          </Button>
          <Button href="/cadastro" colorVariant="neutral">
            CADASTRAR
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default HomeScreen;
