import { Box, Text, theme, Button } from '../../../theme/components';

export function Footer() {
  return (
    <Box
      tag="footer"
      styleSheet={{
        backgroundColor: "#023160",
      }}
    >
      <Box
        styleSheet={{
          overflow: "hidden",
          maxWidth: theme.space.xcontainer_xl,
          marginLeft: "auto",
          marginRight: "auto",
          paddingVertical: theme.space.x8,
          paddingHorizontal: theme.space.x4,
        }}
      >
        <Text
          styleSheet={{
            justifyContent: 'center',
            color: theme.colors.neutral.x000
          }}
        >
        </Text>
        <Button href="/FAQAllQuestionsScreen" colorVariant="neutral">
            CADASTRAR
          </Button>
      </Box>
    </Box>
  )
}
