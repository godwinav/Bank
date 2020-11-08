import React from 'react'
import Footer from '../Footer'
import { SingInContainer, FormWrap,Icon,FormContent, Form, FormH1,FormLabel,FormInput,Text} from './SingInElements'

const SingIn = () => {
    return (
        <SingInContainer>
            <FormWrap>
                <Icon to='/'>$Home</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sing In to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='text' required/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password'></FormInput>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </SingInContainer>
    )
}

export default SingIn
