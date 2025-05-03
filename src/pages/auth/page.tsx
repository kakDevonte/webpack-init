import { LogoIcon } from '@/shared/components/icons';
import { Button, Input } from '@elephas/react-core';
import styled from '@emotion/styled';

export const AuthPage = () => {
  return (
    <Root>
      <Container>
        <Title>Вход</Title>
        <Stack>
          <Input label='Логин' />
          <Input label='Пароль' type='password' />
        </Stack>
        <Button style={{ justifyContent: 'center' }} appearance='primary'>
          Войти
        </Button>
        <Group>
          <LogoIcon color='#27293B' />
          <Text>/ WEB-АРМ Администратор</Text>
        </Group>
      </Container>
    </Root>
  );
};

const Root = styled.div({
  width: '100dvw',
  height: '100dvh',
  backgroundColor: '#EEEEEF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const Container = styled.div({
  width: 380,
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  padding: 24,
  borderRadius: 20,
  backgroundColor: 'white'
});

const Stack = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 16
});

const Group = styled.div({
  display: 'flex',
  gap: 6
});

const Title = styled.h2({
  color: '#4A4953',
  textAlign: 'center',
  fontSize: 22,
  fontWeight: 700,
  lineHeight: '28px'
});

const Text = styled.h2({
  color: '#27293B',
  fontSize: 21,
  fontVariantNumeric: 'lining-nums proportional-nums',
  lineHeight: '30px',
  letterSpacing: '0.082px'
});
