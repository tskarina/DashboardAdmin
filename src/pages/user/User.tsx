import Single from '../../components/single/Single';
import { singleUser } from '../../data';
import './user.scss';

//Fetch data and send to Single Component

const User = () => {
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;
