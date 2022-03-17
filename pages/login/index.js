import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { LockClosedIcon } from '@heroicons/react/solid';
import { validate_username } from '../../utils/validate';
import { useState } from 'react';

export default function LoginForm() {
  const [openResetForm, setOpenResetForm] = useState(false);

  const handleOpenResetForm = () => {
    setOpenResetForm(!openResetForm);
  };

  const onFinish = async (values) => {
    var username = values.username;
    var password = values.password;
    console.log('login form values', values);
  };

  const onReset = async (values) => {
    var username = values.username;
    console.log('reset form values', values);
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
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p>
        </div>

        {!openResetForm ? (
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

            <div className="flex items-center justify-between">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>
                  <span className="block text-sm text-gray-900">
                    Remember me
                  </span>
                </Checkbox>
              </Form.Item>

              <div className="text-sm">
                <span
                  className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
                  onClick={handleOpenResetForm}
                >
                  Forgot your password?
                </span>
              </div>
            </div>

            <Form.Item>
              <button
                className="group relative mt-6 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={onFinish}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>

              <div className="mt-4 text-right font-medium hover:underline">
                Or <a href="/register">register now!</a>
              </div>
            </Form.Item>
          </Form>
        ) : (
          <Form
            name="reset_password_form"
            initialValues={{
              remember: false,
            }}
            onFinish={onReset}
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

            <button
              className="group relative mt-6 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={onReset}
            >
              Recover
            </button>

            <div
              className="mt-4 text-right font-medium hover:underline lg:cursor-pointer"
              onClick={setOpenResetForm}
            >
              Remember your password? Back to login
            </div>
          </Form>
        )}
      </div>
    </div>
  );
}
