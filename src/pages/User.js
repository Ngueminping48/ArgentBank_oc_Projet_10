import AccountCard from '../components/AccountCard';
import { accounts } from '../data/data';

const User = () => {
  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className='edit-button'>Edit Name</button>
      </div>
      <h2 className='sr-only'>Accounts</h2>

      {accounts.map((account, index) => (
        <AccountCard
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.description}
          buttonText={account.buttonText}
        />
      ))}
    </main>
  );
};

export default User;
