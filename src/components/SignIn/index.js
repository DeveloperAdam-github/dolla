import React from 'react';
import {
  Container,
  FormInput,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormButton,
  Text,
} from './SignInElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>dolla</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign into your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'> Continue </FormButton>
              <Text>Forgot password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;