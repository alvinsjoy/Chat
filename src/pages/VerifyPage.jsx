import { account } from '../appwriteConfig';
import { useAuth } from '../utils/hooks/authHook';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const VerifyPage = () => {
  const navigate = useNavigate();
  const { user, handleVerification, fetchUser } = useAuth();

  useEffect(() => {
    if (!user) {
      return navigate('/login');
    }
    if (user && user.emailVerification) {
      return navigate('/');
    }
    if (window.location.search) {
      const urlParams = new URLSearchParams(window.location.search);
      const secret = urlParams.get('secret');
      const userId = urlParams.get('userId');
      account.updateVerification(userId, secret).then(
        async () => {
          await fetchUser();
          navigate('/');
        },
        (error) => console.log(error),
      );
    }
  }, [navigate, user, fetchUser]);

  return (
    <div className="auth--container">
      <div className="form--wrapper">
        <div className="field--wrapper">
          <p>
            Please verify your email to proceed. If you have already verified,{' '}
            <Link to="/">continue</Link>.
          </p>
          <input
            type="submit"
            value="Resend Verification Email"
            className="btn btn--lg btn--main"
            onClick={() => handleVerification()}
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
