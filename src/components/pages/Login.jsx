import React, { useEffect, useState } from "react";
import { PageLayout } from "../common/PageLayout";
import styled from "styled-components";
import { Input } from "../common/Input";
import PasswordInput from "../common/PasswordInput";
import { Button } from "../common/Button";
import { Spinner } from "../common/Spinner";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

let timeout;

const Login = () => {
  const [formFields, setFormFields] = useState({ userName: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    event.persist();
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              value={formFields.userName}
              onChange={handleInputChange}
              name="userName"
              placeholder="Enter your UserName"
              type="text"
            />
            <PasswordInput
              value={formFields.password}
              onChange={handleInputChange}
              name="password"
            />
          </>
        )}
        <Button large disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
};

export default Login;
