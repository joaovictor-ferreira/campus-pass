import { SignUpFormStyles } from './SignUpForm.styles';
// import { HTMLInputTypeAttribute } from 'react';
import Image from 'next/image';
import campusPass from '@/presentation/assets/icons/campus-pass.png';

export const SignUpForm: React.FC = () => {
  return (
    <SignUpFormStyles.Form>
      <SignUpFormStyles.FormFields>
        <Image src={campusPass} alt="Logo" width={150} />
        <input
          type="name"
          placeholder="Digite seu Nome"
          onChange={(e: any) => {
            console.log('name', e.target.value);
          }}
          required
        />
        <input
          type="email"
          placeholder="Digite seu Email"
          onChange={(e: any) => {
            console.log('email', e.target.value);
          }}
          required
        />
        <input
          type="password"
          placeholder="Digite sua Senha"
          onChange={(e: any) => {
            console.log('senha', e.target.value);
          }}
          required
        />
        <input
          type="password"
          placeholder="Confirmar Senha"
          onChange={(e: any) => {
            console.log('ConfirmarSenha', e.target.value);
          }}
          required
        />
        <div>
          <p>● Sua senha deve conter 8 caracteres</p>

          <p>● Sua senha deve conter letras maiúsculas e minúsculas</p>

          <p>● Sua senha deve conter números</p>
        </div>

        <button type="submit">Cadastrar</button>
      </SignUpFormStyles.FormFields>
    </SignUpFormStyles.Form>
  );
};
