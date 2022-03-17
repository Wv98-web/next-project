import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { validate_username } from '../../utils/validate';

export default function RegisterForm() {
  const onFinish = async (values) => {
    var username = values.username;
    var password = values.password;
    console.log('register form values', values);
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>

        <Form
          name="login_form"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (validate_username(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('手机号/邮箱格式不正确'));
                },
              }),
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              size="large"
              required
            />
          </Form.Item>
          <Form.Item name="password">
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              size="large"
              required
            />
          </Form.Item>

          <button
            className="group relative mt-6 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={onFinish}
          >
            Create account
          </button>
        </Form>
      </div>
    </div>
  );
}
