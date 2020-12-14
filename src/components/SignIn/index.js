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
  FormTextArea,
} from './SignInElements';
import logo from '../../images/websiteLogo.svg';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>
            <img src={logo} alt='' style={{ width: '190px' }} />
          </Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Want to contact me? ⬇️</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Message</FormLabel>
              <FormTextArea type='textarea' required />
              <FormButton type='submit'> Continue </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
