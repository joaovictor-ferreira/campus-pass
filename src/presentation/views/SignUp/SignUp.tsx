import { SignUpForm } from '@/presentation/components/Forms/SignUpForm/SignUpForm';
import { SignUpStyles } from './SignUp.styles';

export const SignUp: React.FC = () => {
  return (
    <SignUpStyles.Container>
      <SignUpForm />
    </SignUpStyles.Container>
  );
};
