import Head from 'next/head';
import { Menu } from '../../components/commons/Menu';
import { Box, Text, Link, Image, theme } from '../../theme/components';
    

function CADASTRO({ categories }) {
  return (
    <>
      <Head>
        <title>CADASTRO</title>
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
            <Text tag="h1" variant="heading3">
            <form>
            <div class="">
            <label for="inputNome"></label>
            <input type="nome" class="form-control" id="inputNome" placeholder="Nome"></input>
            </div>
            <div class="">
            <label for="inputSobrenome"></label>
            <input type="sobrenome" class="form-control" id="inputSobrenome" placeholder="Sobrenome"></input>
            </div>
            <div class="">
            <label for="inputEmail"></label>
            <input type="email" class="form-control" id="inputEmail" placeholder="Email"></input>
            </div>
            <div class="">
            <label for="inputPassword"></label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Senha"></input>
            </div>
            <div class="btn-group">
            <button type="submit" class="buttonCad"><Link href="/login"><a>Cadastrar</a></Link></button>
          </div>
        </form>
            </Text>
          </Box>
    </>
  )
}

export default CADASTRO;
