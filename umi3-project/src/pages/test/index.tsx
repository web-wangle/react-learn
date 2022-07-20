import { Button } from 'antd';
import { Link, history } from 'umi';

const TestPage: React.FC = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <Link to="/">Home</Link>
      <Button 
        type="primary"
        onClick={() => {history.push('/')}}
        >
          Primary Button
      </Button>
    </div>
  );
}

export default TestPage
